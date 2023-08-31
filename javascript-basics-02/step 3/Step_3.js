
var divElement = document.createElement('div');
document.body.appendChild(divElement);

var divTarget = document.querySelector('div')
var inputTarget = document.querySelector('#name');


inputTarget.addEventListener('input', function () {
    divTarget.textContent=inputTarget.value;

})