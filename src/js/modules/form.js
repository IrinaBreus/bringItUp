import { message } from "statuses";

export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll('input');
        this.message = {
            loading: "LOADING",
            succes: "Thank you! Your data has been sent successfully",
            failure: "Something went wrong"
        };
        this.path = 'assets/question.php';
    }
    
    clearInputs() {
        this.inputs.forEach(input => {
            input.value = "";
        });
    }

    checkMailInputs() {
        const txtInputs = document.querySelectorAll('[type="email"]');
        txtInputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }

    initMask() {

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
            });
        };

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
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }

    async postData(url, data) {
            let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        
        return await res.text();
    }
    
    init() {
        this.forms.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                item.parentNode.append(statusMessage);
                statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 20px;
                    color: grey;
                `;
                
                statusMessage.textContent = this.message.loading;
                
                const formData = new FormData(item);
                
                this.postData(this.path, formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = this.message.succes;
                }).catch(() => {
                    statusMessage.textContent = this.message.failure;
                }).finally(() => {
                    this.clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                });
            });
        });
        this.checkMailInputs();

        this.initMask();
    }
}