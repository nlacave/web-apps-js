import { generarChispas } from './sparkFunctions.js';
import { interval } from './progressBarFunctions.js';
import { fadeOut } from './imagen.js';
import { manipularAudio, cambiarMusica } from './audio.js';
import { valoresIniciales, comprobar, reiniciarJuego} from './logica.js';
const counter = document.getElementById('counter');
const timeBar = document.querySelector('.time-bar');
const barProgress = document.getElementById('bar-progress');
//Cargar chispas al recargar página
document.addEventListener("DOMContentLoaded", function(){
    generarChispas(6);
})

barProgress.style.visibility = 'hidden';
timeBar.style.visibility = 'hidden';
counter.style.visibility = 'hidden';

//Valores iniciales por defecto
const audioElement = document.getElementById("background-audio");
const imageAudioElement = document.getElementById('boton-audio');
const bodyElement = document.querySelector('body');

imageAudioElement.addEventListener('click', manipularAudio);
const jugar = () => {
    valoresIniciales();
    fadeOut();
    cambiarMusica();
    imageAudioElement.src = 'img/audio.png';
    audioElement.play();
    //bodyElement.style.setProperty('background', 'linear-gradient(to bottom, green, yellow)', 'important');7
    interval();
}

const juego = document.getElementById('boton-jugar');
juego.addEventListener('click', jugar);
