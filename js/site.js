
/**
 * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
 *
 * @private
 * @author Todd Motto
 * @link https://github.com/toddmotto/foreach
 * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
 * @callback requestCallback      callback   - Callback function for each iteration.
 * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
 * @returns {}
 */
var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))for (var c in t)Object.totype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });
    overlay.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
    $('.overlay').click(function () {
        $('#wrapper').toggleClass('toggled');
    });


    $(".fullBackground").bgswitcher({
        images: ["backsliderimgs/001.jpg",
            "backsliderimgs/002.jpg",
            "backsliderimgs/003.jpg",
            "backsliderimgs/004.jpg",
            "backsliderimgs/005.jpg",
            "backsliderimgs/006.jpg",
            "backsliderimgs/007.jpg"], // Background images
        effect: "fade", // fade, blind, clip, slide, drop, hide
        interval: 10000, // Interval of switching
        loop: true, // Loop the switching
        shuffle: false, // Shuffle the order of an images
        duration: 5000, // Effect duration
        easing: "swing" // Effect easing
    });

    $.fn.backgrounddestroy = function(){
       $(".fullBackground").bgswitcher("destroy");
       $(".maalemtext, .backanimate p, .backanimate a,.translucentback .navbar-default .fa, .newsitem p, .form-group.-animated label, .maalemlist li").css('color','#005f61');
       $(".borderWhite, .imagetextdiv").css('border-color','#005f61');
       $(".translucentback .translucentback").css('background', 'rgba(0,0,0,0)');
       $(".translucentback2").css('background', 'rgba(0,0,0,0.2)');
       $(".btn-primary.outline").css('color','#005f61').css('border-color','#005f61');
       $("#video-background").css('display', 'none');
       $(".moreitem:nth-of-type(2n+1), .moreitem:nth-of-type(2n)").css('border-bottom-color', '#005f61');

       $(".btn-primary.outline").mouseover(function() {
           $(this).css("color","white");
       }).mouseout(function() {
           $(this).css("color","#005f61");
       });
       $(".aboutus-item-header p, .second-nav .maalemtext, p.internal-heading").css('color','#fff');
       $(".diamond-btn").attr("src","imgs/more-grn.png");
       $(".turn-white-logo").attr("src","imgs/logo-rtl.png");
       $(".stocks").attr("src","imgs/stocks-grn.png");
       $(".car").attr("src","imgs/car-grn.png");
       $(".bankbottle").attr("src","imgs/bankbottle-grn.png");
       $(".form-control").attr("style", 'border-color: #005f61 !important');
    }
    //$.fn.backgrounddestroy();
    $.fn.backgrounddestroyaddvideo = function(){
        $(".fullBackground").bgswitcher("destroy");
        $(".fullBackground").bgswitcher("destroy");
        $(".maalemtext, .backanimate p, .backanimate a,.translucentback .navbar-default .fa, .newsitem p,  .form-group.-animated label, .maalemlist li").css('color','#fff');
        $(".borderWhite, .imagetextdiv").css('border-color','#fff');
        $(".translucentback .translucentback").css('background', 'rgba(0,0,0,0.2)');
        $(".translucentback2").css('background', 'rgba(0,0,0,0.4)');
        $(".btn-primary.outline").css('color','#fff').css('border-color','#fff');
        $("#video-background").css('display', 'block');
        $(".moreitem:nth-of-type(2n+1), .moreitem:nth-of-type(2n)").css('border-bottom-color', '#fff');

        $(".btn-primary.outline").mouseover(function() {
            $(this).css("color","#5f61");
        }).mouseout(function() {
            $(this).css("color","#fff");
        });
        $(".aboutus-item-header p, .second-nav .maalemtext").css('color','#fff');
        $(".diamond-btn").attr("src","imgs/more.png");
        $(".turn-white-logo").attr("src","imgs/logo-rtl_2.png");
        $(".stocks").attr("src","imgs/stocks.png");
        $(".car").attr("src","imgs/car.png");
        $(".bankbottle").attr("src","imgs/bankbottle.png");
        $(".form-control").attr("style", 'border-color: #fff !important');
        $(".requestrow p").css('color', '#005f61');

    };
    $(document).on('click', '.btn1', function () {
        $.fn.backgrounddestroy();;
    });
    $(document).on('click', '.btn2', function () {
        $.fn.backgrounddestroyaddvideo();
    });
    $(document).on('click', '.link-to-calc', function () {
        window.location.href='calc.html';
    });
    //$('.btn1').click($.fn.backgrounddestroy());
    //$('.btn2').click($.fn.backgrounddestroyaddvideo());

});


    (function ($) {
        $(document).ready(function () {
            $(window).scroll(function () {
                if(xyzxyz == 1){
                    if ($(this).scrollTop() > $('.backanimate:visible').height() - 5) {
                        $('.second-nav').fadeIn(500);
                    } else {
                        $('.second-nav').fadeOut(500);
                    }
                }else{
                    if ($(this).scrollTop() > $('.navbar-default:visible').height() - 5) {
                        $('.second-nav').fadeIn(500);
                    } else {
                        $('.second-nav').fadeOut(500);
                    }
                }
            });
        });
    })(jQuery);

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if(isMobile.any()) {
    alert("mobile");
    $('.btn2').css('display', 'none');
}
