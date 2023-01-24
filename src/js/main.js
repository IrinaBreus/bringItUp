import slider from "./modules/slider";
import videoPlayer from "./modules/videoPlayer";


window.addEventListener('DOMContentLoaded', () => {
    slider('.page > div', '.next');

    videoPlayer('.play', '.overlay');
});