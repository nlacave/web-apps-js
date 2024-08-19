import { interval } from './progressBarFunctions.js';
import {pantallaJuego } from './imagen.js';
import { manipularAudio, cambiarMusica } from './audio.js';
import { cargarValoresIniciales, comprobar, juegoGanado, juegoPerdido, reiniciarJuego } from './logica.js';
import { generarChispas } from './sparkFunctions.js';

const jugar = () => {
    pantallaJuego();
    cambiarMusica(juegoGanado, juegoPerdido);
    interval();
}

document.addEventListener("DOMContentLoaded", function(){
    generarChispas(6);
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