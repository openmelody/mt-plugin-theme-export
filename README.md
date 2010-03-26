This plugin provides the ability to export a blog's templates as a theme. 
Users can export a blog's templates in one of two ways:

* via the command line using the export-ts tool 
* via the administrative interface

It should also be mentioned that this plugin also provides a simple API
for managing and configuring your own theme export if you so wish. Consult
the POD documentation for MT::Theme::Exporter, found in this plugin's 
lib directory.

# Prerequisites

* Movable Type 4.x
* The perl module Archive::Zip installed

# Installation

To install this plugin follow the instructions found here:

[http://tinyurl.com/easy-plugin-install](The Ultimate Guide to Installing Movable Type Plugins)

# Usage

## Web Interface

From the Design menu select "Templates." In the sidebar under "Page Actions"
you will see a link called "Export Theme." Click this to spawn a dialog and
export a blog's templates as a theme. Then fill in the details in the dialog
that appears and when you are finished, click the Download link.

## `export-ts` Command Line Tool

A tool to export a blog's templates as a template set.

Basic Usage:

    cd /PATH/TO/MT/
    perl ./tools/export-ts --blog=1 --id="MyTemplateSet"

### Options

The following options are available:

#### blog

(required) The Blog ID(s) to export templates from. When more than one blog ID
is specified in a comma delimited list, the tool will output a theme for each
blog.

#### id

The ID to be used for the creation of the resulting plugin. This is also used to determine the output directory for related files.

#### name

The name to be used for the creation of the resulting plugin. This is also used to determine the output directory for related files.

#### version

The version string to be used for the creation of the resulting plugin.

#### static

The path to the directory containing your mt-static files for this template set. It must be a relative path from your mt-static folder.

#### key

The MT::PluginData key of the resulting template set.

#### verbose

Show verbose messages.

#### dryrun

When set to true, the tool will not actually do anything. Rather it will output logging
messages indicating what it would have done.

#### zip 

When set to true, the tool will create a zip file of the resulting theme for you
automatically.

### Example

From the command line, one would type:

    cd /PATH/TO/MT/
    chmod a+x tools/export-ts
    perl ./tools/export-ts --blog=1 --id=MySet --name="My Template Set" \
       --version=3 --out="template-sets"

This would result in the following directories being created:

    /PATH/TO/MT/template-sets/
        MySet-3.0/
            plugins/
                MySet/
                    config.yaml
                    templates/*
            mt-static/
                plugins/
                    MySet/*

You should then be able to zip up the MySet directory or simply install as you 
would install any other plugin.

Once installed you can use the "refresh blog templates" action in the sidebar of 
the the Manage Templates screen (Design > Templates). Once templates are 
refreshed, rebuild the blog.

# About Endevver

Endevver LLC is the premiere consulting company for Movable Type. To see a full
list of our services and plugins please visit [http://endevver.com][our web site].

# License

This plugin is licensed under the same terms as Perl itself.

# Support

For help with this plugin please visit http://endevver.tenderapp.com
