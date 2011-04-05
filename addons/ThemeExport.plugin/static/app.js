var page = 1;
var response_pos = 0;
function setPage(p) {
    page = p;
    $('#steps li').removeClass('active');
    $('.page').hide();
    $('#page-' + p).show();
    var step = $('#steps li.page-' + p);
    step.addClass('active');
}
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
    
    // After the log is finished, show the result. This shouldn't display
    // until after scrollTo is done in the for loop above, but it appears
    // early. Is there a scrollTo option to make it not continue until done?
    $('#export-pane .progress').show();
}
$(document).ready( function() {
    $('#steps li').click( function() {
        var p = $(this).attr('pageid');
        if (p != page) {
            setPage(p);
        }
    });
});
