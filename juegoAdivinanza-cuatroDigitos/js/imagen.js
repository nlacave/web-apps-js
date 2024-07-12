const explosionElement = document.getElementById('explosion');
const botonElement = document.getElementById('boton-jugar');
const tituloElement = document.querySelector("h1");
const subtituloElement = document.querySelector('h2');
const counter = document.getElementById('counter');
const timeBar = document.querySelector('.time-bar');
const barProgress = document.getElementById('bar-progress');
const explosionDiv = document.querySelector('.explosion-container')

//Función para hacer desaparecer elementos
export const fadeOut = () => {
    const hoverText = botonElement.getAttribute('data-hover-text');
    botonElement.textContent = hoverText;
    tituloElement.classList.add('fade-out');
    subtituloElement.classList.add('fade-out');
    explosionElement.classList.add('fade-out');
    botonElement.classList.add('fade-out');
    botonElement.style.pointerEvents = 'none';
    tituloElement.style.pointerEvents = 'none';
    subtituloElement.style.pointerEvents = 'none';
    botonElement.style.backgroundColor = "rgb(119, 7, 7)";
    setTimeout(() => {
        tituloElement.style.visibility = 'hidden';
        botonElement.style.visibility = 'hidden';
        subtituloElement.style.visibility = 'hidden';
        explosionDiv.style.visibility = 'hidden';
        counter.style.visibility = 'visible';
        timeBar.style.visibility = 'visible';
        barProgress.style.visibility = 'visible';
      }, 2000);
}
