function stickyHeader () {
	if ($('.navigation_bar').length) {
		var strickyScrollPos = 100;
		if($(window).scrollTop() > strickyScrollPos) {
			$('.navigation_bar').removeClass('fadeIn animated');
	      	$('.navigation_bar').addClass('stricky-fixed fadeInDown animated');
		}
		else if($(this).scrollTop() <= strickyScrollPos) {
			$('.navigation_bar').removeClass('stricky-fixed fadeInDown animated');
	      	$('.navigation_bar').addClass('slideIn animated');
		}
	};
}

jQuery(window).on('scroll', function () {
	(function ($) {
		stickyHeader();
	})(jQuery);
});
function mobiletNavToggler() {
    if ($('.navigation').length) {
        $('.navigation .navbar button').on('click', function () {
            $('.navigation .menu').slideToggle();
            return false;
        });
        $('.navigation .cs-submenu').children('a').append(function () {
            return '<button class="dropdown-expander"><i class="fa fa-chevron-down"></i></button>';
        });
        $('.navigation .menu .dropdown-expander').on('click', function () {
            $(this).parent().parent().children('.cs-dropdown').slideToggle();
            console.log($(this).parents('li'));
            return false;
        });
    }
}
jQuery(document).on('ready', function () {
    (function ($) {
        mobiletNavToggler();
    })(jQuery);
});
$(window).load(function() {
    $('#slider').nivoSlider();
  });
var owl = $("#home_blog");
owl.owlCarousel({
    items: 4,
    itemsDesktop: [1000, 4],
    itemsDesktopSmall: [991, 4],
    itemsTablet: [767, 4],
    itemsMobile: [480, 1],
    pagination: true,
    navigation: false,
    autoPlay: true
});
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: false
});
wow.init();
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
        $('#scroll-up').fadeIn();
    } else {
        $('#scroll-up').fadeOut();
    }
});
$('#scroll-up').on('click', function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});
jQuery(document).ready(function($){
    $("#contact-form").validate({
        rules: {
            name: "required",
            
            comment: "required",
			
			country: "required",
			
            email: {
                required: true,
                email: true
            },
			mobile: {
                required: true,
				number: true,
                minlength: 10,
            }
        },
        messages: {
            name: "Please enter your name",
            comment: "Please enter message",
            email: "Please enter a valid email address",
			country: "Please select country",
			
			mobile: {
                required: "Please enter a valid mobile no.",
				number: "Mobile No. contains only numbers",
                minlength: "Your Mobile No. must be at least 10 characters long",
            }
        },
    });
  });
var owl = $(".catitem");
owl.owlCarousel({
    items: 4,
    itemsDesktop: [1000, 4],
    itemsDesktopSmall: [991, 4],
    itemsTablet: [767, 4],
    itemsMobile: [480, 1],
    pagination: true,
    navigation: false,
    autoPlay: true
});