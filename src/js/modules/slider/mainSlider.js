const mainSlider = (slidesSelector, nextSelector = null, prev = null) => {
    const slides = document.querySelectorAll(slidesSelector),
          next = document.querySelectorAll(nextSelector);
    
    let index = 0;

    next.forEach(btn => {
        btn.addEventListener('click', () => {
            moveSlides(1);
        });

        btn.parentElement.previousElementSibling.addEventListener('click', (e) => {
            e.preventDefault();
            index = 0;
            slides[0].style.display = 'flex';
        })
        
    });


    function showSlides(n) {
        if (n == 0) {
            index = slides.length - 1;
        };

        if (n == slides.length - 1) {
            index = 0;
        };

        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'flex';

        try {
            const hanson = document.querySelector('.hanson');
            hanson.style.opacity = '0';
            
            if (index === 2) {
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