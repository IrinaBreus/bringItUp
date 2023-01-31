import mask from "./mask";
import checkTextInputs from "./checkTextInputs";

const form = () => {
    const forms = document.querySelectorAll('form');
    
    mask();
    checkTextInputs();
    
    const message = {
        loading: 'Loading',
        success: "Thank you! We'll call you soon",
        failure: 'Ooops....'
    };
    
    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        
        return await res.text();
    };
    
    
    forms.forEach(f => {
        // const btn = f.querySelector('.btn'),
        //       inputs = f.querySelectorAll('input'),
        //       name = f.querySelector('[name="name"]'),
        //       mail = f.querySelector('[name="email"]');

        // btn.setAttribute('disabled', true);

        // inputs.forEach(input => {
        //     input.addEventListener('input', () => {
        //         if (name.value !== '' && mail !== '') {
        //             btn.removeAttribute('disabled');
        //         }
        //     });
        // })

        f.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.style.cssText = `
                margin-top: 10px;
                margin-left: 15px;
                color: gray;
            `;
            f.append(statusMessage);

            statusMessage.textContent = message.loading;

            const formData = new FormData(f);

            postData('assets/question.php', formData)
                .then(res => {
                    statusMessage.textContent = message.success;
                    console.log(res);
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    setTimeout(() => {
                        statusMessage.remove();
                        f.reset();
                    }, 3000);
                });
        });
    });
}

export default form;