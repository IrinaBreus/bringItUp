export default class Download {
    constructor (triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        const link = document.createElement('a');
        link.href = path;
        link.setAttribute('download', 'nice_picture');

        link.style.display = 'none';
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }

    init() {
        this.btns.forEach(elem => {
            elem.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.downloadItem(this.path);
            });
        });
    }
}