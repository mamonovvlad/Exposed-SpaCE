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
	console.log("1");
	$(".mobile-menu-items").toggleClass('mobile-menu-item-active');
})
})
