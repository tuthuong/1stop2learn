var script = function () {

    var win = $(window);
    var html = $('html');
    var body = $('body');

    var mMenu = function () {
        var menu = $('.m-nav');
        var ct = menu.find('.nav-ct');
        var open = $('.nav-open');
        var close = $('.nav-close');

        ct.append($('.header-contact-top').clone());
        // ct.append($('.language').clone());
        ct.append($('.main-nav').clone());
        ct.append($('.social-link').clone());

        open.click(function (e) {
            e.preventDefault();
            if (win.width() < 1200) {
                menu.addClass('act');
            }
        });
        close.click(function (e) {
            e.preventDefault();
            if (win.width() < 1200) {
                menu.removeClass('act');
            }
        });


        var sidebar = $('.sb-nav');
        var ct2 = sidebar.find('.nav-ct');
        var open2 = $('.sb-open');
        var close2 = $('.sb-close');
        // ct2.append($('.main-nav').clone());
        open2.click(function (e) {
            e.preventDefault();
            if (win.width() < 1200) {
                sidebar.addClass('act');
            }
        });
        close2.click(function (e) {
            e.preventDefault();
            if (win.width() < 1200) {
                sidebar.removeClass('act');
            }
        });

        win.click(function (e) {
            if (menu.has(e.target).length == 0 && !menu.is(e.target) && open.has(e.target).length == 0 && !open.is(e.target)) {
                menu.removeClass('act');
            }
            if (sidebar.has(e.target).length == 0 && !sidebar.is(e.target) && open2.has(e.target).length == 0 && !open2.is(e.target)) {
                sidebar.removeClass('act');
            }
        });


        nav = menu.find('.main-nav');
        nav.find("ul li").each(function () {
            if ($(this).find("ul>li").length > 0) {
                $(this).prepend('<i class="nav-drop"></i>');
            }
        });

        $(".nav-drop").click(function () {
            var ul = $(this).nextAll("ul");
            if (ul.is(":hidden") === true) {
                ul.parent('li').parent().children().children('ul').slideUp(200);
                ul.parent('li').parent().children().children('.nav-drop').removeClass("act");
                $(this).addClass("act");
                ul.slideDown(200);
            } else {
                ul.slideUp(200);
                $(this).removeClass("act");
            }
        });
    }

    var uiDrop = function () {
        $('.drop').each(function () {
            var this_ = $(this);
            var label = this_.children('a');
            var ct = this_.children('ul');
            var item = ct.children('li').children('a');

            this_.click(function () {
                ct.slideToggle(150);
            });

            item.click(function (e) {
                e.preventDefault();
                label.html($(this).html());
            });

            win.click(function (e) {
                if (this_.has(e.target).length == 0 && !this_.is(e.target)) {
                    this_.children('ul').slideUp(150);
                }
            })
        });
    }

    var backToTop = function () {
        // var back_top = $('.back-to-top');

        // if(win.scrollTop() > 600){ back_top.fadeIn(); }

        // back_top.click(function(){
        //     $("html, body").animate({ scrollTop: 0 }, 800 );
        //     return false;
        // });

        // win.scroll(function() {    
        //     if(win.scrollTop() > 600) back_top.fadeIn(); 
        //     else back_top.fadeOut();
        // });
    }

    var uiClickShow = function () {
        var ani = 200;
        $('[data-show]').each(function () {
            var this_ = $(this);
            var ct = $(this_.attr('data-show'));

            this_.click(function (e) {
                e.preventDefault();
                ct.slideToggle(ani);
            });
        });

        win.click(function (e) {
            // if($(this).width() > 991){
            $('[data-show]').each(function () {
                var this_ = $(this);
                var ct = $(this_.attr('data-show'));
                if (ct.has(e.target).length == 0 && !ct.is(e.target) && this_.has(e.target).length == 0 && !this_.is(e.target)) {
                    ct.slideUp(ani);
                }
            })
            // }
        });
    }

    var uiCalendar = function(){
        $('.calendar').flatpickr({
            inline: true,

            nextArrow: '<i class="fa fa-caret-right"></i>',
            prevArrow:  '<i class="fa fa-caret-left"></i>',
        });
    }

    var uiSearchingDate = function(){
        $('.searching-date').flatpickr({
            dateFormat: "d/m/Y",
            defaultDate: "today",
           
        });
    }

    function numberWithCommas(number) {
        var parts = number.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".").concat('đ');
    }

    var uiSliderPrice = function(){
        $('#slider-price-range').slider({
            range: true,
            orientation: 'horizontal',
            min: 240000,
            max: 13560000,
            values: [240000,13560000],
            step: 100000,
            slide: function(event,ui){
                if (ui.values[0] == ui.values[1]) {
                    return false;
                }
                var min_value = numberWithCommas(ui.values[0]);
                var max_value = numberWithCommas(ui.values[1]);
                // console.log("Min value:"+min_value+"  Max value:"+max_value);
                $("#min_price").val(min_value);
                $("#max_price").val(max_value);
            }

        });
        
    }


    function doAnimations(elems) {
        var animEndEv = 'webkitAnimationEnd animationend';
        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    var uiSlider = function () {
        $('.slideshow').slick({
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            autoplaySpeed: 3000,
            arrows: false,
            mobileFirst: true,
            dots: true,
            dotsClass: 'slick-dots',
        })
        $('.ser-slide').slick({
            nextArrow: '<img src="images/next.png" class="next" alt="Next">',
            prevArrow: '<img src="images/prev.png" class="prev" alt="Prev">',
            slidesToShow: 5,
            autoplay:true,
            autoplaySpeed:1500,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        dots: true,
                        dotsClass: 'slick-dots'
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        dotsClass: 'slick-dots'
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        dots: true,                       
                        dotsClass: 'slick-dots',
                        arrows: false,
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                        dotsClass: 'slick-dots'
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                        dotsClass: 'slick-dots'
                    }
                },
            ],
        })

        $('.hotschools').slick({
            autoplay: true,
            infinite: true,
            slidesToShow: 3,
            autoplaySpeed: 3000,
            arrows: false,
            mobileFirst: true,
            dots: true,
            dotsClass: 'slick-dots',
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3,
                        dots: true,
                        dotsClass: 'slick-dots'
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        dotsClass: 'slick-dots'
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        dotsClass: 'slick-dots'
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                        dotsClass: 'slick-dots'
                    }
                },
            ],
        })

        $('.outteacher').slick({
            autoplay: true,
            slidesToShow: 5,
            autoplaySpeed: 3000,
            arrows: true,
            mobileFirst: true,
            dots: true,
            dotsClass: 'slick-dots',
            prevArrow: $('.carousel-control-prev'),
            nextArrow: $('.carousel-control-next'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        dots: true,
                        dotsClass: 'slick-dots'
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        dotsClass: 'slick-dots',
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        dots: true,                       
                        dotsClass: 'slick-dots',
                        arrows: false,
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                        dotsClass: 'slick-dots'
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                        dotsClass: 'slick-dots'
                    }
                },
            ],
        })

        $('.logo-center').slick({
            autoplay: true,
            slidesToShow: 8,
            autoplaySpeed: 2000,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 8,                      
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ],
        })

        $('.mostcourses').slick({
            autoplay: true,
            slidesToShow: 4,
            autoplaySpeed: 3000,
            arrows: true,
            mobileFirst: true,
            dots: true,
            dotsClass: 'slick-dots',
            prevArrow: $('.carousel-control-prev'),
            nextArrow: $('.carousel-control-next'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        dots: true,
                        dotsClass: 'slick-dots'
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        dots: true,
                        dotsClass: 'slick-dots'
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                        dotsClass: 'slick-dots'
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                        dotsClass: 'slick-dots'
                    }
                },
                {
                   breakpoint: 300,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                        dotsClass: 'slick-dots'
                    }
                },
            ],
        })

        $('.customer-comment').slick({
            autoplay: true,
            // infinite: true,
            slidesToShow: 1,
            autoplaySpeed: 3000,
            arrows: true,
            mobileFirst: true,
            prevArrow: $('.carousel-control-prev'),
            nextArrow: $('.carousel-control-next'),
        })

        $('.slider-cas').slick({
            //nextArrow: '<img src="images/next.png" class="next" alt="Next">',
            //prevArrow: '<img src="images/prev.png" class="prev" alt="Prev">',
            // nextArrow: '<i class="fa fa-angle-right smooth next"></i>',
            // prevArrow: '<i class="fa fa-angle-left smooth prev"></i>',
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: false,
            dots: false,
        })

        $('.partner-cas').slick({
            slidesToShow: 5,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 3,
                    }
                        },
                    ],
        })

        doAnimations($(".slideshow .hotschools .slider-cas .slick-current [data-animation ^= 'animated']"));

        $('.slider-cas').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            if (currentSlide != nextSlide) {
                var aniElm = $(this).find('.slick-slide').find("[data-animation ^= 'animated']");
                doAnimations(aniElm);
            }
        });

    }

    var uiSlick = function () {
        $('.main-pro-img').slick({
            nextArrow: '<i class="fa fa-angle-right smooth next"></i>',
            prevArrow: '<i class="fa fa-angle-left smooth prev"></i>',
            arrows: false,
            dots: false,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: true,
            asNavFor: '.pro-thumb',
        });
        $('.pro-thumb').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: '<i class="fa fa-angle-down smooth next"></i>',
            prevArrow: '<i class="fa fa-angle-up smooth prev"></i>',
            arrows: false,
            autoplay: false,
            swipeToSlide: true,
            autoplaySpeed: 5000,
            asNavFor: '.main-pro-img',
            focusOnSelect: true,
            //vertical: true,
            //verticalSwiping: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                        //vertical: false,
                        //verticalSwiping: false,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        //vertical: false,
                        //verticalSwiping: false,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3,
                        //vertical: false,
                        //verticalSwiping: false,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        //vertical: false,
                        //verticalSwiping: false,
                        infinite: true,

                    }
                }
            ],
        });
        // $('.pro-cas').slick({
        //     slidesToShow: 4,
        //     slidesToScroll: 1,
        //     nextArrow: '<i class="fa fa-angle-right smooth next"></i>',
        //     prevArrow: '<i class="fa fa-angle-left smooth prev"></i>',

        //     nextArrow: '<img src="images/next.png" class="next" alt="Next">',
        //     prevArrow: '<img src="images/prev.png" class="prev" alt="Prev">',
        //     swipeToSlide: true,
        //     autoplay: true,
        //     autoplaySpeed: 4000,
        //     responsive: [
        //     {
        //         breakpoint: 1199,
        //         settings: {
        //             slidesToShow: 3,
        //         }
        //     },
        //     {
        //         breakpoint: 991,
        //         settings: {
        //             slidesToShow: 3,
        //         }
        //     },
        //     {
        //         breakpoint: 700,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        //     ],

        // })
    }
    var fancybox = function(){
        $(".fancybox")
          .attr('rel', 'gallery')
          .fancybox({
              helpers: {
                  thumbs: {
                      width  : 40,
                      height : 40,
                      source  : function(current) {
                          return $(current.element).data('thumbnail');
                      }
                  }
              }
          });
      }

    var uiScroll = function () {
        var h = $('header').innerHeight();
        var h2 = $('.header-bottom').innerHeight();
        if (win.width() > 1025) {
            if (win.scrollTop() > h) {
                $('header').addClass('fixed');
                body.css('margin-top', h);
            }
        } else {
            if (win.scrollTop() > h) {
                $('header').addClass('fixed');
                body.css('margin-top', h);
            }
        }
        win.scroll(function (e) {
            if (win.width() > 1025) {
                if (win.scrollTop() > h) {
                    $('header').addClass('fixed');
                    body.css('margin-top', h);
                } else {
                    $('header').removeClass('fixed');
                    body.css('margin-top', '');
                }
            } else {
                if (win.scrollTop() > h) {
                    $('header').addClass('fixed');
                    body.css('margin-top', h);
                } else {
                    $('header').removeClass('fixed');
                    body.css('margin-top', '');
                }
            }
        });
    }
    var bookingForm = function(){
        
        var momentFormat = 'DD.MM.YYYY';
        var format = 'd.m.Y';
        var altFormat = 'j. F Y';
        var preparationDays = 2;
        var disabledDays = [];
        var i = 0;
        var calendar = '';
        var multipleClicks = 0;
        var openNextPicker = 1;

        $('.calender-btn').click( function() {
            calendar = $(this).children('input').attr('id');  
        });

        var enumerateDaysBetweenDates = function(startDate, endDate) {
            var dates = [];
            var currDate = moment(startDate).startOf('day');
            var lastDate = moment(endDate).startOf('day');
            while(currDate.add(1, 'days').diff(lastDate) < 0) {
                var date = moment(currDate.clone().toDate());
                disabledDays.push(date.format(momentFormat));
                dates.push( {bookedStart: startDate.format(momentFormat), booked: date.format(momentFormat), bookedEnd: endDate.format(momentFormat)});
            }
            return dates;
        };
        config = {
            mode: "range",
            animate: true,
            altInput: true,
            altFormat: altFormat,
            dateFormat: format,
            firstDayOfWeek: 1,
            rangeSeparator: ' -> ',
            locale: {
                firstDayOfWeek: 1,
                rangeSeparator: ' -> '
            },
            minDate: 'today',
            disable: disabledDays,
            onReady: function ( dateObj, dateStr, instance ) {
                $('.clear-calendar').on( 'click', () => {
                    picker1.clear();
                    picker2.clear();
                    availability.clear();
                    picker1.close();
                });
                $('.open-calendar').on( 'click', () => {
                    picker1.open();
                });
            },
            onChange: function(selectedDates, dateStr, instance) {
                var elem = instance.element;
                var calendar = $(elem).attr('id');
                var checkIn = '';
                var checkOut = '';
                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                if(selectedDates[0]) {
                    checkIn = flatpickr.formatDate(selectedDates[0], altFormat);
                    $('#check-in').parent().find(".date-time").empty().html('<span class="day">' + selectedDates[0].getDate() + '/' + selectedDates[0].getMonth() + '/' + selectedDates[0].getFullYear() + '</span>'); 
                }
                if(selectedDates[1]) {
                    checkOut = flatpickr.formatDate(selectedDates[1], altFormat);
                    //    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    $('#check-out').parent().find(".date-time").empty().html('<span class="day">' + selectedDates[1].getDate() + '/' + selectedDates[1].getMonth() + '/' + selectedDates[1].getFullYear() + '</span>');
            
                }
                instance.close();
                
                if(calendar == 'check-in') {
                    $('#check-in').next().val(checkIn);
                    picker2.setDate(selectedDates);
                if(checkOut == '') { 
                    picker2.open();
                } else {
                    $('#check-out').next().val(checkOut);
                }
                calendar == 'check-out';
                } 
                else if(calendar == 'check-out') {
                    picker1.setDate(selectedDates);
                    $('#check-out').next().val(checkOut);
                    $('#check-in').next().val(checkIn);
                    if(checkOut == '') {
                        picker2.setDate(selectedDates);
                        picker2.close();
                        picker1.open();
                    }
                }
                
                if(picker1.altInput.value == picker2.altInput.value) {
                    //alert('Please choose differecnt star- and enddate!');           
                    setTimeout( function() {
                        picker1.setDate(selectedDates[0]);
                        picker2.setDate(selectedDates[0]);
                        // picker2.open();         
                    }, 300);
                }
                
            },
            onMonthChange: function(selectedDates, dateStr, instance) {
                var div = instance.calendarContainer;
                
                $(div).find('.flatpickr-innerContainer').addClass('animated fadeIn');
                setTimeout(function() {
                $(div).find('.flatpickr-innerContainer').removeClass('animated fadeIn');
                },400);
            }
            
        };

        flatpickr.localize(flatpickr.l10ns.de);
        var picker1 = $('#check-in').flatpickr(config);
        var picker2 = $('#check-out').flatpickr(config);
        win.scroll(function() {   
            // picker1.close();
            // picker2.close();
          });
        win.click(function(e) {
            if($('.booking-select').has(e.target).length == 0 && !$('.booking-select').is(e.target)){
                $(".dropdown-backdrop").hide();
            }
        });
   }
    return {

        uiInit: function ($fun) {
            switch ($fun) {
                case 'mMenu':
                    mMenu();
                    break;
                case 'backToTop':
                    backToTop();
                    break;
                case 'uiSlider':
                    uiSlider();
                    break;
                case 'uiSlick':
                    uiSlick();
                    break;
                case 'uiClickShow':
                    uiClickShow();
                    break;
                case 'uiScroll':
                    uiScroll();
                    break;
                case 'uiDrop':
                    uiDrop();
                    break;
                case 'uiCalendar':
                    uiCalendar();
                    break;
                case 'fancybox':
                    fancybox();
                    break;
                case 'uiSearchingDate':
                    uiSearchingDate();
                    break;    
                case 'uiSliderPrice':
                    uiSliderPrice();
                    break;
               
                case 'bookingForm':
                    bookingForm();
                    break;    

                default:
                    mMenu();
                    backToTop();
                    uiSlider();
                    uiSlick();
                    uiClickShow();
                    uiScroll();
                    uiDrop();
                    uiCalendar();
                    fancybox();
                    uiSearchingDate();
                    uiSliderPrice();
                    bookingForm();
            }
        }
    }

}();


jQuery(function ($) {
    var wow = new WOW({
        offset: 50,
        mobile: false
    });
    wow.init();
    script.uiInit();

    $('.yt-box .play').click(function (e) {
        var id = $(this).closest('.yt-box').attr('data-id');
        $(this).closest('.yt-box iframe').remove();
        $(this).closest('.yt-box').append('<iframe src="https://www.youtube.com/embed/' + id + '?rel=0&amp;autoplay=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
    });

    if ($(window).width() > 991) {
        if ($('.fanpage').innerWidth() > 500) {
            $('.fb-page').css({
                '-webkit-transform': 'scale(' + $('.fanpage').innerWidth() / 500 + ')',
                'transform': 'scale(' + $('.fanpage').innerWidth() / 500 + ')',
            });
        }
    }
    $('.location').select2();

    $(".t-gallery:not(.slick-cloned) a").fancybox({
        prevEffect: 'fade',
        nextEffect: 'fade',
        transitionIn: 'fade',
        transitionOut: 'fade',
        speedIn: 600,
        speedOut: 200,
        overlayShow: false,
        autoScale: true,
        helpers: {
            thumbs: {
                width: 50,
                height: 50
            }
        },
        // afterLoad : function() {
        //     this.title = 'Ảnh ' + (this.index + 1) + ' / ' + this.group.length + (this.title ? ' - ' + this.title : '');
        // }
    });
    $(".action.search").click(function () {
        $(".action-control-search").toggleClass("active");
    });
    var filterList = {
                
        init: function () {
        
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
            selectors: {
              target: '.portfolio',
              filter: '.filter' 
          },
          load: {
            filter: 'all'  
            }     
            });                             
        
        }

    };

    // Run the show!
    filterList.init();
});
