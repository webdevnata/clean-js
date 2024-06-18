const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')

const clearBtn = document.querySelector('.form-validator__form__control-buttons__btn-clear')

const sendBtn = document.querySelector('.form-validator__form__control-buttons__btn-send')

const popup = document.querySelector('.form-validator__form__popup-confirm')

const closePopupBtn = document.querySelector('.form-validator__form__popup-confirm__btn-close')

const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.form-validator__form__box__error-text')

    formBox.classList.add('error')
    errorMsg.textContent = msg;
}

const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error');
}

const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder);
        } else {
            clearError(el)
        }
    })
}

const checkLength = (input, min) => {
    if (input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} has to have min. ${min} signs`)
    }
}

const checkPassword = (pass1, pass2) => {
    if (pass1.value !== pass2.value) {
        showError(pass2, "The passwords don't match")
    }
}

const checkEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)) {
        clearError(email)
    } else {
        showError(email, 'E-mail is incorrect')
    }
}

const checkErrors = () => {
    const allInputs = document.querySelectorAll('.form-validator__form__box');
    let errorCount = 0;

    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++;
        }
    })
    if (errorCount === 0) {
        popup.classList.add('show-popup')
    }

    console.log(errorCount);
}

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    checkForm([username, pass, pass2, email])
    checkLength(username, 4)
    checkLength(pass, 8)
    checkPassword(pass, pass2)
    checkEmail(email)
    checkErrors()
})

clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [username, pass, pass2, email].forEach(el => {
        el.value = '';
        clearError(el)
    })

})