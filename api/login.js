$(function(){
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
