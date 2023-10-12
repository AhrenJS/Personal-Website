function toggleNav() {
	if($("nav").is(":visible")){
		$("nav").fadeOut();
		$("button").removeClass("menu");
	}
	else {
		$("button").addClass("menu");
		$("nav").fadeIn().css('display', 'flex');
	}
}

$(document).ready(function(){
	$("button").click(function(){
		toggleNav();
	});
});

$(document).ready(function(){
	$(".nav-close").click(function(){
		toggleNav();
	});
});

$(document).ready(function(){
	$("nav ul li a").click(function(){
		toggleNav();
	});
});