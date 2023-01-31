const checkTextInputs = () => {
    const txtInputs = document.querySelectorAll('[name="email"]');

    txtInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key.match(/[^a-z 0-9 @ \.]/ig, '')) {
                e.preventDefault();
            }
        })
        input.addEventListener('input', () => {
               input.value = input.value.replace(/[а-яё]/ig, '');
         });
    })
}   

export default checkTextInputs;