function stickyHeader() {
    if ($('.header').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.header').removeClass('fadeIn animated');
            $('.header').addClass('stricky-fixed fadeInDown animated');
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.header').removeClass('stricky-fixed fadeInDown animated');
            $('.header').addClass('slideIn animated');
        }
    };
}

jQuery(window).on('scroll', function () {
    (function ($) {
        stickyHeader();
    })(jQuery);
});

function mobiletNavToggler() {
    if ($(".navigation").length) {
        $(".navigation .navbar button").on("click", function () {
            $(".navigation .menu").slideToggle();
            $(this).toggleClass('open');
            return false
        });
        $(".navigation .cs-submenu").children("a").append(function () {
            return '<button class="dropdown-expander"><i class="fa fa-chevron-down"></i></button>'
        });
        $(".navigation .menu .dropdown-expander").on("click", function () {
            $(this).parent().parent().children(".cs-dropdown").slideToggle();
            console.log($(this).parents("li"));
            return false
        })
    }
}
jQuery(document).on("ready", function () {
    (function (a) {
        mobiletNavToggler()
    })(jQuery)
});


if (document.documentElement.clientWidth < 980) {
    $(document).click(function (e) {
        if (!$(e.target).closest('.navigation .navbar button').length) {
            $('.menu').stop(true).slideUp();
            $(".navigation .navbar button").removeClass('open');

        }
    });
}
var a = $("#slider");
a.owlCarousel({
    loop: true,
    margin: 0,
    navSpeed: 500,
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    autoplay: true,
    dots: false,
    /*animateOut: "fadeOut",*/
    items: 1
});
var a = $("#custom");
a.owlCarousel({
    loop: true,
    margin: 12,
    navSpeed: 500,
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    autoplay: true,
    dots: false,
    items: 9,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 9,
            nav: true,
            loop: true
        }
    }
});

var a = $("#popular");
a.owlCarousel({
    loop: true,
    margin: 15,
    navSpeed: 500,
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    autoplay: true,
    dots: false,
    items: 4,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: true
        }
    }
});


var a = $("#testimonial");
a.owlCarousel({
    loop: true,
    margin: 0,
    navSpeed: 500,
    nav: false,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    autoplay: true,
    dots: true,
    items: 3,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 3,
            loop: true
        }
    }
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
