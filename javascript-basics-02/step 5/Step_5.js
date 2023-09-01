
let images = document.querySelectorAll("img");

for(let i=0; i<images.length;i++){

images[i].addEventListener('mouseover', function () {

    images[i].src = "images/image" + (Math.floor(Math.random() * images.length) + 1) + ".jpg";
})


}

// images.forEach((image, i) => {


//     image.addEventListener('mouseover', function () {

//         image.src = "images/image" + (Math.floor(Math.random() * images.length) + 1) + ".jpg";
//     })


// });

