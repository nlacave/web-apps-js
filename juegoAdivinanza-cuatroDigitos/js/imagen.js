const explosionElement = document.getElementById('explosion');
const botonElement = document.getElementById('boton-jugar');
const tituloElement = document.querySelector("h1");
const subtituloElement = document.querySelector('h2');
const counter = document.getElementById('counter');
const timeBar = document.querySelector('.time-bar');
const barProgress = document.getElementById('bar-progress');
const explosionDiv = document.querySelector('.explosion-container');
const counterContainer = document.getElementById('counter-container');
const botonAudioElement = document.getElementById('boton-audio');
const juegoElement = document.getElementById('juego');
const botonComprobar = document.getElementById('comprobar');

export const ocultarIntervalos = () => {
  barProgress.style.visibility = 'hidden';
  timeBar.style.visibility = 'hidden';
  counter.style.visibility = 'hidden';
} 

//Función para hacer desaparecer elementos y hacer aparecer otros
export const cambiarPantalla = () => {
    const hoverText = botonElement.getAttribute('data-hover-text');
    botonElement.textContent = hoverText;
    botonElement.style.backgroundColor = "rgb(119, 7, 7)";
    tituloElement.classList.add('fade-out');
    subtituloElement.classList.add('fade-out');
    explosionElement.classList.add('fade-out');
    botonElement.classList.add('fade-out');
    botonElement.style.pointerEvents = 'none';
    tituloElement.style.pointerEvents = 'none';
    subtituloElement.style.pointerEvents = 'none';
    explosionElement.style.pointerEvents = 'none';
    setTimeout(() => {
        tituloElement.style.visibility = 'hidden';
        botonElement.style.visibility = 'hidden';
        subtituloElement.style.visibility = 'hidden';
        explosionDiv.style.marginTop = '170px';
        counter.style.visibility = 'visible';
        timeBar.style.visibility = 'visible';
        barProgress.style.visibility = 'visible';
        juegoElement.style.visibility = 'visible';
        counter.style.opacity = '1';
        timeBar.style.opacity = '1';
        juegoElement.style.opacity = '1';
        botonAudioElement.style.marginTop = '44px';
        counterContainer.style.marginTop = '-170px';
        botonComprobar.style.pointerEvents = 'visible';
      }, 2000);
}
