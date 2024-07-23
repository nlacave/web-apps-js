import { pantallaGameOver } from "./imagen.js";
import { juegoGanado } from "./logica.js";

// Obtener la barra de progreso
const progressBar = document.getElementById('bar-progress');

let percent = 30;
let percentContador = 31;

// Función para pintar la barra de progreso en porcentaje dependiendo de la cantidad de segundos actuales.
//En este caso son 158 segundos totales de duración. Para calcular el porcentaje de 0% a 100% es necesario dividir
//el valor del porcentaje actual sobre el porcentaje total y multiplicarlo por 100.
export const updateProgressBar = (percent) => {
    progressBar.style.width = (percent / 30) * 100 + '%';
  }

  //Funcion para actualizar el contador
  export const updateCounter = (percent) => {
    let minutos = Math.floor(percentContador / 60);
    let segundos = percent % 60;
    let minutosFormateados;
    let segundosFormateados;
    if(minutos < 10) {
      minutosFormateados = `0${minutos}`;
    } else {
      minutosFormateados = minutos;
    }
    if(segundos < 10) {
      segundosFormateados = `0${segundos}`;
    } else {
      segundosFormateados = segundos;
    }
  
    counter.innerHTML = `<h3>${minutosFormateados}:${segundosFormateados}</h3>`
    counter.style.fontSize = '80px';
    counter.style.position = 'relative';
    counter.style.zIndex = '1';
    counter.style.margin = '-120px auto';
  }
  
  //Función para establecer el intervalo de duración de la barra de progreso y del contador
  export const interval = () => {
 //158 segundos de duración
    const intervalId = setInterval(() => {
        updateCounter(percentContador);
        updateProgressBar(percent);
        percent--;
        percentContador--;
        if (percentContador < 0 && !juegoGanado) {
            clearInterval(intervalId);
            progressBar.style.width = '0%';
            pantallaGameOver();
        }
    }, 1000); // Ajusta el intervalo (en milisegundos (1000 milisegundos = 1 segundo)) para controlar la velocidad de la animación
    return intervalId;
  };