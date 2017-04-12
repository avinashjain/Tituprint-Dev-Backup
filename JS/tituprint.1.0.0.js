/**
 * Created by Admin on 12/04/2017.
 */
$(function(){
   var _header_menu = $('header .container').find('.navbar-collapse').html();
   console.log(_header_menu);
   _header_menu = '<div class="navbar-collapse">'+_header_menu+'</div>';
    $('header .container').find('.navbar-collapse').remove();
    var _ctrl_header_menu = $(_header_menu);
    _ctrl_header_menu.css('position','absolute');
    _ctrl_header_menu.css('bottom','10px');
    _ctrl_header_menu.css('z-index','1');
    _ctrl_header_menu.css('margin','0 auto');
    _ctrl_header_menu.css('left','0');
    _ctrl_header_menu.css('right','0');
    _ctrl_header_menu.css('overflow','hidden!important');
    _ctrl_header_menu.css('width','96%');
    _ctrl_header_menu.css('text-align','center');
    _ctrl_header_menu.find('a').css('padding','0px');
    _ctrl_header_menu.find('a').find('span').css('padding','0 15px 0 10px');
    _ctrl_header_menu.find('a').find('span').css('font-size','13px');
    _ctrl_header_menu.find('a').find('span').css('float','left');
    _ctrl_header_menu.find('a').find('span').css('font-family','Tahoma, Geneva, sans-serif');
    _ctrl_header_menu.find('a').find('span').css('border-right','1px solid #fff92b');

    $('#top-banner').append(_ctrl_header_menu);
});
