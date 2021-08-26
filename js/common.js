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
	$('.filter_dropdown').select2({
		selectionCssClass: 'filter_dropdown_select',
		dropdownCssClass: 'filter_dropdown_popup',
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

	// Mask form
	$('.phone_input').mask('+7 (999) 999-99-99');

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


	// js_add_more
	$('.js_add_more').on('click', function() {
		$(this).closest('.addedfile').find('.addedfile_hide').slideToggle(200);
		$('textarea.readonly').each(function () {
			this.setAttribute('style', 'height:' + 160 + 'px;');
		});
	});


	// Datepicker
	$('.form-control-date').datetimepicker({
		locale: 'ru',
		format: 'DD.MM.YYYY'
	});

	// Timepicker
	$('.form-control-time').datetimepicker({
		locale: 'ru',
		format: 'LT'
	});


	// sm_uptable_more
	$('.sm_uptable_head_title').on('click', function() {
		$(this).closest('.sm_uptable').toggleClass('opened');
		$(this).closest('.sm_uptable').find('.sm_uptable_content').slideToggle(200);
		return false;
	});
	$('.sm_uptable_showtracks').on('click', function() {
		$(this).toggleClass('active');
		$(this).closest('.sm_uptable').find('.sm_uptable_tracks').slideToggle(200);
		return false;
	});
	$('.sm_uptable_feat_more').on('click', function() {
		if ( !$(this).hasClass('active') ) {
			$(this).addClass('active').text('Скрыть');
			$(this).closest('.sm_uptable').find('.sm_uptable_feat-hide').slideDown(200);
		} else {
			$(this).removeClass('active').text('Показать больше информации');
			$(this).closest('.sm_uptable').find('.sm_uptable_feat-hide').slideUp(200);
		}
		return false;
	});


	// tablehead_dots
	$('.js_tablehead_more').on('click', function() {
		$(this).toggleClass('active');
		$(this).closest('.uptable').toggleClass('opened');
		$(this).closest('.uptable').find('.tablehead').toggleClass('opened');
		$(this).closest('.uptable').find('.uptable_hide').slideToggle(200);
	});


	// js_edit_fields_wrap
	$('.js_edit_fields').on('click', function() {
		if ( !$(this).hasClass('active') ) {
			$(this).addClass('active');
			$(this).closest('.js_edit_fields_wrap').find('.form-control').removeAttr('readonly').addClass('edited');

			$(this).closest('.js_edit_fields_wrap').find('.readonly_show').hide();
			$(this).closest('.js_edit_fields_wrap').find('.readonly_hide').fadeIn(100);
		} else {
			$(this).removeClass('active');
			$(this).closest('.js_edit_fields_wrap').find('.form-control').attr('readonly', 'readonly').removeClass('edited');

			$(this).closest('.js_edit_fields_wrap').find('.readonly_show').fadeIn(100);
			$(this).closest('.js_edit_fields_wrap').find('.readonly_hide').hide();
		}
	});


	$('textarea.readonly').each(function () {
		this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px; overflow-y: hidden;');
	});


	// js_show-filter
	$('.js_show-filter').click(function() {
		$(this).toggleClass('active');
		$(this).closest('.filter_wrapper').find('.filter_wrapper_col').slideToggle(200);
	});


	// js_copyrow
	$('.js_clone').on('click', function() {
		let div = $(this).closest('.row').find('.clone_div').html();
		$(this).closest('.form-line').before(div);
		return false;
	});
	$(document).on('click', '.js_delete', function() {
		$(this).closest('.form-line').remove();
	});

	// js_clonerow
	$('.js_clonerow').on('click', function() {
		let div = $('body').find('.clone_div').html();
		$(this).closest('.row').before(div);
		return false;
	});
	$(document).on('click', '.js_deleterow', function() {
		$(this).closest('.row').remove();
	});


	// wrapper-countries
	let countriesHt = $('.wrapper-countries').innerHeight();
	let countriesHtTitle = $('.wrapper-countries h2').innerHeight();
	$('#bar-countries').css('min-height', countriesHt - countriesHtTitle - 74)


	// sortable
	$('#sortable').sortable({
		handle: '.addedfile_drag'
	});
	$('#sortable').disableSelection();


	// date range
	$('input[name="dates_range"]').daterangepicker({
		autoUpdateInput: false,
		"autoApply": true,
		"locale": {
			"format": "DD.MM.YYYY",
			"separator": " - ",
			"applyLabel": "Ok",
			"cancelLabel": "Отмена",
			"fromLabel": "От",
			"toLabel": "До",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
			"monthNames": [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
			"firstDay": 1
		},
		"drops": "auto",
		"applyButtonClasses": "btn",
		"cancelClass": "btn-grey",
	}, function(start, end, label) {
		console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});

	$('input[name="dates_range"]').on('apply.daterangepicker', function(ev, picker) {
		$(this).val(picker.startDate.format('DD.MM.YYYY') + ' - ' + picker.endDate.format('DD.MM.YYYY'));
	});
	$('input[name="dates_range"]').on('cancel.daterangepicker', function(ev, picker) {
		$(this).val('');
	});
		
	

});