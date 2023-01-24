import VideoPlayer from "./modules/playVideo";
import Slider from "./modules/slider/slider";
import MainSlider from "./modules/slider/slider-main";


window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({page: '.page > div', btns: '.next'});
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.play();
})