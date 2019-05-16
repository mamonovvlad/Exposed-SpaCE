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

$(".click").click(function (e) {
	e.preventDefault();
	$(".block-two").toggleClass('d-b');
	$("#loft .box-loft .block-one .loft").toggleClass('activ')
	$(".block-two").css({'transition' : '500ms ease'});
	$(".click").css({'transition' : '500ms ease'});
	
})
$("#loft .box-loft .click p").click(function () {
	$(".block-two").toggleClass('d-b');
	$("#loft .box-loft .block-one .loft").toggleClass('activ')
	$(".block-two").css({'transition' : '500ms ease'});
	$(".click_p").css({'transition' : '500ms ease'});

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


 $('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: true,
	centerMode: true,
	focusOnSelect: true
 });



})
