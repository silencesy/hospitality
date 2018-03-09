$(function(){
    var host = window.location.host;
    var ticketsName = $('#ticketsName').val();
    var codeBtn = document.getElementById('codeBtn');
    var countdown=60;

    $('#codeBtn').on('click',function(event) {
        var phone = $.trim($("#phone").val());
        if (!phone) {
            $.mvalidateTip("Please enter your number!");
            return;
        } else if (!(/^1[34578]\d{9}$/.test(phone))) {
            $.mvalidateTip("Please enter a 11-digit valid number!");
            return;
        }   
        settime(this);
        // 发送ajax获取验证码   

        $.ajax({
            type: "POST",
            url: "http://"+host+"/"+ticketsName+"/ShortMessage/shortMessage",
            data: $('#userInfo').serialize(),
            success: function (msg) {
                console.log(msg)
            },
            error: function(data) {
                alert(123123123);
            }
        })
    });
                    
    $("#userInfo").mvalidate({
        type: 1,
        onKeyup: true,
        sendForm: false,
        firstInvalidFocus: false,
        valid: function(event, options) {
            
        },
        descriptions: {                  
            phone: {
                required: 'Please enter your number!',
                pattern: 'Please enter a 11-digit valid number!'
            },
            code: {
                required: 'Please enter the verification code!',
            },
            name: {
                required: 'Please enter your name!'
            },                  
            email: {
                required: 'Please enter your email address!',
                pattern: 'Please enter a valid email address!'
            },
            password: {
                required: 'Please enter your password!',
                pattern: 'Password with 6-16 digits (must contain numbers and letters)!'
            }
        }
    }); 

        
    function settime(obj) {   
        if (countdown == 0) {   
            obj.removeAttribute("disabled");  
            obj.style.backgroundColor = "#fc4002";  
            obj.style.color = "#fff"; 
            obj.value="Send code";   
            countdown = 60;   
            return;  
        } else {   
            obj.setAttribute("disabled", true);
            obj.style.backgroundColor = "#6A6A6A"; 
            obj.style.color = "#fff";   
            obj.value = countdown+ "s";   
            countdown--;   
        }   
        setTimeout(function() {   
            settime(obj);
        },3000);
    }

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