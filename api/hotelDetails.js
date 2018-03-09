// 地图
(function(){
    var mapObj = new AMap.Map("listingMapContent",{
        level: 16, zooms: [13, 18], lang: 'en'
    });//创建地图实例
    mapObj.plugin(["AMap.ToolBar"], function () {
        var toolbar = new window.AMap.ToolBar();
        toolbar.autoPosition = true;//加载工具条
        mapObj.addControl(toolbar);
    });

    var marker, lat, lng, position;
    lat = '31.237663';
    lng = '121.585541';
    position = new AMap.LngLat(lng, lat);
    mapObj.setCenter(position);
    marker = new AMap.Marker({
        icon:"http://webapi.amap.com/images/marker_sprite.png",
        draggable: false,
        position:position
    });
    marker.setMap(mapObj);//在地图上添加点
    mapObj.setFitView();
})();        

$(function(){
    
    // award颜色
    $('.numb').each(function(index,item){
        console.log($(this).text().length);
        if($(this).text().length == 1) {
            console.log($(this).parent())
            $(this).parent().css('background','#ee9f07');
        } else if ($(this).text().length == 2) {
            console.log('2222222')
            $(this).parent().css('background','#ee7f07');
        } else if ($(this).text().length == 3) {
            console.log('3333333333')
            $(this).parent().css('background','#ee5307');
        } else if ($(this).text().length == 4) {
            console.log('444444444')
            $(this).parent().css('background','#dd171e');
        }
    });
    
    // swiper轮播
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 'auto',
        autoplay: 3000,
        loop: true,
    });

    // hotel画廊轮播
    $('.image-ajax-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: true,
        itemWidth: 85,
        itemMargin: 22,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        //directionNav: false,
        animationLoop: false,
        slideshow: true,
        sync: "#carousel",
        after: function(slider) {
            $("div.gallery-page span:first").text(slider.currentSlide+1);
        }
    });

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

    //未投票时候弹出框
    $('#vote').click(function() {
        $('.info-popup').show();
        $('.info-popup-backdrop').show();
        console.log($('.info-popup'));
    });

    // $('#info-done').click(function() {
                    
              
    // });

    $("#userInfo").mvalidate({
        type: 1,
        onKeyup: true,
        sendForm: false,
        firstInvalidFocus: false,
        valid: function(event, options) {                
            // ajax
    },
    descriptions: {                 
                    phone: {
                        required: 'Please enter your number!',
                        pattern: 'Please enter a 11-digit valid number!'
                    },
                    password: {
                        required: 'Please enter your password!',
                        pattern: 'Password with 6-16 digits (must contain numbers and letters)!'
                    }
            }
    });


});   