/**
 * Created by Admin on 12/04/2017.
 */
$(function(){
    $('head').append('<link rel="stylesheet" href="https://cdn.rawgit.com/avinashjain/Tituprint-Dev-Backup/0e8dce23bcf88c9abda042bc76c530da15451961/CSS/1.0-footer.css" type="text/css" />');
    var pathname = window.location.pathname;
    if(pathname == '/' || pathname.indexOf('index.html') != -1){
        var _header_menu = $('header .container').find('.navbar-collapse').html();
        _header_menu = '<div class="navbar-collapse" id="div_header_menus">'+_header_menu+'</div>';

        $('header .container').find('.navbar-collapse').remove();

        var _ctrl_header_menu = $(_header_menu);
        $('#top-banner').append(_ctrl_header_menu);

        $('head').append('<link rel="stylesheet" href="https://cdn.rawgit.com/avinashjain/Tituprint-Dev-Backup/cdf042a4e051067658e0e27c46edba11fcf29592/CSS/1.0-custom.css" type="text/css" />');
    }
    setTimeout(function(){
        $('body').show();
    },1000);

    // var url = window.location.href;
    // console.log('url: '+url);
});
