    const download = () => {
        const btns = document.querySelectorAll('.download'),
              path = 'assets/img/mainbg.jpg';

        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                downloadElem(path);
            });
        });

        function downloadElem(path) {
            const link = document.createElement('a');
            link.href = path;
            link.setAttribute('download', 'nice_picture');
            link.style.display = 'none';

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
        }
}

export default download;