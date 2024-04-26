const container = document.querySelector('.container')
const start = document.querySelector('.start')
const success = document.querySelector('.success')
const form = document.querySelector('.form')
const btnDismiss = document.getElementById('button-dismiss')

const emailIsValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    return emailRegex.test(email)
}

const renderError = (emailError, email) => {
    if (emailError.classList.contains('hidden'))
        emailError.classList.remove('hidden')

    if (!email.classList.contains('error'))
        email.classList.add('error')
}

const renderSuccess = (emailError, email, emailConfirm) => {
    if (email.classList.contains('error'))
        email.classList.remove('error')

    if (!emailError.classList.contains('hidden'))
        emailError.classList.add('hidden')

    if (document.body.clientWidth > 1440) {
        container.classList.add('tks')
    }

    start.classList.add('hidden')
    success.classList.remove('hidden')
    emailConfirm.textContent = email.value
    email.value = ''
}

const handleSubmit = (event) => {
    event.preventDefault()

    const email = document.querySelector('input[type="email"]')
    const emailError = document.getElementById('email-error')
    const emailConfirm = document.getElementById('email-confirm')

    if (!emailIsValid(email.value)) {
        renderError(emailError, email)
    } else {
        renderSuccess(emailError, email, emailConfirm)
    }
}

const handleDismiss = () => {
    container.classList.remove('tks')
    start.classList.remove('hidden')
    success.classList.add('hidden')
}

form.addEventListener('submit', handleSubmit)
btnDismiss.addEventListener('click', handleDismiss)
