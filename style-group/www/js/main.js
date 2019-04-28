$(function () {
    $('.slider__wrapper').slick({
        prevArrow: '<button type="button" class="slick-prev slick-btn" ></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn" ></button>',
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]


    });
    $(function () {
        $('.gallery__content').slick({
            slidesToShow: 1,
            arrows: false,
            fade: true,
            
        });
        $('.gallery__nav').slick({
            slidesToShow: 5,
            slidesToScroll: 10,
            asNavFor: '.gallery__content',
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3
                  }
                }
              ]
        });
    });

    let lastPos = 0;
    document.body.onscroll = function () {
        let pos = document.documentElement.scrollTop;
        if (pos > 100) {
            document.getElementById('header').style.padding = 10 + "px";

        }
        else {
        };
        if (lastPos < pos) {
            document.getElementById('header').style.display = "none";
        }
        else {
            document.getElementById('header').style.display = "block";
        }
        lastPos = pos;
    }

    $('.map__bg').click(function () {
        $(this).toggleClass('active');
        $('.map__span-two').toggleClass('map__span-two-active');
    });
    $(".tabs__wrapper .tab").click(function () {
        $(".tabs__wrapper  .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__wrapper .tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".icon").click(function () {
        $(".menu ul").slideToggle();
        $(".p1").toggleClass('p1-active');
        $(".p2").toggleClass('p2-active');
    })
    $("#menu-a").click(function () {
        $(".menu ul").slideToggle();
        $(".p1").toggleClass('p1-active');
        $(".p2").toggleClass('p2-active');
    })
    $(".map__bg").click(function () {
        $(".map__span-one").slideToggle();
        $(".map__span-one-close").slideToggle();
    })
});




$(".menu, .link-up, .top").on("click", "a", function (event) {

    event.preventDefault();

    var id = $(this).attr('href'),

        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);

});

