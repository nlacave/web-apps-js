
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
const reiniciarJuego = document.getElementById('reiniciarJuego');

export const ocultarIntervalos = () => {
  barProgress.style.visibility = 'hidden';
  timeBar.style.visibility = 'hidden';
  counter.style.visibility = 'hidden';
  reiniciarJuego.style.visibility = 'hidden';
  reiniciarJuego.style.pointerEvents = 'none';
  reiniciarJuego.classList.add('fade-out');
} 

//Función para hacer desaparecer elementos y hacer aparecer otros
export const pantallaJuego = () => {
    const hoverText = botonElement.getAttribute('data-hover-text');
    botonElement.textContent = hoverText;
    botonElement.style.backgroundColor = "rgb(119, 7, 7)";
    tituloElement.classList.add('fade-out');
    subtituloElement.classList.add('fade-out');
    explosionElement.classList.add('fade-out');
    botonElement.classList.add('fade-out');
    juegoElement.visibility = 'hidden';
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
        juegoElement.style.pointerEvents = 'visible';
      }, 2000);
}

export const pantallaGameOver = () => {
  tituloElement.textContent = 'Game Over'
  tituloElement.style.fontSize = '200px';
  tituloElement.style.opacity = '1';
  tituloElement.style.visibility = 'visible';
  tituloElement.style.pointerEvents = 'visible';
  barProgress.style.opacity = '0';
  counter.classList.add('fade-out');
  counter.style.visibility = 'hidden';
  counter.style.pointerEvents = 'none';
  juegoElement.classList.add('fade-out');
  juegoElement.style.visibility = 'hidden';
  juegoElement.style.pointerEvents = 'none';
  subtituloElement.textContent = '¡Que lastima! No has llegado a tiempo. La bomba ha explotado.';
  subtituloElement.style.opacity = '1';
  subtituloElement.style.visibility = 'visible';
  subtituloElement.style.pointerEvents = 'visible';
  subtituloElement.style.marginTop = '20px';
  subtituloElement.style.fontSize = '60px';
  botonElement.textContent = 'Reintentar';
  botonElement.style.opacity = '1';
  botonElement.style.pointerEvents = 'visible';
  botonElement.style.visibility = 'visible';
  botonAudioElement.style.opacity = '1';
  botonAudioElement.style.visibility = 'visible';
  botonAudioElement.style.pointerEvents = 'visible';
}

export const pantallaJuegoGanado = () => {
  tituloElement.textContent = 'Juego Ganado'
  tituloElement.style.fontSize = '200px';
  tituloElement.style.opacity = '1';
  tituloElement.style.visibility = 'visible';
  tituloElement.style.pointerEvents = 'visible';
  barProgress.style.opacity = '0';
  counter.classList.add('fade-out');
  counter.style.visibility = 'hidden';
  counter.style.pointerEvents = 'none';
  juegoElement.classList.add('fade-out');
  juegoElement.style.visibility = 'hidden';
  juegoElement.style.pointerEvents = 'none';
  subtituloElement.textContent = 'Felicitaciones! Has desactivado la bomba. El mundo te agradece!';
  subtituloElement.style.opacity = '1';
  subtituloElement.style.visibility = 'visible';
  subtituloElement.style.pointerEvents = 'visible';
  subtituloElement.style.marginTop = '20px';
  subtituloElement.style.fontSize = '60px';
  botonElement.textContent = 'Reintentar';
  botonElement.style.opacity = '1';
  botonElement.style.pointerEvents = 'visible';
  botonElement.style.visibility = 'visible';
  botonAudioElement.style.opacity = '1';
  botonAudioElement.style.visibility = 'visible';
  botonAudioElement.style.pointerEvents = 'visible';
  reiniciarJuego.style.opacity = '1';
  reiniciarJuego.style.pointerEvents = 'visible';
  reiniciarJuego.style.visibility = 'visible';
  reiniciarJuego.src = 'img/reiniciarJuego.png';
  reiniciarJuego.classList.remove('fade-out');
}