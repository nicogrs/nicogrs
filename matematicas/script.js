const menu = document.querySelector(".menu");
const boton = document.querySelector("#boton");
const bienvenida = document.querySelector(".bienvenida");
const atras = document.querySelectorAll(".atras");
const calculo = document.querySelector("#calculo");
const algebra = document.querySelector("#algebra");
const fisica = document.querySelector("#fisica");
const geometria = document.querySelector("#geometria");
const calmenu = document.querySelector("#calmenu");
const geomenu = document.querySelector("#geomenu")
const fismenu = document.querySelector("#fismenu")
const algmenu = document.querySelector("#algmenu")
const cerrar = document.querySelector(".cerrar");
const geo = document.querySelectorAll('.geo button');
const distPuntos = document.querySelector("#dist-dos-puntos")

boton.addEventListener("click", aparecer);

atras[0].addEventListener("click", () =>{
    if (bienvenida.classList.contains("aparecer")) {
        aparecer();
    }
})

function aparecer5(){
    algmenu.classList.toggle("aparecer")
    menu.classList.toggle("aparecer")
}


function aparecer4(){
    fismenu.classList.toggle("aparecer")
    menu.classList.toggle("aparecer")
}


function aparecer3(){
    geomenu.classList.toggle("aparecer")
    menu.classList.toggle("aparecer")
}

function aparecer2(){
    calmenu.classList.toggle("aparecer")
    menu.classList.toggle("aparecer")
}

function aparecer(){
    bienvenida.classList.toggle("aparecer")
    menu.classList.toggle("aparecer")
}
algebra.addEventListener("click", aparecer5);

fisica.addEventListener("click", aparecer4);

geometria.addEventListener("click", aparecer3);

calculo.addEventListener("click", aparecer2);

cerrar.addEventListener("click", aparecer2, aparecer3);

geo[0].addEventListener("click", aparecer6);

function aparecer6(){
    geomenu.classList.toggle("aparecer")
    distPuntos.classList.toggle("aparecer")
        atras[1].addEventListener("click", () =>{
            distPuntos.classList.toggle("aparecer")
            geomenu.classList.toggle("aparecer")
})
}