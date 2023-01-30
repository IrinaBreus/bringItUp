import difference from "./modules/difference";
import mainSlider from "./modules/slider/mainSlider";
import miniSlider from "./modules/slider/miniSlider";
import videoPlayer from "./modules/videoPlayer";


window.addEventListener('DOMContentLoaded', () => {
    mainSlider('.page > div','.next');

    miniSlider({containerSelect: '.showup__content-slider', 
                nextSelect: '.showup__next', 
                prevSelect: '.showup__prev', 
                activeClass: 'card-active',
                animate: true});
    miniSlider({containerSelect: '.modules__content-slider', 
                nextSelect: '.modules__info-btns .slick-next', 
                prevSelect:'.modules__info-btns .slick-prev',
                activeClass: 'card-active',
                animate: true,
                autoplay: true});
    miniSlider({containerSelect: '.feed__slider', 
                nextSelect: '.feed__slider .slick-next', 
                prevSelect:'.feed__slider .slick-prev',
                activeClass: 'feed__item-active'});

    difference('.officerold');
    difference('.officernew');

    videoPlayer('.play', '.overlay');
});