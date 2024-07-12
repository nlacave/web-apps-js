import { interval } from './progressBarFunctions.js';
import { cambiarPantalla, definirIntervalos } from './imagen.js';
import { manipularAudio, cambiarMusica } from './audio.js';
import { cargarValoresIniciales, comprobar, reiniciarJuego } from './logica.js';

const jugar = () => {
    cambiarPantalla();
    cambiarMusica();
    interval();
}

document.addEventListener("DOMContentLoaded", function(){
    cargarValoresIniciales();
});

const juego = document.getElementById('boton-jugar');
juego.addEventListener('click', jugar);

const sonido = document.getElementById('boton-audio');
sonido.addEventListener('click', manipularAudio);
