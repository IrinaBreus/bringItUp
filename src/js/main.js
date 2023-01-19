import Slider from "./slider"

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page > div', '.next');
    slider.render();
})