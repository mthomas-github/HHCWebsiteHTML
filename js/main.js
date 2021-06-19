
$(document).ready(function () {
    /* ===================================
     Loading Timeout
     ====================================== */

    setTimeout(function () {
        $("#loader").fadeOut("slow");
    }, 3000);
});



    /* ===================================
     Sign Up Form
     ====================================== */
var currentTab = 0;
document.addEventListener("DOMContentLoaded", function (event) {


    showTab(currentTab);

});

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").hidden = true;
        document.getElementById("submitBtn").hidden = false;

    } else {
        document.getElementById("submitBtn").hidden = true
        document.getElementById("nextBtn").hidden = false;
    }
    fixStepIndicator(n)
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("nextprevious").style.display = "none";
        document.getElementById("all-steps").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("text-message").style.display = "block";
    } else {
        showTab(currentTab);
    }
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += " invalid"; valid = false;
        }
    }
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}
function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}


jQuery(function ($) {

    "use strict";
    //check for browser os
    var isMobile = false;
    var isiPhoneiPad = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        isiPhoneiPad = true;
    }
  
    /* ===================================
     Header Appear On Scroll
     ====================================== */


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 70) { // Set position from top to add class
            $('header').addClass('sticky header-appear');
            $('.left-logo .navbar-brand').addClass("display_none");
        }
        else {
            $('header').removeClass('sticky header-appear');
            $('.left-logo .navbar-brand').removeClass("display_none");
        }
    });

    // fixing bottom nav to top on scrolliing
    var $fixednav = $(".bottom-nav .navbar-fixed-top");
    $(window).on("scroll", function () {
        var $heightcalc = $(window).height() - $fixednav.height();
        if ($(this).scrollTop() > $heightcalc) {
            $fixednav.addClass("navbar-bottom-top");
        } else {
            $fixednav.removeClass("navbar-bottom-top");
        }
    });

    /* =====================================
              Side Nav Absolute
       ====================================== */

    if ($("body").hasClass("side-nav")) {
        var $menuLeft = $(".pushmenu-left");
        var $menuRight = $(".pushmenu-right");
        var $toggleleft = $(".menu_bars.left");
        var $toggleright = $(".menu_bars.right");
        $toggleright.on("click", function () {
            $('.menu_bars').toggleClass("active");
            $menuRight.toggleClass("pushmenu-open");
            $("body").toggleClass("pushmenu-push-toLeft");
            $(".navbar").toggleClass("navbar-right_open");
            return false;
        });

        $('.push_nav li a').on('click', function () {
            $toggleright.toggleClass("active");
            $menuRight.toggleClass("pushmenu-open");
            $("body").toggleClass("pushmenu-push-toLeft");
            $(".navbar").toggleClass("navbar-right_open");
            return true;
        });
    }

    /* =====================================
            Parallax
     ====================================== */

    if ($(window).width() > 992) {
        $(".parallax").parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }

    /* =====================================
            Scroll
     ====================================== */

    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });
    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    //scroll sections
    $(".scroll").on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 750);
    });


    /*==============================================================
                Swiper Slider
      ==============================================================*/

    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

});