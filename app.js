let numeroSecreto = 0;
let intentos = 0;
let listaNumeroGenerado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numerDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numerDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numerDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumeroGenerado.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se alcanzó la cantidad máxima de intentos');
    } else {
        if (listaNumeroGenerado.includes(numeroGenerado)) {
            return generarNumSecreto();
        } else {
            listaNumeroGenerado.push(numeroGenerado);
            return numeroGenerado;
        }

    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Ingresa un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumSecreto();
    intentos = 1;
}

//limpiar el campo donde se ingresan los números
//indicar mensaje de intervalo de números
//generar el número aleatorio
//deshabilitar el btn de nuevo juego
//inicializar el número de intentos
function nuevoJuego(){
    limpiarcaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}



condicionesIniciales();
