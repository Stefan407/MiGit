
    var i = 0;
    var colorArray = [ 'img/top-bg-1.jpg', 'img/top-bg-2.jpg'];
    function nextSlide() {
        document.getElementsByClassName('top')[0].style.backgroundImage =
         "url(" + colorArray[i] + ")";
         i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
    };
    setInterval(nextSlide, 4000);

        $('.quote__wrap').slick({
            prevArrow: '<button type="button" class="slick-prev slick-btn" ></button>',
            nextArrow: '<button type="button" class="slick-next slick-btn" ></button>',
            dots:false,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                  }
                }
              ]
              
              
        });
        
        $(".menu ").on("click","a", function (event) {
       
            event.preventDefault();
        
            var id  = $(this).attr('href'),
        
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        
        });
        


