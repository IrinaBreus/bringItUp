export default class showInfo  {
    constructor (triggers) {
        try {
            this.btns = document.querySelectorAll(triggers);
        } catch (e) {}

    }

    init() {

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                try {
                    const msg = btn.parentElement.nextElementSibling;
                    const svgPath = btn.querySelectorAll('svg path');
                    
                    if (msg.style.display === 'block') {
                        msg.style.display = 'none';
                        svgPath[0].style.display = '';
                    } else {
                        msg.style.display = 'block';
                        svgPath[0].style.display = 'none';
                    }
                } catch (e) {}
            })
        })
    }
}