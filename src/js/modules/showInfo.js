export default class ShowInfo {
    constructor(trigger) {
        this.trigger = document.querySelectorAll(trigger);
    }

    init() {
        this.trigger.forEach(btn => {
            btn.addEventListener('click', () => {
                const block = btn.closest('.module__info-show').nextElementSibling;
                
                block.classList.add('animated', 'fadeInDown');
                block.classList.toggle('msg');
                block.style.marginTop = '20px';
            });
        });
    }
}