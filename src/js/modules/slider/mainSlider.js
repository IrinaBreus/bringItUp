const mainSlider = (slidesSelector, nextSelector = null, prevSelector = null) => {
    const slides = document.querySelectorAll(slidesSelector),
          next = document.querySelectorAll(nextSelector),
          prev = document.querySelectorAll(prevSelector);
    
    let index = 1;

    next.forEach(btn => {
        btn.addEventListener('click', () => {
            moveSlides(1);
        });

        btn.parentElement.previousElementSibling.addEventListener('click', (e) => {
            e.preventDefault();
            index = 1;
            slides[index - 1].style.display = 'flex';
        })
    });

    prev.forEach(btn => {
        btn.addEventListener('click', () => {
            moveSlides(-1);
        });
    })

    function showSlides(n) {
        if (n < 1) {
            index = slides.length;
        };

        if (n > slides.length) {
            index = 1;
        };

        slides.forEach(slide => slide.style.display = 'none');
        slides[index - 1].style.display = 'flex';

        try {
            const hanson = document.querySelector('.hanson');
            hanson.style.opacity = '0';
            
            if (index === 3) {
                setTimeout(() => {
                    hanson.classList.add('animated', 'slideInUp');
                    hanson.style.opacity = '1';
                }, 3000);
            } else {
                hanson.style.opacity = '0';
                hanson.classList.remove('slideInUp');
            }

        } catch (e) {}
    }

    function moveSlides(n) {
        showSlides(index += n);
    }
}

export default mainSlider;