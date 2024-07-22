import { interval } from './progressBarFunctions.js';
import { pantallaJuego } from './imagen.js';
import { manipularAudio, cambiarMusica } from './audio.js';
import { cargarValoresIniciales, comprobar } from './logica.js';

const jugar = () => {
    pantallaJuego();
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

const comprobacion = document.getElementById('comprobar');
comprobacion.addEventListener('click', comprobar);