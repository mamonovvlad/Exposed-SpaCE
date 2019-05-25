$(document).ready(function()
{
	function scrollTop(clickElem , scrollElem)
	{
	
		$(clickElem).on('click',function()
		{
		$('html, body').animate({scrollTop: $(scrollElem).offset().top} , 500);
	})


	
}


scrollTop('.arrow-down','.section-2');	
scrollTop('.map__title','.areas');
scrollTop('.det','#details');
scrollTop('.foot','#footer');
scrollTop('.cont','#cont');
$(".burger-menu").on("click" , function () {
	$(".mobile-menu-items").toggleClass('mobile-menu-item-active');
})

$(".modal_switch").on("click" , function () {
	$(".background-styles-modal").fadeIn();
	$(".modal_switch").fadeOut();
})

$(".background-styles-modal").on("click" , function () {
	$(this).fadeOut();
	$(".modal_switch").fadeIn();

})
$(".modal-description:after").on("click" , function () {

})

$(".block-one-overlay-click").click(function () {
	$(".block-one-overlay").fadeOut();
	$(".block-two").fadeIn();
	

})


$(".block-two").click(function () {
	$(".block-one-overlay").fadeIn();
	$(".block-two").fadeOut();


})

$('.single-item').slick();

function getWindowWidth() {
	return window.innerWidth || document.body.clientWidth;
 }
 
 if (getWindowWidth() <= 768) {
 
 
		 / переменная равна 1 /
		 let marker = true;
 
 
		 /* срабатывает функция и переменная marker
		 еняет значение на 0 */
		 function count() {
			  appear_modal(".background-styles-modal");
			  marker = false;
		 }
 
 
		 function appear_modal(appear_element)
		 {
			 $(appear_element).fadeIn();
 
		 }
 
			 $(window).on("scroll",function()
			 {
				 /*  сама функция сработает только при условии
				 того что marker == 1 */
			 if ( $(window).scrollTop() >=  1070) { 
					if ( marker ) {
						 count();
					}	
			 }
			 
			 })
 }


//  $('.slider-for').slick({
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	arrows: false,
// 	fade: true,
// 	asNavFor: '.slider-nav',
// 	responsive: [
// 		{
// 		  breakpoint: 768,
// 		  settings: {
// 			 slidesToShow: 1,
// 			 slidesToScroll: 1
// 		  }
// 		},
// 		{
// 		  breakpoint: 480,
// 		  settings: {
// 			 slidesToShow: 1,
// 			 slidesToScroll: 1
// 		  }
// 		}
// 		// You can unslick at a given breakpoint now by adding:
// 		// settings: "unslick"
// 		// instead of a settings object
// 	 ]
// //   });
//  $('.slider-nav').slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	dots: true,
// 	centerMode: true,
// 	focusOnSelect: true,
// 	// autoplay: true,
// 	autoplaySpeed: 3000,
// 	responsive: [
// 		{
// 		  breakpoint: 768,
// 		  settings: {
// 			 slidesToShow: 2,
// 			 slidesToScroll: 1
// 		  }
// 		},
// 		{
// 		  breakpoint: 480,
// 		  settings: {
// 			 slidesToShow: 1,
// 			 slidesToScroll: 1
// 		  }
// 		}
// 		// You can unslick at a given breakpoint now by adding:
// 		// settings: "unslick"
// 		// instead of a settings object
// 	 ]
//   });
				  

 $(".cl").click(function (e) {
	e.preventDefault();
	$(".shadow").fadeIn('');
	$(".wrapper").fadeIn('');
})
$("#form-btn").click(function (e) {
	e.preventDefault();
	$(".wrapper").fadeOut('');
})
$(".shadow").click(function (e) {
	e.preventDefault();
	$(".shadow").fadeOut('');
	$(".wrapper").fadeOut('');
})

$(".phone_mask").mask("+7(999)999-99-99");


// $(".btn").click(function (e) {
// 	e.preventDefault();
// 	$(".shadow").fadeIn('');
// 	$(".window").fadeIn('');
// })
$(".shadow").click(function (e) {
	e.preventDefault();
	$(this).fadeOut('');
	$(".window").fadeOut('');
})
$(".close").click(function (e) {
	e.preventDefault();
	$('.shadow').fadeOut('');
	$(".window").fadeOut('');
})


$("#down").click(function (e) {
	e.preventDefault();
	$(".shadow").fadeIn('');
	$(".download").fadeIn('');
})
$("#form-btn").click(function (e) {
	e.preventDefault();
	$(".download").fadeOut('');
})
$(".shadow").click(function (e) {
	e.preventDefault();
	$(".shadow").fadeOut('');
	$(".download").fadeOut('');
})


})
