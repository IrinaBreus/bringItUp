import VideoPlayer from "./playVideo";
import Slider from "./slider"

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page > div', '.next');
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.play();
})