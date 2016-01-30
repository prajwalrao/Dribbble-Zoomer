$(window).bind("load", function() {
	if ($(".main-shot").hasClass('zoomable')) {
		$(".main-shot").last().addClass("full-800");
	}
});