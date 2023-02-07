const showInfo = () => {
    try {
        const btns = document.querySelectorAll('.plus');
    
        btns.forEach(btn => {
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
    } catch (e) {}
}

export default showInfo;