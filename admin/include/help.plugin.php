<? php

function help_register_menu(){
    add_menu_item('Help', '?page=help');
}

add_action('init', 'help_register_name', 99);

function help_page(){
    ?>
    <article>
    <!-- TODO ADD IN THE HELP SHIT -->    
</article>
<? php

    add_action('contact_help', 'help_page');
}