(function ($) {
    "use strict";

    /**----- Preolader -----**/

    $(window).on("load", function () {
        $(".preloader-wrap").fadeOut();
        $(".loader").delay(150).fadeOut("slow");
        $("body").delay(150).css({ overflow: "visible" });
    });

    /**----------- Back Top ------------**/

    $(window).scroll(function () {
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        $("html").css("scrollBehavior", "auto");
    });

    /*------------ Counter --------------*/

    if ($.fn.counterUp) {
        $(".counter").counterUp({
            delay: 10,
            time: 2000,
        });
    }

    /*------------ Navbar --------------*/

    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
        });
    }

    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        });
    }

    /***-------------- Remove Menu Mobile ---------------***/
    const navLink = document.querySelectorAll(".nav_link");

    function linkAction() {
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("show-menu");
    }

    navLink.forEach((n) => n.addEventListener("click", linkAction));

    /***------------ Change Background Header -----------***/

    function scrollHeader() {
        const header = document.getElementById("header");
        if (this.scrollY >= 50) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    }
    window.addEventListener("scroll", scrollHeader);

    /*------------ Typing --------------*/

    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Seo"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    /*------------ About Slider --------------*/

    $("#about-slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ],
        dots: true,
        autoplay: true,
        animateOut: "fadeOut",
    });
})(jQuery);
