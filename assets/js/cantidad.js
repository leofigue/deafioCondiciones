//RECUPERA ELEMNTOS DEL DOM
const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const valor3 = document.querySelector("#valor3");
const mensaje = document.querySelector(".mensaje");
const imgCel1 = document.querySelector("#imgCel1");
const imgCel2 = document.querySelector("#imgCel2");
const imgCel3 = document.querySelector("#imgCel3");

//VARIABLES
const animaMensaje = mensaje.animate(
                                    [
                                        //KEYFRAMES QUE DETERMINAN LOS CAMBIOS
                                        {//transform: "TranslateY(0)",
                                         opacity:"0",
                                         offset: 0
                                        },
                                        {//transform: "TranslateY(0)",
                                            opacity:"0.5",
                                            offset: 0.10
                                           },
                                        {//transform: "TranslateY(10px)",
                                         opacity:"1",
                                         offset: 0.20
                                        },
                                        {//transform: "TranslateY(10px)",
                                            opacity:"1",
                                            offset: 0.60
                                           },
                                        {//transform: "TranslateY(10px)",
                                            opacity:"0",
                                            offset: 0.95
                                        }
                                    ],
                                    {
                                        //PROPIEDADES
                                        easing: "ease-in-out",
                                        iterations: 1,
                                        duration: 10000,
                                        fill: "both"
                                    });

const keyframesImg = [
                    {scale:"1"},
                    {scale:"1.1"},
                    {scale:"1"}
                  ];
    
const optionsImg = {
    duration: 2000,
    iterations: 1,
    easing: "linear",
    };                                    

const animaImg1Focus = imgCel1.animate(keyframesImg, optionsImg);
const animaImg2Focus = imgCel2.animate(keyframesImg, optionsImg); 
const animaImg3Focus = imgCel3.animate(keyframesImg, optionsImg);                                                                                

//METODOS
function validar(){
    animaMensaje.finish();
    let cantidad = Number(valor1.value) + Number(valor2.value) + Number(valor3.value);
    mensaje.style.backgroundColor="white";
    mensaje.style.fontWeight = "bold";
    if(Number(cantidad)==0){
        mensaje.innerHTML="Debes comprar al menos un celular";
        mensaje.style.color = "black";
    }
    else if(Number(cantidad)==1){
        mensaje.innerHTML="llevas: " + cantidad + " celular";
        mensaje.style.color = "green";
    }
    else if(Number(cantidad)<=10){
        mensaje.innerHTML = "llevas: " + cantidad + " celulares";
        mensaje.style.color = "green";
    }
    else{
        mensaje.innerHTML = "Puedes comprar un máximo de 10 celulares."
        mensaje.style.color = "red";
   }
    animaMensaje.play();
}

function evitarPunto(){
    var tecla = event.key;
    if (['.','e'].includes(tecla))
        event.preventDefault()
}

