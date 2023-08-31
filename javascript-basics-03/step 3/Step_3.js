const colors = document.querySelectorAll('div');

for (let i = 0; i < colors.length; i++) {

    console.log(colors);

    colors[i].addEventListener('click', function () {
        if (colors[i].classList == 'color green') {
            document.querySelector('#text').style.color = "green";
        }
        if (colors[i].classList == 'color red') {
            document.querySelector('#text').style.color = "red";
        }
        if (colors[i].classList == 'color blue') {
            document.querySelector('#text').style.color = "blue";
        }

    })

}
