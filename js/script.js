
var script = function(){

    var win = $(window);
    var html = $('html');
    var body = $('body');

    var mMenu = function(){
        var menu = $('.m-nav');
        var ct = menu.find('.nav-ct');
        var open = $('.nav-open');
        var close = $('.nav-close');

        ct.append($('.header-contact-top').clone());
        ct.append($('.language').clone());
        ct.append($('.main-nav').clone());
        ct.append($('.social-link').clone());

        open.click(function(e) {
            e.preventDefault();
            if(win.width()<1200){
                menu.addClass('act');
            }           
        });
        close.click(function(e) {
            e.preventDefault();
            if(win.width()<1200){
                menu.removeClass('act');
            }
        });


        var sidebar = $('.sb-nav');
        var ct2 = sidebar.find('.nav-ct');
        var open2 = $('.sb-open');
        var close2 = $('.sb-close');
        // ct2.append($('.main-nav').clone());
        open2.click(function(e) {
            e.preventDefault();
            if(win.width()<1200){
                sidebar.addClass('act');
            }           
        });
        close2.click(function(e) {
            e.preventDefault();
            if(win.width()<1200){
                sidebar.removeClass('act');
            }
        });

        win.click(function(e) {
            if(menu.has(e.target).length == 0 && !menu.is(e.target) && open.has(e.target).length == 0 && !open.is(e.target)){
                menu.removeClass('act');
            }
            if(sidebar.has(e.target).length == 0 && !sidebar.is(e.target) && open2.has(e.target).length == 0 && !open2.is(e.target)){
                sidebar.removeClass('act');
            }
        });


        nav = menu.find('.main-nav');
        nav.find("ul li").each(function() {
            if($(this).find("ul>li").length > 0){
                $(this).prepend('<i class="nav-drop"></i>');
            }
        });

        $(".nav-drop").click(function(){
            var ul = $(this).nextAll("ul");
            if(ul.is(":hidden") === true){
                ul.parent('li').parent().children().children('ul').slideUp(200);
                ul.parent('li').parent().children().children('.nav-drop').removeClass("act");
                $(this).addClass("act");
                ul.slideDown(200);
            }
            else{
                ul.slideUp(200);
                $(this).removeClass("act");
            }
        });
    }

    var uiDrop = function(){
        $('.drop').each(function() {
            var this_ = $(this);
            var label = this_.children('a');
            var ct = this_.children('ul');
            var item = ct.children('li').children('a');

            this_.click(function() {
                ct.slideToggle(150);
            });

            item.click(function(e) {
                e.preventDefault();
                label.html($(this).html());
            });

            win.click(function(e) {
                if(this_.has(e.target).length == 0 && !this_.is(e.target)){
                    this_.children('ul').slideUp(150);
                }
            })
        });  
    }

    var backToTop = function(){
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

    var uiClickShow = function(){
        var ani = 200;
        $('[data-show]').each(function() {
            var this_ = $(this);
            var ct = $(this_.attr('data-show'));

            this_.click(function(e) {
                e.preventDefault();
                ct.slideToggle(ani);
            });
        });

        win.click(function(e) {
            // if($(this).width() > 991){
                $('[data-show]').each(function() {
                    var this_ = $(this);
                    var ct = $(this_.attr('data-show'));
                    if(ct.has(e.target).length == 0 && !ct.is(e.target) && this_.has(e.target).length == 0 && !this_.is(e.target)){
                        ct.slideUp(ani);
                    }
                })
            // }
        });
    }

    function doAnimations( elems ) {
        var animEndEv = 'webkitAnimationEnd animationend';
        elems.each(function () {
            var $this = $(this),
            $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    var uiSlider = function(){
        $('.slider-cas').slick({
            //nextArrow: '<img src="images/next.png" class="next" alt="Next">',
            //prevArrow: '<img src="images/prev.png" class="prev" alt="Prev">',
            // nextArrow: '<i class="fa fa-angle-right smooth next"></i>',
            // prevArrow: '<i class="fa fa-angle-left smooth prev"></i>',
            autoplay:false,
            autoplaySpeed:3000,
            arrows: false,
            dots: false,
        })
        $('.partner-cas').slick({
            slidesToShow: 5,
            autoplay:true,
            autoplaySpeed:1500,
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
        doAnimations($(".slider-cas .slick-current [data-animation ^= 'animated']"));
        $('.slider-cas').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            if(currentSlide!=nextSlide){
                var aniElm = $(this).find('.slick-slide').find("[data-animation ^= 'animated']");
                doAnimations(aniElm);
            }
        });
    }

    var uiSlick = function(){
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

    var uiScroll = function(){
        var h = $('header').innerHeight();
        var h2 = $('.header-bottom').innerHeight();
        if(win.width()>1025){
            if(win.scrollTop()> 200 ){
                $('header').addClass('fixed');
                body.css('margin-top', h2);
            }
        }
        else{
            if(win.scrollTop()> 0 ){
                $('header').addClass('fixed');
                body.css('margin-top', h2);
            }
        }
        win.scroll(function(e) {
            if(win.width()>1025){
                if(win.scrollTop()> 200){
                    $('header').addClass('fixed');
                    body.css('margin-top', h2);
                }
                else{
                    $('header').removeClass('fixed');
                    body.css('margin-top', '');
                }
            }
            else{
                if(win.scrollTop()> 0){
                    $('header').addClass('fixed');
                    body.css('margin-top', h);
                }
                else{
                    $('header').removeClass('fixed');
                    body.css('margin-top', '');
                }
            }
        });
    }
    return {

        uiInit: function($fun){
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

                default:
                mMenu();
                backToTop();
                uiSlider();
                uiSlick();
                uiClickShow();
                uiScroll();
                uiDrop();
            }
        }
    }

}();


jQuery(function($) {
    var wow = new WOW({offset:50,mobile:false}); wow.init();
    script.uiInit();

    $('.yt-box .play').click(function(e) {
        var id = $(this).closest('.yt-box').attr('data-id');
        $(this).closest('.yt-box iframe').remove();
        $(this).closest('.yt-box').append('<iframe src="https://www.youtube.com/embed/'+ id + '?rel=0&amp;autoplay=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
    });

    if($(window).width() > 991){
        if($('.fanpage').innerWidth()>500){
            $('.fb-page').css({
                '-webkit-transform': 'scale('+$('.fanpage').innerWidth()/500+')',
                'transform': 'scale('+$('.fanpage').innerWidth()/500+')',
            });
        }
    }

    $(".t-gallery:not(.slick-cloned) a").fancybox({
        prevEffect  : 'fade',
        nextEffect  : 'fade',
        transitionIn: 'fade',
        transitionOut: 'fade',
        speedIn       :   600, 
        speedOut      :   200, 
        overlayShow   :   false,
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
    $(".action.search").click(function(){
        $(".action-control-search").toggleClass("active");
    });
});

