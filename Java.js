var nombre = document.getElementById('nombre');
var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color = 'red';

function EnviarFormulario() {
    console.log('Enviado Formulario...');

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa Tu Nombre');
    }

    if(password.value === null || password.value === ''){
        mensajesError.push('Ingresa Tu Password');
        
    }
    error.innerHTML =   mensajesError.join(', ');
    

    return false;
}