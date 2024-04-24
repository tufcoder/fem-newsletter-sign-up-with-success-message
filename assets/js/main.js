const container = document.querySelector('.container')
const first = document.querySelector('.first')
const success = document.querySelector('.success')
const form = document.querySelector('.form')
const btnDismiss = document.getElementById('button-dismiss')

const handleSubmit = (event) => {
    event.preventDefault()

    const emailRegExp =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const email = document.querySelector('input[type="email"]')
    const emailError = document.getElementById('email-error')
    const emailConfirm = document.getElementById('email-confirm')

    if (!emailRegExp.test(email.value)) {
        if (emailError.classList.contains('hidden'))
            emailError.classList.remove('hidden')

        if (!email.classList.contains('error'))
            email.classList.add('error')
    } else {
        if (email.classList.contains('error'))
            email.classList.remove('error')

        if (!emailError.classList.contains('hidden'))
            emailError.classList.add('hidden')

        if (document.body.clientWidth > 900) {
            container.classList.add('tks')
        }

        first.classList.add('hidden')
        success.classList.remove('hidden')
        emailConfirm.textContent = email.value
        email.value = ''
    }
}

const handleDismiss = () => {
    first.classList.remove('hidden')
    success.classList.add('hidden')
    container.classList.remove('tks')
}

form.addEventListener('submit', handleSubmit)
btnDismiss.addEventListener('click', handleDismiss)
