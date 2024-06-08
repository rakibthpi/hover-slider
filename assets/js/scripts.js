$(document).ready(function(){
	// Mobile Menu
	// $('.logo a i').click(function(){
	// 	$('.menu ul').slideToggle(1000);

	// 	return false
	// });

	// Banner Carousel
	// $('.banner_carousel').owlCarousel({
	// 	items:1,
	// 	loop:true,
	// 	nav:true,
	// 	dots:true,
	// 	autoplay:true,
	// });


 $(".mini").hover(function() {
    var index = $(this).data("index");
    $("#hoverslider li").removeClass("active");
    $(".mini").removeClass("active");
    $("#hoverslider li").eq(index).addClass("active");
    $(".mini").eq(index).addClass("active");
  });




});

function myFunction(x) {
  x.classList.toggle("change");
}