function interactive_export( c ) {
    var responseText;
    try {
        responseText = c.responseText;
    } catch ( e ) {
        return;
    }
    if (!responseText) return;
    var text = responseText.substr(response_pos);
    text = text.replace(/\s*JSON:(.|\n)*/, '');
    // strip any partial lines. we'll grab 'em next time
    if (!text.match(/\n$/))
        text = text.replace(/(\r?\n)[^\r\n]*$/, '$1');
    response_pos += text.length;
    if (!text.length) return;
    
    text = text.replace(/\r?\n$/, '');
    
    var lines = text.split(/\r?\n/);
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var h = $('#export-log ul').append('<li>' + line + '</li>').height();
        $('#export-log').scrollTo( 'max' , { 'axis' : 'y' } );
    }
}

jQuery(document).ready( function($) {
    // Paginate the steps with the jQuery.evtpaginate plugin.
    var wrap = $('ul#steps');

    $('#previous-step-button').click(function(){
        // Data doesn't really need to be validated when moving back--only forward.
        wrap.trigger('prev.evtpaginate');
        return false;
    });

    $('#next-step-button').click(function(){
        wrap.trigger('next.evtpaginate');
        return false;
    });

    // Hide and show the appropriate buttons
    wrap.bind( 'finished.evtpaginate', function(e, num, isFirst, isLast ){ 
        if (isFirst && isLast) {
            // A one-page wizard.
            $('#previous-step-button').addClass('hidden');
            $('#next-step-button').addClass('hidden');
            $('#export-button').removeClass('hidden');
        }
        else if (isFirst) {
            // This is the first page. Hide the "Previous" pagination button.
            $('#previous-step-button').addClass('hidden');
            $('#next-step-button').removeClass('hidden');
            $('#export-button').addClass('hidden');
        }
        else if (isLast) {
            // This is the last page. Hide the "Next" button and show the submit button.
            $('#previous-step-button').removeClass('hidden');
            $('#next-step-button').addClass('hidden');
            $('#export-button').removeClass('hidden');
        }
        else {
            // Somewhere in the middle--show both pagination buttons and hide the submit.
            $('#previous-step-button').removeClass('hidden');
            $('#next-step-button').removeClass('hidden');
            $('#export-button').addClass('hidden');
        }
    });

    // call the jQuery.evtpaginate plugin. This is responsible for only
    // showing one step at a time.
    wrap.evtpaginate({perPage:1});

});
