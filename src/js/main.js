import mainSlider from "./modules/slider/mainSlider";
import miniSlider from "./modules/slider/miniSlider";
import videoPlayer from "./modules/videoPlayer";


window.addEventListener('DOMContentLoaded', () => {
    mainSlider('.page > div','.next');

    
    videoPlayer('.play', '.overlay');
});