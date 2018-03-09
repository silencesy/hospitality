$(function(){

    // 新闻列表模板
    var data = {
        news:[
                {img:'../static/images/hotel-list.jpg',p:'News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe',span:'News title news title news  news  news  news  news  news  news',i:'1h ago'},
                {img:'../static/images/hotel-list.jpg',p:'News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe',span:'News title news title news  news  news  news  news  news  news',i:'1h ago'},
                {img:'../static/images/hotel-list.jpg',p:'News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe',span:'News title news title news  news  news  news  news  news  news',i:'1h ago'},
                {img:'../static/images/hotel-list.jpg',p:'News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe',span:'News title news title news  news  news  news  news  news  news',i:'1h ago'},
                {img:'../static/images/hotel-list.jpg',p:'News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe',span:'News title news title news  news  news  news  news  news  news',i:'1h ago'},
                {img:'../static/images/hotel-list.jpg',p:'News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe News describe',span:'News title news title news  news  news  news  news  news  news',i:'1h ago'}
            ]
    }
    var html = template("newsList",data);
    $('#newsContainer').html(html);

    // var pageIndex =  window.localStorage.getItem("pageIndex") || 0;
    // getTestList (pageIndex,10);
    // callBackPagination();
    imgLazyLoad();

    // function getTestList (pageIndex,pageSize) {
    //     $.ajax({
    //       url: 'http://api.findoout.com/service1.aspx',
    //       type: 'post',
    //       dataType: 'json',
    //       data: { req: '{"req":{"tm":"1425633248","sessionid":"","funcid":"101","datarow":[{"page_index":"'+ pageIndex +'","page_size":"'+ pageSize +'"}]}}' },
    //     })
    //     .done(function(data) {
    //       var testListData = data.rsp.datarow;
    //       var testList = {"list":testListData};
    //       var html = template('TestListTemplate', testList );
    //       $('#testListBox').html(html);

    //     })
    //     .fail(function() {
    //       console.log("error");
    //     })
    // }

    // 分页
    // function callBackPagination() {
    //     // 总个数
    //     var totalCount = 1000,
    //         showCount = 6,
    //     // 每页显示个数
    //         limit = 10;
    //     $('#callBackPager').extendPagination({
    //         totalCount: totalCount,
    //         showCount: showCount,
    //         limit: limit,
    //         callback: function (curr, limit, totalCount) {
    //             window.localStorage.setItem("pageIndex", curr);   
    //             getTestList (curr,10);
    //             $(document).scrollTop($('.species-box').offset().top);
    //         }
    //     });
    // }

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