# Theme Export Plugin for Melody and Movable Type #

This plugin provides the ability to export a blog's templates as a theme. 
Users can export a blog's templates in one of two ways:

* via the command line using the export-theme tool 
* via the MT administrative web interface

Theme Exporter is great to kick-start theme development based on an existing
blog: it saves you the mundane effort of copy and pasting templates into text
files and starts a `config.yaml` for you. However, note that the exported
results likely need some additional love: you may want to take advantage of
features from [Config
Assistant](https://github.com/openmelody/mt-plugin-configassistant) like Theme
Options or static content deployment, or features of [Theme
Manager](https://github.com/openmelody/mt-plugin-theme-manager) like the
ability to supply documentation and preview images.

It should also be mentioned that this plugin also provides a simple API
for managing and configuring your own theme export if you so wish. Consult
the POD documentation for MT::Theme::Exporter, found in this plugin's 
lib directory.

## Prerequisites ##

* Movable Type 4.x or Melody 1.x
* The [Archive::Zip](http://search.cpan.org/dist/Archive-Zip) perl module
* [Config Assistant](https://github.com/openmelody/mt-plugin-configassistant) (core to Melody)
* [Melody Compatibility Layer](https://github.com/endevver/mt-plugin-melody-compat) (not needed for Melody)
* [Theme Manager](https://github.com/openmelody/mt-plugin-theme-manager) (not needed for Melody)

## Installation ##

The installation is the same as the standard for most MT plugins. If you need help, please see [The Ultimate Guide to Installing Movable Type Plugins](http://tinyurl.com/easy-plugin-install)

One important note is that this plugin should be installed into Movable Type's 
`addons` directory. Installing this plugin into any other directory might 
produce critical (but non-damaging) errors. So please be careful. 

**Upgrading? Take Note**

Also be aware that if you are upgrading from a previous version, you should 
remove any copy of Config Assistant from your plugins directory if one is 
installed there.

## Usage ##

### Web Interface ###

Go to the Design menu and select Theme Dashboard, then select Customization. Click the "Export Theme" link.

A pop-up dialog will appear. Fill in the General Information and Designer Details that, then click Export. When finished, click the download link.

### `export-theme` Command Line Tool ###

A tool to export a blog's templates as a template set.

#### Basic Usage ####

    cd /PATH/TO/MT/
    MT_HOME=`pwd` perl ./tools/export-theme --blog=1 --id="MyTemplateSet"

#### Options ####

The following options are available:

* **blog** - (required) The Blog ID(s) to export templates from. When more
  than one blog ID is specified in a comma delimited list, the tool will
  output a theme for each blog.

* **id** - The ID to be used for the creation of the resulting plugin. This is
  also used to determine the output directory for related files.

* **name** - The name to be used for the creation of the resulting plugin.
  This is also used to determine the output directory for related files.

* **version** - The version string to be used for the creation of the
  resulting plugin.

* **static** - The path to the directory containing your mt-static files for
  this template set. It must be a relative path from your mt-static folder.

* **key** - The MT::PluginData key of the resulting template set.

* **verbose** - Show verbose messages.

* **dryrun** - When set to true, the tool will not actually do anything.
  Rather it will output logging messages indicating what it would have done.

* **zip** - When set to true, the tool will create a zip file of the resulting
  theme for you automatically.

#### Example ####

From the command line, one would type:

    cd /PATH/TO/MT/
    chmod a+x tools/export-theme
    MT_HOME=`pwd` perl ./tools/export-theme --blog=1 --id=MySet \
                --name="My Template Set" --version=3 --out="template-sets"

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

Once installed you can use the "refresh blog templates" action in the sidebar
of the the Manage Templates screen (Design > Templates). Once templates are
refreshed, rebuild the blog.

## License ##

This plugin is licensed under the same terms as Perl itself (Artistic License).

## Support ##

Endevver does its best to support all of its open source software. For help
please visit our dedicated support site at
[http://endevver.tenderapp.com/](http://endevver.tenderapp.com/)

You may also want to peruse our [issue
tracker](https://endevver.lighthouseapp.com/projects/56202) where we track
genuine bugs and feature requests for our development.

# About Endevver #

Endevver LLC is the premiere consulting company for Movable Type. You can
follow us on Twitter at [@endevver](http://twitter.com/endevver) or see a full
list of our services and plugins on [our web site](http://endevver.com).
