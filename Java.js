var nombre = document.getElementById('nombre');
var password = document.getElementById('password');
var rut = document.getElementById('rut');
var materno = document.getElementById('materno');
var paterno = document.getElementById('paterno');
var edad = document.getElementById('edad');
var error = document.getElementById('error');
error.style.color = 'red';

function EnviarFormulario() {
    console.log('Enviado Formulario...');

    var mensajesError = [];

    if(rut.value === null || rut.value === ''){
        mensajesError.push('Ingresa Tu rut');
    }


    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa Tu Nombre');
    }

    if(materno.value === null || materno.value === ''){
        mensajesError.push('Ingresa Tu Apellido Materno');
    }

    if(paterno.value === null || paterno.value === ''){
        mensajesError.push('Ingresa Tu Apellido Paterno');
    }

    if(edad.value <=18){
        mensajesError.push('tienes menos de 18 años');
    }

    if(edad.value >=35){
        mensajesError.push('tienes menos de 35 años');
    }

    if(password.value === null || password.value === ''){
        mensajesError.push('Ingresa Tu Password');
        
    }
    error.innerHTML =   mensajesError.join(', ');
    

    return false;
}