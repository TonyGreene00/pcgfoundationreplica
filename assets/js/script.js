
        $(function () { 
            $(window).scroll(function () {
                if ($(this).scrollTop() > 10) { 
                    $('.navbar-brand img').attr('src','assets/images/logo-2.png');
                }
                if ($(this).scrollTop() < 10) { 
                    $('.navbar-brand img').attr('src','assets/images/logo.png');
                }
            })
        });

        $(function () { 
            $(window).scroll(function () {
                if ($(this).scrollTop() > 10) { 
                    $('.navbar-brand img').css('height','70px');
                }
                if ($(this).scrollTop() < 10) { 
                    $('.navbar-brand img').css('height','auto');
                }
            })
        });

// Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('#btnScrollToTop').addClass('active');
                if (scrolled < 600) $('#btnScrollToTop').removeClass('active');
            });  
            // Click Event
            $('#btnScrollToTop').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });

    


  $(function () { 
            $(window).scroll(function () {
                if ($(this).scrollTop() > 10) { 
                    $('.navbar').css('background-color','white');
                }
                if ($(this).scrollTop() < 10) { 
                    $('.navbar').css('background-color','black');
                }
            })
        });


 $(function () { 
            $(window).scroll(function () {
                if ($(this).scrollTop() > 10) { 
                    $('.nav-item p').css('color','#302c51');
                }
                if ($(this).scrollTop() < 10) { 
                    $('.nav-item p').css('color','white');
                }
            })
        });


 $(function () { 
            $(window).scroll(function () {
                if ($(this).scrollTop() > 10) { 
                    $('.less-than').css('color','black');
                }
                if ($(this).scrollTop() < 10) { 
                    $('.less-than').css('color','white');
                }
            })
        });


const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function() {
    window.scrollTo(0, 0);
});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items: 1,
            slideBy: 1,
            nav: true,
            loop:true,
            autoplayHoverPause:true,
            autoplay: true,
            autoplayTimeout:5000,
             navText: [
                "<i class='flaticon-left-chevron'></i>",
                "<i class='flaticon-right-chevron'></i>"
            ]
        }
    );
});


(function($) {
  $( window ).scroll( function () {
    if ( $(document).scrollTop() > 10 ) {
      // Navigation Bar
      $('.navbar').removeClass('fadeIn');
      $('.navbar').addClass('navbar-white');
      $('.navbar').addClass('fixed-top animated fadeInDown');
    } else {
      $('.navbar').removeClass('fadeInDown');
      $('.navbar').removeClass('fixed-top');
      $('.navbar').removeClass('navbar-white');
      $('.navbar').addClass('animated fadeIn');
    }
  });  
})(jQuery);



function custom_count(){
    var flag = true;
    $('.odometer').each(function() {
        if ($(this).isInViewport()) {   // Here we check perticular section is in the viewport or number-counter-section
            if (flag) {
                /* FOR number counter(odometer)  */
                var arr = [],
                i = 0;
                $('.odometer').each(function() {
                    arr[i++] = $(this).attr('data-count');;
                    odometer.innerText = arr[0]; //here odometer is *id* of first number
                    odometer1.innerText = arr[1]; //here odometer1 is *id* of second number
                    odometer2.innerText = arr[2];
                    odometer3.innerText = arr[3];
                });
                flag = false;
            }
        } else {}
    });
}

// for check the section in view port or not;
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
    console.log(elementBottom > viewportTop && elementTop < viewportBottom);
};

$(document).ready(function() {

    //  odometer section is on view-port or not
    custom_count();
    //resize-function
    $(window).resize(function() {
        custom_count();
    });
    
    $(window).on("scroll",function(){
      custom_count();
    });
});

