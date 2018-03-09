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
            
            browserRedirect();
            function browserRedirect() {
              var sUserAgent = navigator.userAgent.toLowerCase();
              var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
              var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
              var bIsMidp = sUserAgent.match(/midp/i) == "midp";
              var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
              var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
              var bIsAndroid = sUserAgent.match(/android/i) == "android";
              var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
              var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
              if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                //移动端
                /*表单验证通过执行函数*/
                $.ajax({
                    type: "POST",
                    url: "http://"+host+"/"+ticketsName+"/ShortMessage/submit",
                    data:  $('#userInfo').serialize(),
                    success: function (msg) {
                        if (msg != 2) {
                            window.location.href = "http://page.thatsmags.com/WebAccess/get-weixin-code.html?appid=wx06e97f4ed4ac07e3&scope=snsapi_base&state=STATE&redirect_uri=http%3A%2F%2Fv.thatsmags.com%2F"+ticketsName+"%2FIndex%2Fmobile";
                        } else {
                            $.mvalidateTip("Please enter a correct code");
                        }
                    },
                    error: function () {
                        alert(123123123)
                    }
                })
              } else {
                //PC端
                $.ajax({
                    type: "POST",
                    url: "http://"+host+"/"+ticketsName+"/ShortMessage/submit",
                    data:  $('#userInfo').serialize(),
                    success: function (msg) {
                        if (msg != 2) {
                            window.location.href = "http://"+host+"/"+ticketsName+"/Index/web";
                        } else {
                            $.mvalidateTip("Please enter a correct code");
                        }
                        /*console.log(msg)*/
                    },
                    error: function () {
                        alert(123123123)
                    }
                })
              }
            }
            event.preventDefault();
        },
        descriptions: {                  
                phone: {
                    required: 'Please enter your number!',
                    pattern: 'Please enter a 11-digit valid number!'
                },
                code: {
                    required: 'Please enter the verification code!',
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
        },1000);
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