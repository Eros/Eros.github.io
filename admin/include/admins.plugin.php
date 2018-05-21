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

        function init(){
            if(isset($_GET['page'], $_GET['action'] && ('admins' == $_GET['page']) && 'logout' == $_GET['action']);
            self::logout();
        }
        function menu(){
            add_menu_item('Admins', '?page=admins');
        }

        function catch_post(){
            if(isset($_GET['page'], $_GET['action']) && ('admins' == $_GET['page']) && 'login' == $_GET['action']){
                self::logout();
            }
        }
        function logout(){
            if(isset($_SESSION['admin'])){
                $admin = $_SESSION['admin'];
                unset($_SESSION['admin']);
                do_action('admin-logged-out', $admin);
                add_action('before-output', array(__CLASS__, 'go_home'));
            }
        }
    }
?>