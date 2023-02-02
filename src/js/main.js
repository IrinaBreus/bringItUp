import Difference from "./modules/difference";
import Form from "./modules/form";
import VideoPlayer from "./modules/playVideo";
import MainSlider from "./modules/slider/slider-main";
import SliderMini from "./modules/slider/slider-mini";


window.addEventListener('DOMContentLoaded', () => {
    new MainSlider({
        slides: '.page > div', 
        next: '.page .next'
    }).render();

    new MainSlider({
        slides: '.moduleapp > div', 
        next: '.moduleapp .next', 
        prev: '.moduleapp .prev'
    }).render();

    
    new SliderMini({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    }).init();

    new SliderMini({
        container: '.modules__content-slider',
        prev: '.modules__info .slick-prev',
        next: '.modules__info .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    }).init();

    new SliderMini({
        container: '.feed__slider-container',
        prev: '.feed .slick-prev',
        next: '.feed .slick-next',
        activeClass: 'feed__item-active'
    }).init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    new VideoPlayer('.showup .play', '.overlay').play();
    new VideoPlayer('.module__video-item .play', '.overlay').play();

    new Form('form').init();
})