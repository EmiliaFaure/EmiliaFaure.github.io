const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click" , () => {

    nav.classList.add ("visible");

})

cerrar.addEventListener("click" , () => {

    nav.classList.remove ("visible");

})



const div = document.querySelector("header > div")
let prevY = window.scrollY;
window.addEventListener("scroll", function( ){
    if(prevY > window.scrollY){
        div.classList.remove("off");
       
      
    } else{
        div.classList.add("off");
     
        
    }
if(window.scrollY > 900){
    div.classList.add("solid");

}else{
    div.classList.remove("solid");
}

prevY = window.scrollY;


});

