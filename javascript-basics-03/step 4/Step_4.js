const password = document.querySelector('#password');
const confirmation = document.querySelector('#confirmation');


document.querySelector('button').addEventListener('click', function () {
    if (password.value !== confirmation.value) {
        password.style.borderColor = "red ";
        confirmation.style.borderColor = "red ";

    }



})
