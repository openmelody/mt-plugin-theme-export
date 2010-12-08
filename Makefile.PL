use ExtUtils::MakeMaker;

use YAML::Any qw(LoadFile);
my $file = "addons/ThemeExport.plugin/config.yaml";
my $version = LoadFile($file)->{version} ||
    die "No version found in $file";

WriteMakefile(
    NAME            => 'Theme Exporter',
    VERSION         => $version,
    DISTNAME        => 'ThemeExport',
);
