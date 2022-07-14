//Nav-scroll start/////////////////////////////////////////////////////////////////////////////
let screenHeight = $(window).height();

$(window).scroll(function() {
    let current = $(this).scrollTop();
    // console.log(screenHeight);
    if (current > screenHeight - 100) {
        $(".site-nav").addClass("site-nav-scroll");
    } else {
        $(".site-nav").removeClass("site-nav-scroll");
        setActive("home");
    }
});
//////////////////////////////Nav-scroll end/////////////////////////////////////////

// ////////////////////  navbar-toggler start///////////////////////////////////////////////////////////////////
// $(".bar_icon").click(function() {
//     let result = $(".show_collape").hasClass("show");

//     if (result) {
//         $(".menu-icon").addClass("fa-bars").removeClass("fa-times");
//     } else {
//         $(".menu-icon").addClass("fa-times").removeClass("fa-bars");
//     }
// });
//////////////////////////////navbar-toggler end/////////////////////////////////////////////////////////

//wow.js start //////////////////////////////////////////////////////////////////////////////

new WOW().init();
$(".pricing-slide").slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});

///wow.js end ///////////////////////////////////////////////////////////////////////////

//waypoint.js Start/////////////////////////////////////////////////////////////////

function setActive(current) {
    $(".nav-link").removeClass("current-section");
    $(`.nav-link[href='#${current}']`).addClass("current-section");
}

function navScroll() {
    let currentSection = $("section[id]");
    currentSection.waypoint(
        function(direction) {
            if (direction === "down") {
                setActive($(this.element).attr("id"));
            }
        }, {
            offset: "150px",
        }
    );
    currentSection.waypoint(
        function(direction) {
            if (direction === "up") {
                setActive($(this.element).attr("id"));
            }
        }, {
            offset: "-100px",
        }
    );
}
navScroll();

// let waypoints1 = $("#home").waypoint(
//     function(direction) {
//         $(".nav-link").removeClass("current-section");
//         $(".nav-link[href='#home']").addClass("current-section");
//     }, {
//         offset: "25%",
//     }
// );
// let waypoints2 = $("#about").waypoint(
//     function(direction) {
//         $(".nav-link").removeClass("current-section");

//         $(".nav-link[href='#about']").addClass("current-section");
//     }, {
//         offset: "25%",
//     }
// );
// let waypoints3 = $("#service").waypoint(
//     function(direction) {
//         $(".nav-link").removeClass("current-section");

//         $(".nav-link[href='#service']").addClass("current-section");
//     }, {
//         offset: "25%",
//     }
// );
// let waypoints4 = $("#pricing").waypoint(
//     function(direction) {
//         $(".nav-link").removeClass("current-section");

//         $(".nav-link[href='#pricing']").addClass("current-section");
//     }, {
//         offset: "25%",
//     }
// );
// let waypoints5 = $("#contant").waypoint(
//     function(direction) {
//         $(".nav-link").removeClass("current-section");

//         $(".nav-link[href='#contant']").addClass("current-section");
//     }, {
//         offset: "25%",
//     }
// );

//waypoint.js end////////////////////////////////////////////////////////////////////////////

////////////////////////////website Loader//////////////////////////////////
$(window).on("load", function() {
    $(".loading-container").fadeOut(500, function() {
        $(this).remove();
    });
});

$(".toggle-overlay").on("click", function() {
    let $t = $(".toggle");
    let $b = $("body");
    let $N = $(".nav_text");
    let $Nav = $(".site-nav-scroll");
    let $btn1 = $(".custom-btn");
    let $btntext1 = $(".btn-text1");
    let $respon = $(".navbar-toggler");
    let $scroll = $(".mouse-scroll");
    if ($t.hasClass("night")) {
        $t.removeClass("night");
        $t.addClass("day");
        $b.removeClass("night");
        $b.addClass("day");
        $N.removeClass("night");
        $N.addClass("day");
        $Nav.removeClass("night");
        $Nav.addClass("day");
        $btn1.removeClass("night");
        $btn1.addClass("day");
        $btntext1.removeClass("night");
        $btntext1.addClass("day");
        $respon.removeClass("night");
        $respon.addClass("day");
        $scroll.removeClass("night");
        $scroll.addClass("day");
    } else {
        $t.addClass("night");
        $t.removeClass("day");
        $b.addClass("night");
        $b.removeClass("day");
        $N.addClass("night");
        $N.removeClass("day");
        $Nav.addClass("night");
        $Nav.removeClass("day");
        $btn1.addClass("night");
        $btn1.removeClass("day");
        $btntext1.addClass("night");
        $btntext1.removeClass("day");
        $respon.addClass("night");
        $respon.removeClass("day");
        $scroll.addClass("night");
        $scroll.removeClass("day");
    }
});