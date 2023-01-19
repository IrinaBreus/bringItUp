export default class Slider {
    constructor(slides, btns) {
        this.slides = document.querySelectorAll(slides);
        this.btns = document.querySelectorAll(btns);
        this.index = 0;
    }

    showSlides(n) {
        if (n > this.slides.length - 1) {
            this.index = 0;
        }

        if (n < 0) {
            this.index = this.slides.length - 1;
        }

        this.slides.forEach(slide => slide.style.display = 'none');
        this.slides[this.index].style.display = '';
    }

    plusSlide(n) {
        this.showSlides(this.index += n);
    }

    render() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlide(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.index = 0;
                this.showSlides(this.index);
            })
        })
    }
}