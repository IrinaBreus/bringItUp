const miniSlider = ({containerSelect = null, nextSelect = null, prevSelect = null, activeClass = null, animate = false, autoplay = false} = {}) => {
    const container = document.querySelector(containerSelect),
          slides = container.children,
          next = document.querySelector(nextSelect),
          prev = document.querySelector(prevSelect);

    container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;
    `;

    decorizeSlider();

    if (autoplay) {
        autoplaySlider();
    }

    next.addEventListener('click', () => {
        nextSlides();
    });
    
    prev.addEventListener('click', () => {
        const active = slides[slides.length - 1];
        
        container.insertBefore(active, slides[0]);
        decorizeSlider();
    });
    
    function decorizeSlider() {
        for (let slide of slides) {
            slide.classList.remove(activeClass);
            if (animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        }
        
        if (slides[0].tagName !== 'BUTTON') {
            slides[0].classList.add(activeClass);
        }

        if (animate) {
            slides[0].querySelector('.card__title').style.opacity = '1';
            slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }78
    };
    
    function nextSlides() {
        if (slides[1].tagName == "BUTTON" && slides[2].tagName == "BUTTON") {
            container.appendChild(slides[0]); // Slide
            container.appendChild(slides[1]); // Btn
            container.appendChild(slides[2]); // Btn
            decorizeSlider();
        } else if (slides[1].tagName == "BUTTON"){
            container.appendChild(slides[0]); // Slide
            container.appendChild(slides[1]); // Btn
            decorizeSlider();
        } else {
            container.appendChild(slides[0]);
            decorizeSlider();
        }
    }

    function autoplaySlider () {
        const play = setInterval(() => nextSlides(), 5000);

        container.addEventListener('mouseenter', () => {
            clearInterval(play);
        });

        container.addEventListener('mouseleave', () => {
            autoplaySlider();
        });

        next.parentNode.addEventListener('mouseenter', () => {
            clearInterval(play);
        });

        next.parentNode.addEventListener('mouseleave', () => {
            autoplaySlider();
        });
    }
}

export default miniSlider;