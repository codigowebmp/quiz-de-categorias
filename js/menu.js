//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");

nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");


//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//Vamos a necesitar una estructura para guardar las categorías ya jugadas
let categoriasJugadas;
//controlo si ya hay algo cargado en el localstorage cuando vuelvo de
//jugar (osea de juego.html) para cargar las categorías ya jugadas
const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
if(categoriasJugadasLS){
    categoriasJugadas = categoriasJugadasLS;
}else{//comienzo un arreglo vacío, todavía no hay ninguna categoría
    categoriasJugadas = [];
}
console.log(categoriasJugadas);

//Agrego un event listener click a todas las opciones de categoria
function agregarEventListenerOpciones(){
    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria=>{
        categoria.addEventListener("click", (e)=>{
            console.log(e.currentTarget.id);
            //almaceno la categorìa que se eligiò en el Local Storage
            localStorage.setItem("categoria-actual", e.currentTarget.id);
            //Agrego al arreglo la categoría
            categoriasJugadas.push(e.currentTarget.id);
            localStorage.setItem("categorias-jugadas", JSON.stringify(categoriasJugadas));
            console.log(categoriasJugadas);
            //re dirijo a la pàgina del juego
            location.href = "juego.html";
        });
    });

    //desabilito las categorías que ya se jugaron
    categorias.forEach(categoria =>{
        if(categoriasJugadas.includes(categoria.id)){
            categoria.classList.add("desabilitada");
            categoria.classList.add("no-events");
        }
    })
}
agregarEventListenerOpciones();