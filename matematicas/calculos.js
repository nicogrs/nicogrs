const vdistpuntos = document.querySelectorAll("#distpts input");
const caldist = document.querySelector("#distpts button");

caldist.addEventListener("click", () => {
    let x1 = vdistpuntos[0].value ;
    let y1 = vdistpuntos[1].value ;
    let x2 = vdistpuntos[2].value ;
    let y2 = vdistpuntos[3].value ;
    let resultado = document.createElement('P');
    convertir(x1,x2,y1,y2);
    try {
        let formdist = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        if (isNaN(formdist)){
            resultado.textContent = `No se pudo realizar la formula, compruebe los valores`
        } else{
            resultado.textContent = `El resultado es ${formdist}`;
        }
    } catch (error) {
        console.log(error);
    }

    distPuntos.appendChild(resultado);
    caldist.addEventListener("click",() =>{
        distPuntos.removeChild(resultado);
    })
})

function convertir(x1,x2,x3,x4) {
    if (x1.includes('/') ) {
        let dividir = x1.split('/');
        x1 = dividir[0] / dividir[1];
    }else if (x2.includes('/') ) {
        let dividir = x2.split('/');
        x2 = dividir[0] / dividir[1];
    }else if (x3.includes('/') ) {
            let dividir = x3.split('/');
            x3 = dividir[0] / dividir[1];
    }else if (x4.includes('/') ) {
        let dividir = x4.split('/');
        x4 = dividir[0] / dividir[1];
    }
}
 console.log(x1)