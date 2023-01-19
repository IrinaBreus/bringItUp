const slider = (slidesSelector, btnsSelector) => {
	const slides = document.querySelectorAll(slidesSelector),
		  btns = document.querySelectorAll(btnsSelector);

	let index = 0;

	showSlides(index);
	
	btns.forEach(btn => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			
			plusSlide(1);
		})
	})
	
	function showSlides (n) {
		if (n < 0) {
			index = slides.length - 1;
		}
		
		if (n > slides.length - 1) {
			index = 0;
		}
		
		slides.forEach(slide => slide.style.display = 'none');
		slides[index].style.display = 'block';
	}

	function plusSlide(n) {
		showSlides(index += n);
	}
}

export default slider;