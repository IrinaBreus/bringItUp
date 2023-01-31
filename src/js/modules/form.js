export default class Form {
    constructor (forms) {
        this.forms = document.querySelectorAll('form');
        this.message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Мы скоро с Вами свяжемся',
            failure: 'Что-то пошло не так...'
        };
        this.path = 'assets/question.php';
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    mask() {
        let setCursorPosition = (pos, elem) => {
            elem.focus();
    
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();
    
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
            elem.addEventListener('click', () => {
                elem.selectionStart = elem.selectionEnd = elem.value.length;
            })
        }
    
        function createMask(event) {
            let matrix = '+1 (___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');
    
            if (def.length >= val.length) {
                val = def;
            }
            
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });
    
             if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
             } else {
                setCursorPosition(this.value.length, this);
             }
        }
    
        let inputs = document.querySelectorAll('[name="phone"]');
    
        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            // input.addEventListener('click', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }

    checkMailInputs() {
        const mailInputs = document.querySelectorAll('[type="email"]');
        mailInputs.forEach(input => {
            input.addEventListener('keypress', function(e){
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            })
        })
    }

    init() {
        this.checkMailInputs();
        this.mask();
        
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: gray;
                `;
                form.parentNode.append(statusMessage);
                statusMessage.textContent = this.message.loading;

                const formData = new FormData(form);

                this.postData(this.path, formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = this.message.success;
                    })
                    .catch(() => statusMessage.textContent = this.message.failure)
                    .finally(() => {
                        setTimeout(() => {
                            form.reset();
                            statusMessage.remove();
                        }, 3000);
                    })
            })
        })
    }
}