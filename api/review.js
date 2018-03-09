$(function(){

    // hotel lunbo模板
    // var data_1 = {
    //     figure:[
    //         {
    //             set_cat_id: 1,
    //             set_id:1,
    //             set_img:'../static/images/lunbo1.jpg'
    //         },
    //         {
    //             set_cat_id: 2,
    //             set_id:2,
    //             set_img:'../static/images/photo1.jpg'
    //         },
    //         {
    //             set_cat_id: 3,
    //             set_id:3,
    //             set_img:'../static/images/photo2.jpg'
    //         }
    //     ]
    // }
    // var html2 = template("hotelLunbo",data_1);
    // $('#lunbo').html(html2);

    // swiper轮播
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        autoplay: 5000,
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
        itemWidth: 165,
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

});