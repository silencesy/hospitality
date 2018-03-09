$(function(){
    //奖项列表模板
    var data = {
        awards:[
                {a1:'New Hotel of the Year',a2:'Hotel Name Hotel Name Hotel Name',span:'8345'},
                {a1:'The Most Highly Anticipated Hotel Opening of the Year',a2:'Hotel Name Hotel Name Hotel Name',span:'8345'},
                {a1:'Luxury Hotel of the Year',a2:'Hotel Name Hotel Name Hotel Name',span:'8345'},
                {a1:'MICE Hotel of the Year',a2:'Hotel Name Hotel Name Hotel Name',span:'8345'},
                {a1:'Business Hotel of the Year',a2:'Hotel Name Hotel Name Hotel Name',span:'8345'},
                {a1:'Family-friendly Hotel of the Year',a2:'Hotel Name Hotel Name Hotel Name',span:'8345'},
                {a1:'Art Hotel of the Year',a2:'Hotel Name Hotel Name Hotel Name',span:'8345'},
                {a1:'The Most Highly Anticipated Serviced Apartment',a2:'Hotel Name Hotel Name Hotel Name',span:'8345'},
                {a1:'Family-friendly Serviced Apartment of the Year',a2:'Hotel Name Hotel Name Hotel Name',span:'8345'},
                {a1:'New Hotel of the Year',a2:'Hotel Name Hotel Name Hotel Name',span:'8345'}
            ]
    }
    var html = template("awards",data);
    $('#awardsContainer').html(html);
   
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