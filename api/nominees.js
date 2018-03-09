$(function(){
    // 热门列表模板
    var data = {
        nominees:[
                {img:'../static/images/hotel-list.jpg',p:'The Most Highly Anticipated Hotel Opening of the Year',a:'Hotel Name Hotel Name Hotel Name',span1:'&nbsp;&nbsp;Beijing',span2:'Address: 380 Weihai Lu, by Shimenyi Lu',span3:'地址  威海路380号，近石门一路',span4:'Phone  5237 8888'},
                {img:'../static/images/hotel-list.jpg',p:'The Most Highly Anticipated Hotel Opening of the Year',a:'Hotel Name Hotel Name Hotel Name',span1:'&nbsp;&nbsp;Beijing',span2:'Address: 380 Weihai Lu, by Shimenyi Lu',span3:'地址  威海路380号，近石门一路',span4:'Phone  5237 8888'},
                {img:'../static/images/hotel-list.jpg',p:'The Most Highly Anticipated Hotel Opening of the Year',a:'Hotel Name Hotel Name Hotel Name',span1:'&nbsp;&nbsp;Beijing',span2:'Address: 380 Weihai Lu, by Shimenyi Lu',span3:'地址  威海路380号，近石门一路',span4:'Phone  5237 8888'},
                {img:'../static/images/hotel-list.jpg',p:'The Most Highly Anticipated Hotel Opening of the Year',a:'Hotel Name Hotel Name Hotel Name',span1:'&nbsp;&nbsp;Beijing',span2:'Address: 380 Weihai Lu, by Shimenyi Lu',span3:'地址  威海路380号，近石门一路',span4:'Phone  5237 8888'}
            ]
    }
    var html = template("nominees",data);
    $('#nomineesList').html(html);

    imgLazyLoad();
   
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

    // 图片懒加载
    function imgLazyLoad() {
        $("img.lazy").lazyload({ 
            effect : "fadeIn",
            threshold: 200,
        }); 
    }

});       