$(function(){
    // Most Popular Nominees模板
    var data = {
        nominee:[
                {img:'../static/images/list1.png',p:'Jumeirah Himalayas Jumeirah Himalayas..',span:'1New Hotel of the Year New Hotel of the Year'},
                {img:'../static/images/list1.png',p:'Jumeirah Himalayas Jumeirah Himalayas..',span:'1New Hotel of the Year New Hotel of the Year'},
                {img:'../static/images/list1.png',p:'Jumeirah Himalayas Jumeirah Himalayas..',span:'1New Hotel of the Year New Hotel of the Year'},
                {img:'../static/images/list1.png',p:'Jumeirah Himalayas Jumeirah Himalayas..',span:'1New Hotel of the Year New Hotel of the Year'},
                {img:'../static/images/list1.png',p:'Jumeirah Himalayas Jumeirah Himalayas..',span:'1New Hotel of the Year New Hotel of the Year'},
                {img:'../static/images/list1.png',p:'Jumeirah Himalayas Jumeirah Himalayas..',span:'1New Hotel of the Year New Hotel of the Year'}
            ]
    }
    var html = template("nomineesContent",data);
    $('#nominees').html(html);

    // hotel lunbo模板
    var data_1 = {
        figure:[
            {
                set_cat_id: 1,
                set_id:1,
                set_img:'../static/images/lunbo1.jpg'
            },
            {
                set_cat_id: 2,
                set_id:2,
                set_img:'../static/images/photo1.jpg'
            },
            {
                set_cat_id: 3,
                set_id:3,
                set_img:'../static/images/photo2.jpg'
            }
        ]
    }
    var html2 = template("hotelLunbo",data_1);
    $('#lunbo').html(html2);

    // swiper轮播
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        initialSlide: 0,
        effect: 'coverflow',
        grabCursor: false,
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 'auto',
        autoplay: 2000,
        loop: true,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
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

    // slick轮播
    $('.general-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }
        ]
    });
});