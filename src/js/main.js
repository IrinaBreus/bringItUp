import Difference from "./modules/difference";
import Form from "./modules/form";
import VideoPlayer from "./modules/playVideo";
import MainSlider from "./modules/slider/slider-main";
import SliderMini from "./modules/slider/slider-mini";


window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const showupSlider = new SliderMini({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    })
    showupSlider.init();

    const modulesSlider = new SliderMini({
        container: '.modules__content-slider',
        prev: '.modules__info .slick-prev',
        next: '.modules__info .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    })
    modulesSlider.init();

    const feedSlider = new SliderMini({
        container: '.feed__slider-container',
        prev: '.feed .slick-prev',
        next: '.feed .slick-next',
        activeClass: 'feed__item-active'
    })
    feedSlider.init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.play();

    new Form('form').init();
})