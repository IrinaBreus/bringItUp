export default class Difference {
    constructor (oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    hideItems(items) {
        items.forEach((item, i) => {
            if (i !== items.length - 1) {
                item.classList.add('animated', 'fadeInDown');
                item.style.display = 'none';
            };
        });
    };

    bringItems(container, items, counter) {
        container.lastElementChild.addEventListener('click', () => {
            items[counter].style.display = '';
            counter++;

            if (counter == items.length - 1) {
                items[counter].remove();
            };
        });
    };

    init() {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);

        this.bringItems(this.oldOfficer, this.oldItems, this.oldCounter);
        this.bringItems(this.newOfficer, this.newItems, this.newCounter);
    }
}