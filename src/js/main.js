import slider from "./slider";
import videoPlayer from "./videoPlayer";


window.addEventListener('DOMContentLoaded', () => {
    slider('.page > div', '.next');

    videoPlayer();
});