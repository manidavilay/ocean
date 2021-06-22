$(document).ready(function() {

	/* Start on boarding */    
	$('.js-discover-btn').on('click', function() {
		$('.onboarding__first').addClass('is-hidden')
		$('.onboarding__second').addClass('is-active');
	});

	/* On boading slider */
	$('.onboarding__slider-wrapper').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoPlay: false
	});

	/* Subscription form */
	$('.subscription-first-next-btn').on('click', function() {
		$('.subscription__wrapper--first').addClass('is-hidden')
		$('.subscription__wrapper--second').addClass('is-active')
	});

	$('.subscription__wrapper--second .return-btn').on('click', function() {
		$('.subscription__wrapper--first').removeClass('is-hidden')
		$('.subscription__wrapper--second').removeClass('is-active')
	});

	$('.subscription-second-next-btn').on('click', function() {
		$('.subscription__wrapper--second').removeClass('is-active')
		$('.subscription__wrapper--third').addClass('is-active')
	});

	$('.subscription__wrapper--third .return-btn').on('click', function() {
		$('.subscription__wrapper--second').addClass('is-active')
		$('.subscription__wrapper--third').addClass('is-active')
	});

	$('.subscription-third-next-btn').on('click', function() {
		$('.subscription__wrapper--third').removeClass('is-active')
		$('.subscription__wrapper--fourth').addClass('is-active')
	});

	$('.subscription__wrapper--fourth .return-btn').on('click', function() {
		$('.subscription__wrapper--third').addClass('is-active')
		$('.subscription__wrapper--fourth').removeClass('is-active')
	});

	$('.subscription-fourth-next-btn').on('click', function() {
		$('.subscription__wrapper--fourth').removeClass('is-active')
		$('.subscription__wrapper--fifth').addClass('is-active')
	});

	$('.subscription__wrapper--fifth .return-btn').on('click', function() {
		$('.subscription__wrapper--fourth').addClass('is-active')
		$('.subscription__wrapper--fifth').removeClass('is-active')
	});

	$('.subscription-fifth-next-btn').on('click', function() {
		$('.subscription__wrapper--fifth').removeClass('is-active')
		$('.subscription__wrapper--sixth').addClass('is-active')
	});

	$('.subscription__wrapper--sixth .return-btn').on('click', function() {
		$('.subscription__wrapper--fifth').addClass('is-active')
		$('.subscription__wrapper--sixth').removeClass('is-active')
	});

	$('.subscription-sixth-next-btn').on('click', function() {
		$('.subscription__wrapper--sixth').removeClass('is-active')
		$('.subscription__wrapper--seventh').addClass('is-active')
	});

	$('.subscription__wrapper--seventh .return-btn').on('click', function() {
		$('.subscription__wrapper--sixth').addClass('is-active')
		$('.subscription__wrapper--seventh').removeClass('is-active')
	});

	$('.subscription-seventh-next-btn').on('click', function() {
		$('.subscription__wrapper--seventh').removeClass('is-active')
		$('.subscription__wrapper--eighth').addClass('is-active')
	});

	$('.subscription__wrapper--eighth .return-btn').on('click', function() {
		$('.subscription__wrapper--seventh').addClass('is-active')
		$('.subscription__wrapper--eighth').removeClass('is-active')
	});

	$('.subscription-eighth-next-btn').on('click', function() {
		$('.subscription__wrapper--eighth').removeClass('is-active')
		$('.subscription__wrapper--nineth').addClass('is-active')
	});

	$('.subscription__wrapper--nineth .return-btn').on('click', function() {
		$('.subscription__wrapper--eighth').addClass('is-active')
		$('.subscription__wrapper--nineth').removeClass('is-active')
	});

	$('.subscription-nineth-next-btn').on('click', function() {
		$('.subscription__wrapper--nineth').removeClass('is-active')
		$('.subscription__wrapper--tenth').addClass('is-active')
	});
});