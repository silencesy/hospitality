$(function () {
    //投票选择
    var dataL = {
        item: [{
                title: 'New Hotels',
                list: [{
                        value: 0,
                        Explain: 'New Hotel of the Year',
                        name: 'a'
                    },
                    {
                        value: 1,
                        Explain: 'The Most Highly Anticipated Hotel Opening of the Year',
                        name: 'a'
                    }
                ]
            },
            {
                title: 'Themes and Features Hotels',
                list: [{
                        value: 0,
                        Explain: 'Historic Hotel of the Year',
                        name: 'aa'
                    },
                    {
                        value: 1,
                        Explain: 'Outstanding City View',
                        name: 'a'
                    }                    
                ]
            },
            {
                title: 'Luxury Hotels',
                list: [{
                        value: 0,
                        Explain: 'Luxury Hotel of the Year',
                        name: 'aa'
                    }
                ]
            },
            {
                title: 'Award for Eco-tourism Destination of the Year',
                list: [{
                        value: 0,
                        Explain: 'Award for Eco-tourism Destination of the Year',
                        name: 'aa'
                    }
                ]
            },
            {
                title: 'Outstanding Hotel Facilities & Services',
                list: [{
                        value: 0,
                        Explain: 'Outstanding Service',
                        name: 'aa'
                    },
                    {
                        value: 1,
                        Explain: 'Outstanding Hotel Spa',
                        name: 'aa'
                    },
                    {
                        value: 2,
                        Explain: 'Outstanding Hotel Swimming Pool',
                        name: 'aa'
                    }
                ]
            },
            {
                title: 'Art-themed Hotels',
                list: [{
                        value: 0,
                        Explain: 'Art Hotel of the Year',
                        name: 'aa'
                    },
                    {
                        value: 1,
                        Explain: 'Boutique Hotel of the Year',
                        name: 'aa'
                    },
                    {
                        value: 1,
                        Explain: 'Outstanding Hotel Design',
                        name: 'aa'
                    }
                ]
            }
        ]
    }
    var htmlL = template("VotL", dataL);
    $('#contentVoteL').html(htmlL);

    var dataR = {
        item: [{
                title: 'Business Hotels',
                list: [{
                        value: 0,
                        Explain: 'MICE Hotel of the Year',
                        name: 'aa'
                    },
                    {
                        value: 1,
                        Explain: 'Business Hotel of the Year',
                        name: 'aa'
                    }
                ]
            },
            {
                title: 'Resort Hotels',
                list: [{
                        value: 0,
                        Explain: 'Getaway Hotel of the Year',
                        name: 'aa'
                    },
                    {
                        value: 1,
                        Explain: 'Urban Resort Hotel of the Year',
                        name: 'aa'
                    }
                ]
            },
            {
                title: 'Most Influential Hotel Company',
                list: [{
                        value: 0,
                        Explain: 'Most Influential Hotel Company',
                        name: 'aa'
                    }
                ]
            },
            {
                title: 'Family-friendly Hotels',
                list: [{
                        value: 0,
                        Explain: 'Family-friendly Hotel of the Year',
                        name: 'aa'
                    }
                ]
            },
            {
                title: 'Award for Serviced Apartments',
                list: [{
                        value: 0,
                        Explain: 'New Serviced Apartment of the Year',
                        name: 'aa'
                    },
                    {
                        value: 1,
                        Explain: 'The Most Highly Anticipated Serviced Apartment Opening of the Year',
                        name: 'aa'
                    },
                    {
                        value: 1,
                        Explain: 'Family-friendly Serviced Apartment of the Year',
                        name: 'aa'
                    },
                    {
                        value: 1,
                        Explain: 'Luxury Serviced Apartment of the year',
                        name: 'aa'
                    }
                ]
            },
            {
                title: 'Landmark Hotels',
                list: [{
                        value: 0,
                        Explain: 'Landmark Hotel of the Year',
                        name: 'aa'
                    },
                    {
                        value: 1,
                        Explain: 'The Most Influential Hotel',
                        name: 'aa'
                    }
                ]
            }
        ]
    }
    var htmlR = template("VotR", dataR);
    $('#contentVoteR').html(htmlR);
   
    var old = null;
    $('.Vlist').click(function(e) {       
        // console.log($(this).find('input'));
        radioEvent($(this).find('input'))
    })
    $('.voteItem').click(function (e) {
        // console.log($(this));
        radioEvent($(this))        
    })
    function radioEvent(stateDom) {
        console.log(stateDom);
        if (stateDom.prop('checked')) {
            stateDom.parents('li').siblings().find('input').prop('checked', false);
            console.log($(this).prop('checked'));
            stateDom.parent().next().addClass('fontColor');
            stateDom.parents('li').siblings().find('input').parent().next().removeClass(
                'fontColor');
            stateDom.prev().addClass('radioImgt');
            stateDom.prev().removeClass('radioImgf');
            stateDom.parents('li').siblings().find('input').prev().removeClass('radioImgt');
            stateDom.parents('li').siblings().find('input').prev().addClass('radioImgf');
        } else {

            stateDom.parent().next().removeClass('fontColor');
            stateDom.prev().addClass('radioImgf');
            stateDom.prev().removeClass('radioImgt');
            stateDom.parents('li').siblings().find('input').prev().removeClass('radioImgf');
            stateDom.parents('li').siblings().find('input').prev().addClass('radioImgf');
        }
    }

    //提交时弹出框
    $('#voteSub').click(function() {
        $('.info-popup').show();
        $('.info-popup-backdrop').show();
        console.log($('.info-popup'));
    });    

    // 置顶导航栏
    $(window).scroll(function () {
        $('.fixed-nav')[$(document).scrollTop() >= 220 ? 'addClass' : 'removeClass'](
            'fixed-enable');
    });

    // 鼠标滑过下拉框
    $('li.dropdown').mouseover(function () {
        $(this).addClass('open');
    }).mouseout(function () {
        $(this).removeClass('open');
    });

    // 微信二维码
    $('.pointer.top-icon').hover(function () {
        $(this).children('.wechat-layer').show();
    }, function () {
        $(this).children('.wechat-layer').hide();
    });
});