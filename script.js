//se crea numero al azar
let numAleatorio = Math.floor(Math.random() * 100) + 1

const contenedorModal = document.querySelector('.contenedor-modal')
const modal = document.querySelector('.modal')
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

alert("Tienes 10 intentos")

//funcion para revisar el numero introducido
function checarResultado() {
    let numeroIngresado = parseInt(numeroEntrada.value)
    intentos++
    intento.textContent = intentos
    
    if(intentos < 10){
           
        //se valida que solo sean numeros del 1 al 100
        if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
            mensaje.textContent = 'Introduce un numero entre 1 y 100'
            mensaje.style.color = 'red'
            return
        }

        //se compara el numero aleatorio con el ingresado
        if (numeroIngresado === numAleatorio) {
            winner()
            numeroEntrada.disable = true
        } else if (numeroIngresado < numAleatorio) {
            mensaje.textContent = 'El numero es mayor al que pusiste'
            mensaje.style.color = 'red'
        } else {
            mensaje.textContent = 'El numero es menor al que pusiste'
            mensaje.style.color = 'red'
        }
    }else if(intentos === 10){
        //lanzar funcion aqui cuando el jugador termina sus 10 intentos
        //alert("game over");
        gameOver()
    }else{
      //gameOver()
    }

}
//funcion cuando pierde el jugador
function gameOver() {
  contenedorModal.style.visibility = "visible"
  modal.style.visibility = "visible"

  const img = document.querySelector('.img-modal')
  img.src = "/assets/icons/juego-terminado.png"

  const titulo = document.querySelector('.titulo-modal')
  titulo.textContent = "¡Perdiste!"

  const mens = document.querySelector('.mensaje-modal')
  mens.textContent = "Lo sentimos, intenta de nuevo."
}
//funcion cuando el jugador gana
function winner() {
  contenedorModal.style.visibility = "visible"
  modal.style.visibility = "visible"

  const img = document.querySelector('.img-modal')
  img.src = "/assets/icons/trofeo.png"

  const titulo = document.querySelector('.titulo-modal')
  titulo.textContent = "¡Ganaste!"

  const mens = document.querySelector('.mensaje-modal')
  mens.textContent = "Bien hecho, adivinaste el numero."
}