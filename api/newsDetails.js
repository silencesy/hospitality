$(function(){
    // 新闻列表模板
    var data = {
        news:[
                {img:'../static/images/hotel-list.jpg',p:'News describe News describe News describe',span:'News title news title news'},
                {img:'../static/images/hotel-list.jpg',p:'News describe News describe',span:'News title news title news'},
                {img:'../static/images/hotel-list.jpg',p:'News describe News describe News describe',span:'News title news title news'},
                {img:'../static/images/hotel-list.jpg',p:'News describe News describe',span:'News title news title news'}
            ]
    }
    var html = template("newsList",data);
    $('#newsLatest').html(html);

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

});   