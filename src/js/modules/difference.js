const difference = (parentSelector) => {
    const parent = document.querySelector(parentSelector),
          title = parent.firstElementChild,
          trigger = parent.lastElementChild,
          blocks = [...parent.children];

    let index = 1;

    blocks.forEach(item => {
        
        item.style.display = 'none';
        item.classList.add('animated', 'fadeInDown');
        title.style.display = '';
        trigger.style.display = '';
    });

    trigger.addEventListener('click', () => {
        blocks[index].style.display = '';
        index++;

        if (index === blocks.length - 1) {
            trigger.remove();
        };
    })
}

export default difference;