
let images = document.querySelectorAll("img");
images.forEach((image, i) => {
    let imageIndex=i+1;
switch (imageIndex) {
    case 1: imageIndex=5;break;
    case 2: imageIndex=4;break;
    case 3: imageIndex=5;break;
    case 4: imageIndex=2;break;
    case 5: imageIndex=1;break;

}

 image.addEventListener('mouseover',()=>image.src = "images/image" +imageIndex+ ".jpg");


})
