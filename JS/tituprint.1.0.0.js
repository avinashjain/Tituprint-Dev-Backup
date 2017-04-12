/**
 * Created by Admin on 12/04/2017.
 */
$(function(){
   var _header_menu = $('header .container').find('.navbar-collapse').html();
   console.log(_header_menu);
    $('header .container').find('.navbar-collapse').remove();
    var _ctrl_header_menu = $(_header_menu);
    _ctrl_header_menu.css('position','absolute');
    _ctrl_header_menu.css('bottom','0px');
    _ctrl_header_menu.css('z-index','1');
    _ctrl_header_menu.css('margin','0 auto');
    _ctrl_header_menu.css('left','0');
    _ctrl_header_menu.css('right','0');
    _ctrl_header_menu.css('overflow','hidden!important');
    _ctrl_header_menu.css('width','96%');
    _ctrl_header_menu.css('text-align','center');

    $('#top-banner').append(_ctrl_header_menu);
});
