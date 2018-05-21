<?php
    class admins_plugin {

        function go(){
            //todo start session
            add_action('init', array(__CLASS__, 'init'));
            add_action('init', array(__CLASS__, 'menu'));
            add_action('catch-post', array(__CLASS__, 'catch_post'));
            add_action('before-output', array(__CLASS__, 'before_output'));
            add_action('content-admins', array(__CLASS__, 'page'));
            add_action('install-admins.plugin.php', array(__CLASS__, 'install_options_table'));
        }
    }
?>