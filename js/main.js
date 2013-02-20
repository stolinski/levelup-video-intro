$(document).ready(function() {
	$('.go').click(function(){
		$yo = $(".video-title").val();
		$(".info").fadeOut();
		var t=setTimeout(function(){
			$(".logo").addClass("animate-logo").after('<h2 class="title">' + $yo + '</h2>');
		},3000)
	});
});

