$(document).ready(function()
{
	function scrollTop(clickElem , scrollElem)
	{
	
		$(clickElem).on('click',function()
		{
		$('html, body').animate({scrollTop: $(scrollElem).offset().top} , 500);
	})


	
}


scrollTop('.down','.section-3');	
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






		$(window).on("scroll", function() { 
			var scro= $(window).scrollTop();            
		var scr2=300; 	// начало меню услуги
		if ( $(window).scrollTop() >= scr2 && scro  ) {	$('.header').addClass('active');}
		else $('#m1').removeClass('active');
		})



});



    lightbox.option({
      'resizeDuration': 200,
	  'wrapAround': true
    })