const datos = {
   nombre: '',
   correo: '',
   telefono: '',
   mensaje: ''
}

const navToggle = document.querySelector(".navbar-toggler")
const navMenu = document.querySelector(".barra-nav")
const barraNav = document.querySelectorAll('.barra-nav a')
const nombre = document.querySelector('#nombre')
const correo = document.querySelector('#correo')
const telefono = document.querySelector('#telefono')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')
const alertaSuccess = document.querySelector('#success')
const alertaDanger = document.querySelector('#danger')
nombre.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// -------> Boton de cerrar y abrir menu
navToggle.addEventListener("click", () => {
   navMenu.classList.toggle("nav-menu_visible")
   if (navMenu.classList.contains("nav-menu_visible")) {
      navToggle.setAttribute("aria-label", "Cerrar menu");
   } else {
      navToggle.setAttribute("aria-label", "Abrir menu");
   }
})
// ----> Hace que cierre el menu si toco uno de los links
barraNav.forEach(element => {
   element.addEventListener('click', () => {
      navMenu.classList.toggle('nav-menu_visible')
   })
});

// -------> Evento de submit
formulario.addEventListener('submit', function(evento) {
   evento.preventDefault();
   const { nombre, correo, telefono, mensaje } = datos;

   if (nombre === '' || correo === '' || telefono == '' || mensaje === '') {
      mostrarAlerta(true);
      return;
   }
   mostrarAlerta(false);
   console.log('Enviando Formulario')
});

function leerTexto(e) {
   datos[e.target.id] = e.target.value;
}

// -------> Muestra una alerta

function mostrarAlerta(error) {
   if (error) {
         alertaDanger.classList.toggle("ocultar")
         setTimeout(() => {
            alertaDanger.classList.toggle("ocultar")
         }, 4000)
   } else {
         alertaSuccess.classList.toggle("ocultar")
         setTimeout(() => {
            alertaSuccess.classList.toggle("ocultar")
         }, 4000)
   }

}
