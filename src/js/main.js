import difference from "./modules/difference";
import form from "./modules/form";
import showInfo from "./modules/showInfo";
import mainSlider from "./modules/slider/mainSlider";
import miniSlider from "./modules/slider/miniSlider";
import videoPlayer from "./modules/videoPlayer";


window.addEventListener('DOMContentLoaded', () => {
    mainSlider('.page > div','.page .next');
    mainSlider('.moduleapp > div', '.moduleapp .next', '.moduleapp .prev');

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

    videoPlayer('.showup .play', '.overlay');
    videoPlayer('.module__video-item .play', '.overlay');

    form();

    showInfo();
});