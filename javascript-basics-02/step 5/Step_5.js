
let images = document.querySelectorAll("img");

images.forEach((image, i) => {


    image.addEventListener('mouseover', function () {

        image.src = "images/image" + (Math.floor(Math.random() * images.length) + 1) + ".jpg";
    })


});

