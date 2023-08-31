

document.querySelector("button").addEventListener('click',function(){
  let result=confirm(" Clear all fields in the form ? ");
  if(result){
    // document.querySelectorAll('input').forEach(x=>x.value="");
    document.querySelector('#name').value="";
    document.querySelector('#surname').value="";
    document.querySelector('#city').value="";

}}

);