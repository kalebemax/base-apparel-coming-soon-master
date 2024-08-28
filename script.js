const btn = document.querySelector('#btn')

const emailTest = () => {
    const emailInput = document.getElementById('email')
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessage = document.getElementById('txt');
    const icon = document.getElementById('icon')
    const inputContainer = document.getElementById('inputContainer')
    const img = 'images/icon-error.svg'

    if (!emailValue) {
    inputContainer.style.borderColor = 'red'
    icon.innerHTML = `<img src="${img}">`
    errorMessage.textContent = "Email address is required.";
} else if (!emailRegex.test(emailValue)) {
    inputContainer.style.borderColor = 'red'
    icon.innerHTML = `<img src="${img}">`
    errorMessage.textContent = "Please provide a valid email address.";
} else if (emailValue) {
    inputContainer.style.border = 'none'
    inputContainer.innerHTML = `<p style="color: green">Email sent successfully!</p>`
    inputContainer.style.borderColor = 'green'
    icon.innerHTML = ''
    errorMessage.textContent = ''
} 
}
 btn.addEventListener('click', emailTest) 

 

