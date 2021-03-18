
$(document).ready(function(){
	$('.item-two').hide();

	$('#feature').click(function(){
		$('.fa-angle-double-down').addClass('rotate');
		$('.item-two').toggle();
	});
});

$('.center').slick({
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3
      }
    }
  ]
});

$('.counter').counterUp({
    delay: 30,
    time: 5000,
});


