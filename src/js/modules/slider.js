const slider = (slidesSelector, btnsSelector) => {
	const slides = document.querySelectorAll(slidesSelector),
	btns = document.querySelectorAll(btnsSelector);
	
	let index = 0;
	
	
	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			plusSlide(1);
		});
		
		btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
			e.preventDefault();
			index = 0;
			showSlides(index);
		})
	})
	
	function showSlides (n) {
		if (n < 0) {
			index = slides.length - 1;
		}
		
		if (n > slides.length - 1) {
			index = 0;
		}
		
		try {
			const hanson = document.querySelector('.hanson');
			hanson.style.opacity = '0';
			if (index == 2) {
				setTimeout(() => {
					hanson.style.opacity = '1';
					hanson.classList.add('animated', 'slideInUp');
				}, 3000);
			} else {
				// hanson.style.opacity = '0';
				hanson.classList.remove('animated', 'slideInUp');
			}
		}catch(e) {}		
		
		slides.forEach(slide => slide.style.display = 'none');
		slides[index].style.display = 'block';
	}

	function plusSlide(n) {
		showSlides(index += n);
	}

}

export default slider;