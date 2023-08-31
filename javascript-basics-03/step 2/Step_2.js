const elts=document.querySelectorAll('a');

for (let i = 0; i < elts.length; i++) {

    // console.log(elts);

  elts[i].addEventListener('click', function(){
    if(elts[i].id=='hide') {
 document.querySelector('#texte').style.display="none";}
 else {document.querySelector('#texte').style.display="block";}
    
})

}
