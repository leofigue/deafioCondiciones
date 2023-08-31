//RECUPERA ELEMNTOS DEL DOM
const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const valor3 = document.querySelector("#valor3");
const mensaje = document.querySelector(".mensaje");
const pMensaje = document.querySelector("#pMensaje");
const botonIngresar = document.querySelector("#botonIngresar");

//VARIABLES
const keyframes = [
    {opacity: "0", backgroundColor:"white", offset: 0},
    {opacity: "0.5", backgroundColor:"white", offset: 0.10},
    {opacity: "1", backgroundColor:"white", offset: 0.20},
    {opacity: "0.8", backgroundColor:"white", offset: 0.60},
    {opacity: "0", backgroundColor:"white", offset: 0.90}
    ];

const options = {
    easing: "linear",
    iterations: 1,
    duration: 8000
};

var animacion = pMensaje.animate(keyframes, options);

//METODOS
function validar(){
    animacion.finish();
    const clave=valor1.value + valor2.value + valor3.value;
    pMensaje.style.fontWeight='bold';
    pMensaje.style.backgroundColor="white";
    pMensaje.style.padding="5px 15px"; 
    if(clave==='911'){
        pMensaje.style.color='green';
        pMensaje.innerText='password 1 correcto';
    }
    else if(clave==='714'){
        pMensaje.style.color='green';
        pMensaje.innerText='password 2 es correcto';
    }
    else
    {
        pMensaje.style.color='red';
        pMensaje.innerText='password incorrecto';
    }
    animacion.play();

}

//************************************************************* */
//**** PRUEBAS Y RECORDATORIO PARA FUTURAS EVALUACIONES ******* */
//************************************************************* */
//mensaje.setAttribute('class','mensaje');
//mensaje.setAttribute('class','animarMensaje');
//animacion.cancel();
//botonIngresar.disabled = true;
//botonIngresar.setAttribute('class','btnDisabled');

// animacion.finished.then(() => {
//     pMensaje.innerText='';
//     pMensaje.style.padding="0";
//     botonIngresar.disabled = false;
//     botonIngresar.setAttribute('class','btn');
// });