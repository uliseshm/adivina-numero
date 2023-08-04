//se crea numero al azar
let numAleatorio = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

//funcion para revisar el numero introducido
function checarResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)
    intentos++
    intento.textContent = intentos

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Introduce un numero entre 1 y 100'
        mensaje.style.color = 'red'
        return
    }

    if(numeroIngresado === numAleatorio){
        mensaje.textContent = 'Felicidades, adivinaste el numero'
        mensaje.style.color = 'green'
        numeroEntrada.disable = true
    }else if(numeroIngresado < numAleatorio){
        mensaje.textContent = 'El numero es mayor al que pusiste'
        mensaje.style.color = 'red'
    }else {
        mensaje.textContent = 'El numero es menor al que pusiste'
        mensaje.style.color = 'red' 
    }
}