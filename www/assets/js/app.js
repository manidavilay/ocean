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
		autoPlay: false,
		infinite: false
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

	/* Specific animations */
	$('.subscription__gender--male').on('click', function () {
		$('.subscription__gender--male').addClass('is-active')
		$('.subscription__gender--female').removeClass('is-active')
		$('.subscription__wrapper--third .subscription__next-btn').removeClass('is-active')
		$('.subscription__wrapper--third .light-yellow-btn').addClass('is-active')
	});

	$('.subscription__gender--female').on('click', function () {
		$('.subscription__gender--female').addClass('is-active')
		$('.subscription__gender--male').removeClass('is-active')
		$('.subscription__wrapper--third .subscription__next-btn').removeClass('is-active')
		$('.subscription__wrapper--third .light-yellow-btn').addClass('is-active')
	});

	$('.subscription__wrapper--third .subscription__next-btn').on('click', function () {
		$('.subscription__wrapper--third .subscription__next-btn').addClass('is-active')
		$('.subscription__gender--male').removeClass('is-active')
		$('.subscription__wrapper--third .subscription__gender--female').removeClass('is-active')
		$('.subscription__wrapper--third .light-yellow-btn').addClass('is-active')
	});

	$('.subscription__wrapper--fourth .subscription__next-btn').on('click', function () {
		$('.subscription__wrapper--fourth .subscription__next-btn').addClass('is-active')
		$('.subscription__wrapper--fourth .light-yellow-btn').addClass('is-active')
	});

	$('.subscription__activity--swim').on('click', function () {
		$('.subscription__activity--swim').addClass('is-active')
		$('.subscription__activity--surf').removeClass('is-active')
		$('.subscription__wrapper--fifth .subscription__next-btn').removeClass('is-active')
		$('.subscription__wrapper--fifth .light-yellow-btn').addClass('is-active')
	});

	$('.subscription__activity--surf').on('click', function () {
		$('.subscription__activity--surf').addClass('is-active')
		$('.subscription__activity--swim').removeClass('is-active')
		$('.subscription__wrapper--fifth .subscription__next-btn').removeClass('is-active')
		$('.subscription__wrapper--fifth .light-yellow-btn').addClass('is-active')
	})

	$('.subscription__wrapper--fifth .subscription__next-btn').on('click', function () {
		$('.subscription__wrapper--fifth .subscription__next-btn').addClass('is-active')
		$('.subscription__activity--swim').removeClass('is-active')
		$('.subscription__wrapper--fifth .subscription__activity--surf').removeClass('is-active')
		$('.subscription__wrapper--fifth .light-yellow-btn').addClass('is-active')
	});

	$('.subscription__wrapper--sixth .begginner').on('click', function () {
		$('.subscription__wrapper--sixth .begginner').addClass('is-active')
		$('.subscription__wrapper--sixth .intermediate').removeClass('is-active')
		$('.subscription__wrapper--sixth .advanced').removeClass('is-active')
		$('.subscription__wrapper--sixth .light-yellow-btn').addClass('is-active')
	});

	$('.subscription__wrapper--sixth .intermediate').on('click', function () {
		$('.subscription__wrapper--sixth .begginner').removeClass('is-active')
		$('.subscription__wrapper--sixth .intermediate').addClass('is-active')
		$('.subscription__wrapper--sixth .advanced').removeClass('is-active')
		$('.subscription__wrapper--sixth .light-yellow-btn').addClass('is-active')
	});

	$('.subscription__wrapper--sixth .advanced').on('click', function () {
		$('.subscription__wrapper--sixth .begginner').removeClass('is-active')
		$('.subscription__wrapper--sixth .intermediate').removeClass('is-active')
		$('.subscription__wrapper--sixth .advanced').addClass('is-active')
		$('.subscription__wrapper--sixth .light-yellow-btn').addClass('is-active')
	});

	$('.subscription__wrapper--seventh .yes').on('click', function () {
		$('.subscription__wrapper--seventh .yes').addClass('is-active')
		$('.subscription__wrapper--seventh .no').removeClass('is-active')
		$('.subscription__wrapper--seventh .light-yellow-btn').addClass('is-active')
	});

	$('.subscription__wrapper--seventh .no').on('click', function () {
		$('.subscription__wrapper--seventh .yes').removeClass('is-active')
		$('.subscription__wrapper--seventh .no').addClass('is-active')
		$('.subscription__wrapper--seventh .light-yellow-btn').addClass('is-active')
	});

	$('.subscription__wrapper--eighth .subscription__next-btn').on('click', function () {
		$('.subscription__wrapper--eighth .subscription__next-btn').addClass('is-active')
	});

	$('.subscription__wrapper--nineth .long-grey-btn').on('click', function () {
		$('.subscription__wrapper--nineth .long-grey-btn').addClass('is-active')
		$('.subscription__wrapper--nineth .subscription__next-btn').removeClass('is-active')
		$('.subscription__wrapper--nineth .light-yellow-btn').addClass('is-active')
	});

	$('.subscription__wrapper--nineth .subscription__next-btn').on('click', function () {
		$('.subscription__wrapper--nineth .long-grey-btn').removeClass('is-active')
		$('.subscription__wrapper--nineth .subscription__next-btn').addClass('is-active')
		$('.subscription__wrapper--nineth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--first .color--blue').on('click', function () {
		$('.session__wrapper--first .session__next-btn').removeClass('is-active')
		$('.session__wrapper--first .color--blue').addClass('is-active')
		$('.session__wrapper--first .color--green').removeClass('is-active')
		$('.session__wrapper--first .color--brown').removeClass('is-active')
		$('.session__wrapper--first .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--first .color--green').on('click', function () {
		$('.session__wrapper--first .session__next-btn').removeClass('is-active')
		$('.session__wrapper--first .color--blue').removeClass('is-active')
		$('.session__wrapper--first .color--green').addClass('is-active')
		$('.session__wrapper--first .color--brown').removeClass('is-active')
		$('.session__wrapper--first .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--first .color--brown').on('click', function () {
		$('.session__wrapper--first .session__next-btn').removeClass('is-active')
		$('.session__wrapper--first .color--blue').removeClass('is-active')
		$('.session__wrapper--first .color--green').removeClass('is-active')
		$('.session__wrapper--first .color--brown').addClass('is-active')
		$('.session__wrapper--first .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--first .session__next-btn').on('click', function () {
		$('.session__wrapper--first .session__next-btn').addClass('is-active')
		$('.session__wrapper--first .color--blue').removeClass('is-active')
		$('.session__wrapper--first .color--green').removeClass('is-active')
		$('.session__wrapper--first .color--brown').removeClass('is-active')
		$('.session__wrapper--first .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--second .session__water-quality--good').on('click', function () {
		$('.session__wrapper--second .session__water-quality--good').addClass('is-active')
		$('.session__wrapper--second .session__water-quality--bad').removeClass('is-active')
		$('.session__wrapper--second .session__next-btn').removeClass('is-active')
		$('.session__wrapper--second .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--second .session__water-quality--bad').on('click', function () {
		$('.session__wrapper--second .session__water-quality--good').removeClass('is-active')
		$('.session__wrapper--second .session__water-quality--bad').addClass('is-active')
		$('.session__wrapper--second .session__next-btn').removeClass('is-active')
		$('.session__wrapper--second .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--second .session__next-btn').on('click', function () {
		$('.session__wrapper--second .session__next-btn').addClass('is-active')
		$('.session__wrapper--second .session__water-quality--good').removeClass('is-active')
		$('.session__wrapper--second .session__water-quality--bad').removeClass('is-active')
		$('.session__wrapper--second .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--third .session__products').on('click', function () {
		$(this).toggleClass('is-active')
		$('.session__wrapper--third .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fourth .session__swimmers .short-number--min').on('click', function () {
		$('.session__wrapper--fourth .session__swimmers .short-number--min').addClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .short-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .long-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .long-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__next-btn').removeClass('is-active')
		$('.session__wrapper--fourth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fourth .session__swimmers .long-number--min').on('click', function () {
		$('.session__wrapper--fourth .session__swimmers .short-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .short-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .long-number--min').addClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .long-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__next-btn').removeClass('is-active')
		$('.session__wrapper--fourth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fourth .session__swimmers .long-number--max').on('click', function () {
		$('.session__wrapper--fourth .session__swimmers .short-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .short-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .long-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .long-number--max').addClass('is-active')
		$('.session__wrapper--fourth .session__next-btn').removeClass('is-active')
		$('.session__wrapper--fourth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fourth .session__swimmers .short-number--max').on('click', function () {
		$('.session__wrapper--fourth .session__swimmers .short-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .short-number--max').addClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .long-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .long-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__next-btn').removeClass('is-active')
		$('.session__wrapper--fourth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fourth .session__activities .short-number--min').on('click', function () {
		$('.session__wrapper--fourth .session__activities .short-number--min').addClass('is-active')
		$('.session__wrapper--fourth .session__activities .short-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__activities .long-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__activities .long-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__next-btn').removeClass('is-active')
		$('.session__wrapper--fourth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fourth .session__activities .long-number--min').on('click', function () {
		$('.session__wrapper--fourth .session__activities .short-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__activities .short-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__activities .long-number--min').addClass('is-active')
		$('.session__wrapper--fourth .session__activities .long-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__next-btn').removeClass('is-active')
		$('.session__wrapper--fourth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fourth .session__activities .long-number--max').on('click', function () {
		$('.session__wrapper--fourth .session__activities .short-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__activities .short-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__activities .long-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__activities .long-number--max').addClass('is-active')
		$('.session__wrapper--fourth .session__next-btn').removeClass('is-active')
		$('.session__wrapper--fourth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fourth .session__activities .short-number--max').on('click', function () {
		$('.session__wrapper--fourth .session__activities .short-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__activities .short-number--max').addClass('is-active')
		$('.session__wrapper--fourth .session__activities .long-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__activities .long-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__next-btn').removeClass('is-active')
		$('.session__wrapper--fourth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fourth .session__next-btn').on('click', function () {
		$('.session__wrapper--fourth .session__swimmers .short-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .short-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .long-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__swimmers .long-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__activities .short-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__activities .short-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__activities .long-number--min').removeClass('is-active')
		$('.session__wrapper--fourth .session__activities .long-number--max').removeClass('is-active')
		$('.session__wrapper--fourth .session__next-btn').addClass('is-active')
		$('.session__wrapper--fourth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fifth .long-number--fishing').on('click', function () {
		$('.session__wrapper--fifth .long-number--fishing').addClass('is-active')
		$('.session__wrapper--fifth .long-number--hobby').removeClass('is-active')
		$('.session__wrapper--fifth .long-number--boat').removeClass('is-active')
		$('.session__wrapper--fifth .session__next-btn').removeClass('is-active')
		$('.session__wrapper--fifth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fifth .long-number--hobby').on('click', function () {
		$('.session__wrapper--fifth .long-number--fishing').removeClass('is-active')
		$('.session__wrapper--fifth .long-number--hobby').addClass('is-active')
		$('.session__wrapper--fifth .long-number--boat').removeClass('is-active')
		$('.session__wrapper--fifth .session__next-btn').removeClass('is-active')
		$('.session__wrapper--fifth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fifth .long-number--boat').on('click', function () {
		$('.session__wrapper--fifth .long-number--fishing').removeClass('is-active')
		$('.session__wrapper--fifth .long-number--hobby').removeClass('is-active')
		$('.session__wrapper--fifth .long-number--boat').addClass('is-active')
		$('.session__wrapper--fifth .session__next-btn').removeClass('is-active')
		$('.session__wrapper--fifth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fifth .session__next-btn').on('click', function () {
		$('.session__wrapper--fifth .long-number--fishing').removeClass('is-active')
		$('.session__wrapper--fifth .long-number--hobby').removeClass('is-active')
		$('.session__wrapper--fifth .long-number--boat').removeClass('is-active')
		$('.session__wrapper--fifth .long-number--min').removeClass('is-active')
		$('.session__wrapper--fifth .short-number--max').removeClass('is-active')
		$('.session__wrapper--fifth .session__next-btn').addClass('is-active')
		$('.session__wrapper--fifth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fifth .session__numbers-boats .long-number--min').on('click', function () {
		$('.session__wrapper--fifth .long-number--min').addClass('is-active')
		$('.session__wrapper--fifth .short-number--max').removeClass('is-active')
		$('.session__wrapper--fifth .session__next-btn').removeClass('is-active')
		$('.session__wrapper--fifth .light-yellow-btn').addClass('is-active')
	});

	$('.session__wrapper--fifth .session__numbers-boats .short-number--max').on('click', function () {
		$('.session__wrapper--fifth .long-number--min').removeClass('is-active')
		$('.session__wrapper--fifth .short-number--max').addClass('is-active')
		$('.session__wrapper--fifth .session__next-btn').removeClass('is-active')
		$('.session__wrapper--fifth .light-yellow-btn').addClass('is-active')
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

	/* End form */
	$('.js-end-recap-btn').on('click', function () {
		$('.recap__wrapper--first').addClass('is-hidden')
		$('.recap__wrapper--second').addClass('is-active')
	})

	$('.modify__wrapper--first .yellow-btn').on('click', function() {
		$('.modify__wrapper--first').addClass('is-hidden')
		$('.modify__wrapper--second').addClass('is-active')
	})

	$('.modify__wrapper--second .modify__left-arrow').on('click', function() {
		$('.modify__wrapper--first').removeClass('is-hidden')
		$('.modify__wrapper--second').removeClass('is-active')
	})
});