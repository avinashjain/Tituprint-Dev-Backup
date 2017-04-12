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
});
