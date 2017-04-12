/**
 * Created by Admin on 12/04/2017.
 */
$(function(){
   var _header_menu = $('header .container').find('.navbar-collapse').html();
   console.log(_header_menu);
   _header_menu = '<div class="navbar-collapse" id="div_header_menus">'+_header_menu+'</div>';
    $('header .container').find('.navbar-collapse').remove();
    var _ctrl_header_menu = $(_header_menu);

    $('#top-banner').append(_ctrl_header_menu);

    var pathname = window.location.pathname;
    console.log('pathname: '+pathname);
    if(pathname == '/' || pathname.indexOf('index.html') != -1){
        $('head').append('<link rel="stylesheet" href="https://cdn.rawgit.com/avinashjain/Tituprint-Dev-Backup/b91b29a0ecd7c3002d23651af7da669611658885/CSS/1.0-custom.css" type="text/css" />');
    }
    $('body').show();
    var url = window.location.href;
    console.log('url: '+url);
});
