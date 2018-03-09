$(function(){
    
    // 置顶导航栏
    $(window).scroll(function () {
        $('.fixed-nav')[$(document).scrollTop() >= 220 ? 'addClass' : 'removeClass']('fixed-enable');
    });

    // 鼠标滑过下拉框
    $('li.dropdown').mouseover(function() {   
        $(this).addClass('open');
    }).mouseout(function() {        
        $(this).removeClass('open');    
    });

    // 微信二维码
    $('.pointer.top-icon').hover(function(){
        $(this).children('.wechat-layer').show();
    },function(){
        $(this).children('.wechat-layer').hide();
    });

    // 点击more显示更多奖项分类
    $('.moreOpen').click(function(){
        $(this).hide();
        $('.moreClose').show();
        $('.selectMore').css('display','block');
    }); 
    $('.moreClose').click(function(){
        $(this).hide();
        $('.moreOpen').show();
        $('.selectMore').css('display','none');
    });
});       