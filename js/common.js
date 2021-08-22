$(function() {

	if ( document.documentElement.clientWidth > 1020 ) {
		function pageHead() {
			let ht = $(window).outerHeight();
			$('.navpanel').outerHeight(ht);
		}
		pageHead();
		$(window).resize(function() {
			pageHead()
		});
	}

	// Nav scroll styling
	$('.scroll-pane').jScrollPane({
		autoReinitialise: true
	});

	// Select2
	$('.js_select').select2({
		selectionCssClass: 'custom_select',
		dropdownCssClass: 'custom_dropdown_select',
		minimumResultsForSearch: 0
	});

	// Tooltip
	let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	});

	// navpanel_menu
	$('.navpanel_menu li.parent>a').on('click', function() {
		$(this).closest('li').toggleClass('opened');
		$(this).closest('li').find('ul').slideToggle(200);
		return false;
	});

	// spoiler
	$('.spoiler-title').on('click', function() {
		if ( !$(this).closest('.spoiler').hasClass('opened') ) {
			$('.spoiler').removeClass('opened');
			$('.spoiler-content').slideUp(200);
			$(this).closest('.spoiler').addClass('opened');
			$(this).closest('.spoiler').find('.spoiler-content').slideDown(200);
		} else {
			$(this).closest('.spoiler').removeClass('opened');
			$(this).closest('.spoiler').find('.spoiler-content').slideUp(200);
		}
	});
	$('.spoiler_min-title').on('click', function() {
		$(this).closest('.spoiler_min').toggleClass('opened');
		$(this).closest('.spoiler_min').find('.spoiler_min-content').slideToggle(200);
	});


	// form-control-pass-btn
	$('.form-control-pass-btn').on('click', function() {
		if ( !$(this).hasClass('active') ) {
			$(this).addClass('active');
			$(this).closest('.form-control-pass').find('.form-control').removeAttr('type').attr('type', 'text');
		} else {
			$(this).removeClass('active');
			$(this).closest('.form-control-pass').find('.form-control').removeAttr('type').attr('type', 'password');
		}
	});


	// header_notify
	$('.js_header_icon .header_btn').on('click', function() {
		if ( !$(this).hasClass('active') ) {
			$('.header_btn').removeClass('active');
			$('.header_icon_popup').fadeOut(200);
			$(this).addClass('active');
			$(this).closest('.js_header_icon').find('.header_icon_popup').fadeIn(200);
		} else {
			$(this).removeClass('active');
			$(this).closest('.js_header_icon').find('.header_icon_popup').fadeOut(200);
		}
		return false;
	});
	$(document).on('click touchstart', function(e) {
		let div = $('.header_icon_popup');
		if ( !div.is(e.target) && div.has(e.target).length === 0 ) {
			$('.header_btn').removeClass('active');
			div.fadeOut(200);
		}
	});


	// js_header_nav
	$('.js_header_nav').on('click', function() {
		$('html').toggleClass('navpanel_opened');
		$(this).toggleClass('active');
		return false;
	});
	$('.navpanel_close').on('click', function() {
		$('html').removeClass('navpanel_opened');
		$('.js_header_nav').removeClass('active');
		return false;
	});
	$('.navpanel_overlay').on('click touchstart', function() {
		$('html').removeClass('navpanel_opened');
		$('.js_header_nav').removeClass('active');
		return false;
	});


	// num_plays
	let numPlays = new Swiper(".num_plays", {
		slidesPerView: "auto",
		spaceBetween: 16
	});


	// addedfile_drag
	$('.addedfile_drag').on('click', function() {
		$(this).closest('.addedfile').find('.addedfile_hide').slideToggle(200);
	});


	// Datepicker
	$('.form-control-date').datepicker({
		language: "ru",
		autoclose: true
	});

	// Timepicker
	$('.form-control-time').timepicker({
		timeFormat: 'h:mm p',
		interval: 60,
		minTime: '10',
		maxTime: '6:00pm',
		defaultTime: '11',
		startTime: '10:00',
		dynamic: true,
		dropdown: true,
		scrollbar: true
	});
	

});
