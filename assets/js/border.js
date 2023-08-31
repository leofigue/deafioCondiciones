//RECUPERA ELEMNTOS DEL DOM
var objImagen = document.querySelector('#imagen');

//METODOS
function borde(){
    if(objImagen.style.border==='2px solid red'){
      objImagen.style.border='0';
    }
    else{
      objImagen.style.border='2px solid red';
    }
}

