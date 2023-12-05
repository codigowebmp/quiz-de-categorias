//tomo los elementos del html
const nombre = document.querySelector("#nombre");
const btnComenzar = document.querySelector("#comenzar");

//Agrego un event listener clic al botòn comenzar
btnComenzar.addEventListener("click",()=>{
    //seteo los valores del local storage que serán neceasarios en las otras pàginas
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("puntaje-total",0);
    localStorage.removeItem("categorias-jugadas");
    
    //lo redirijo a la parte del menú
    location.href="menu.html";
})