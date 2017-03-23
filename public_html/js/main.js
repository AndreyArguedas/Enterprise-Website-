'use strict';

$(function(){
    
    var $banSlide =$('#banSlide');
    var $container = $banSlide.find('.slides');
    var $slides = $container.find('.slide');
    var mySlide = 0;
    var interval;
    function startBanner() {
        interval = setInterval(function () {
            $container.animate({'margin-left': '-=1150px'}, 1000, function () {
                mySlide++;
                if (mySlide === $slides.length) {
                    mySlide = 0;
                    $container.css('margin-left', 0);
                }
            });
        }, 3000);
    }
    
    function pauseBanner(){
        clearInterval(interval);
    }

    $banSlide.on('mouseover',pauseBanner).on('mouseleave',startBanner);
    
    startBanner();
});