$(function() {


	// 显示导航栏高亮
	getHight ();
	function getHight () {
		var barFlag = window.localStorage.getItem('barFlag');
		$('#navBar li.bar-active').each(function(index, el) {
			$(this).children('a').removeClass('active');
			if ($(this).attr('barflag') == barFlag) {
				$(this).children('a').addClass('active');
			}
		});

	}
	$('#navBar li.bar-active').on('click', function(event) {
		var barFlag = $(this).attr('barflag');
		window.localStorage.setItem('barFlag',barFlag);
	});
});