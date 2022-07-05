const body = document.body;
const menuTrigger = document.querySelector(".menu-trigger");
const menu = document.querySelector(".menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

menuTrigger.addEventListener("click", () => {
    menu.classList.toggle("menu")
    menu.classList.toggle("menu2")
    if (body.style.overflow == 'hidden'){
        body.style.removeProperty('overflow'); 
    } else{
        body.style.setProperty('overflow','hidden');
    }
    window.scroll(0, 0)
    menuTrigger.classList.add("ocultar")
})

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll == 0) {
        if (menu.classList.contains("menu")){
            menuTrigger.classList.add("ocultar");
        } else if(menu.classList.contains("menu2")){
            menuTrigger.classList.remove("ocultar")
        }
        menu.classList.remove("ocultar");
    }

    if (currentScroll > 30) {
        menuTrigger.classList.remove("ocultar");
        menu.classList.add("ocultar");
    }
})

