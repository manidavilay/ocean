$(document).ready(function () {
	/* Start on boarding */
	$('.js-discover-btn').on('click', function () {
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
	$('.subscription-first-next-btn').on('click', function () {
		$('.subscription__wrapper--first').addClass('is-hidden')
		$('.subscription__wrapper--second').addClass('is-active')
	});

	$('.subscription__wrapper--second .return-btn').on('click', function () {
		$('.subscription__wrapper--first').removeClass('is-hidden')
		$('.subscription__wrapper--second').removeClass('is-active')
	});

	$('.subscription-second-next-btn').on('click', function () {
		$('.subscription__wrapper--second').removeClass('is-active')
		$('.subscription__wrapper--third').addClass('is-active')
	});

	$('.subscription__wrapper--third .return-btn').on('click', function () {
		$('.subscription__wrapper--second').addClass('is-active')
		$('.subscription__wrapper--third').addClass('is-active')
	});

	$('.subscription-third-next-btn').on('click', function () {
		$('.subscription__wrapper--third').removeClass('is-active')
		$('.subscription__wrapper--fourth').addClass('is-active')
	});

	$('.subscription__wrapper--fourth .return-btn').on('click', function () {
		$('.subscription__wrapper--third').addClass('is-active')
		$('.subscription__wrapper--fourth').removeClass('is-active')
	});

	$('.subscription-fourth-next-btn').on('click', function () {
		$('.subscription__wrapper--fourth').removeClass('is-active')
		$('.subscription__wrapper--fifth').addClass('is-active')
	});

	$('.subscription__wrapper--fifth .return-btn').on('click', function () {
		$('.subscription__wrapper--fourth').addClass('is-active')
		$('.subscription__wrapper--fifth').removeClass('is-active')
	});

	$('.subscription-fifth-next-btn').on('click', function () {
		$('.subscription__wrapper--fifth').removeClass('is-active')
		$('.subscription__wrapper--sixth').addClass('is-active')
	});

	$('.subscription__wrapper--sixth .return-btn').on('click', function () {
		$('.subscription__wrapper--fifth').addClass('is-active')
		$('.subscription__wrapper--sixth').removeClass('is-active')
	});

	$('.subscription-sixth-next-btn').on('click', function () {
		$('.subscription__wrapper--sixth').removeClass('is-active')
		$('.subscription__wrapper--seventh').addClass('is-active')
	});

	$('.subscription__wrapper--seventh .return-btn').on('click', function () {
		$('.subscription__wrapper--sixth').addClass('is-active')
		$('.subscription__wrapper--seventh').removeClass('is-active')
	});

	$('.subscription-seventh-next-btn').on('click', function () {
		$('.subscription__wrapper--seventh').removeClass('is-active')
		$('.subscription__wrapper--eighth').addClass('is-active')
	});

	$('.subscription__wrapper--eighth .return-btn').on('click', function () {
		$('.subscription__wrapper--seventh').addClass('is-active')
		$('.subscription__wrapper--eighth').removeClass('is-active')
	});

	$('.subscription-eighth-next-btn').on('click', function () {
		$('.subscription__wrapper--eighth').removeClass('is-active')
		$('.subscription__wrapper--nineth').addClass('is-active')
	});

	$('.subscription__wrapper--nineth .return-btn').on('click', function () {
		$('.subscription__wrapper--eighth').addClass('is-active')
		$('.subscription__wrapper--nineth').removeClass('is-active')
	});

	$('.subscription-nineth-next-btn').on('click', function () {
		$('.subscription__wrapper--nineth').removeClass('is-active')
		$('.subscription__wrapper--tenth').addClass('is-active')
	});

	/* Timer */
	var timer = new Timer();
	$('#chronoExample .startButton').click(function () {
		timer.start();
	});

	$('#chronoExample .pauseButton').click(function () {
		timer.pause();
	});

	$('#chronoExample .stopButton').click(function () {
		timer.stop();
	});

	$('#chronoExample .resetButton').click(function () {
		timer.reset();
	});

	timer.addEventListener('secondsUpdated', function (e) {
		$('#chronoExample .values').html(timer.getTimeValues().toString());
	});

	timer.addEventListener('started', function (e) {
		$('#chronoExample .values').html(timer.getTimeValues().toString());
	});

	timer.addEventListener('reset', function (e) {
		$('#chronoExample .values').html(timer.getTimeValues().toString());
	});

	/* Session form */
	$('.session-first-next-btn').on('click', function () {
		$('.session__wrapper--first').addClass('is-hidden')
		$('.session__wrapper--second').addClass('is-active')
	});

	$('.session__wrapper--second .return-btn').on('click', function () {
		$('.session__wrapper--first').removeClass('is-hidden')
		$('.session__wrapper--second').removeClass('is-active')
	});

	$('.session-second-next-btn').on('click', function () {
		$('.session__wrapper--second').removeClass('is-active')
		$('.session__wrapper--third').addClass('is-active')
	});

	$('.session__wrapper--third .return-btn').on('click', function () {
		$('.session__wrapper--second').addClass('is-active')
		$('.session__wrapper--third').addClass('is-active')
	});

	$('.session-third-next-btn').on('click', function () {
		$('.session__wrapper--third').removeClass('is-active')
		$('.session__wrapper--fourth').addClass('is-active')
	});

	$('.session__wrapper--fourth .return-btn').on('click', function () {
		$('.session__wrapper--third').addClass('is-active')
		$('.session__wrapper--fourth').removeClass('is-active')
	});

	$('.session-fourth-next-btn').on('click', function () {
		$('.session__wrapper--fourth').removeClass('is-active')
		$('.session__wrapper--fifth').addClass('is-active')
	});

	$('.session__wrapper--fifth .return-btn').on('click', function () {
		$('.session__wrapper--fourth').addClass('is-active')
		$('.session__wrapper--fifth').removeClass('is-active')
	});

	$('.session-fifth-next-btn').on('click', function () {
		$('.session__wrapper--fifth').removeClass('is-active')
		$('.session__wrapper--sixth').addClass('is-active')
	});

	$('.session__wrapper--sixth .return-btn').on('click', function () {
		$('.session__wrapper--fifth').addClass('is-active')
		$('.session__wrapper--sixth').removeClass('is-active')
	});

	$('.session-sixth-next-btn').on('click', function () {
		$('.session__wrapper--sixth').removeClass('is-active')
		$('.session__wrapper--seventh').addClass('is-active')
	});

	$('.session__wrapper--seventh .return-btn').on('click', function () {
		$('.session__wrapper--sixth').addClass('is-active')
		$('.session__wrapper--seventh').removeClass('is-active')
	});
});