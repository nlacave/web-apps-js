import { interval } from './progressBarFunctions.js';
import { pantallaJuego } from './imagen.js';
import { manipularAudio, cambiarMusica } from './audio.js';
import { cargarValoresIniciales, comprobar, juegoTerminado, reiniciarJuego } from './logica.js';
let intervaloDeJuego;

const jugar = () => {
    pantallaJuego();
    cambiarMusica();
    if (intervaloDeJuego) {
        clearInterval(intervaloDeJuego); // Limpia el intervalo anterior
    }
    intervaloDeJuego = interval();
}


document.addEventListener("DOMContentLoaded", function(){
    cargarValoresIniciales();
});

const juego = document.getElementById('boton-jugar');
juego.addEventListener('click', jugar);

const sonido = document.getElementById('boton-audio');
sonido.addEventListener('click', manipularAudio);

const comprobacion = document.getElementById('comprobar');
comprobacion.addEventListener('click', comprobar);

const reiniciar = document.getElementById('reiniciarJuego');
reiniciar.addEventListener('click', reiniciarJuego);