$(function() {

	// mainwrap
	let htHead = $('.header').outerHeight();
	function pageHead() {
		let ht = $(window).outerHeight();
		ht2 = ht - htHead
		$('.navpanel, .mainwrap').outerHeight(ht);
		$('.mainwrap_content').outerHeight(ht2);
		$('#tests').text(ht)
	}
	pageHead()
	$(window).resize(function() {
		pageHead()
	});

	// Select2
	$('.js-example-basic-single').select2({
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
	$('.header_btn').on('click', function() {
		if ( !$(this).hasClass('active') ) {
			$('.header_btn').removeClass('active');
			$('.header_icon_popup').fadeOut(200);
			$(this).addClass('active');
			$(this).closest('.header_icon').find('.header_icon_popup').fadeIn(200);
		} else {
			$(this).removeClass('active');
			$(this).closest('.header_icon').find('.header_icon_popup').fadeOut(200);
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
	

});
