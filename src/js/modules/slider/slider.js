export default class Slider {
    constructor({page = '', btns = '', next = '', prev = ''} = {}) {
        this.page = document.querySelectorAll(page);
        this.btns = document.querySelectorAll(btns);
        this.index = 0;
    }

    
}