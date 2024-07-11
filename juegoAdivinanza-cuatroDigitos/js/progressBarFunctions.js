// Obtener la barra de progreso
const progressBar = document.getElementById('bar-progress');// Función para actualizar la barra de progreso

export const updateProgressBar = (percent) => {
    progressBar.style.width = percent + '%';
    // Cambiar de color de verde a rojo según el porcentaje
    if (percent > 50) {
      progressBar.style.backgroundColor = 'green';
    } else if (percent <= 50 && percent >= 30) {
      progressBar.style.backgroundColor = 'yellow'; // Puedes ajustar los colores aquí
    } else  {
      progressBar.style.backgroundColor = 'red';
    }
  }

  export const updateCounter = (percent) => {
    counter.innerHTML = `<h3>${percent}</h3>`
    counter.style.fontSize = '80px';
    counter.style.position = 'relative';
    counter.style.zIndex = '1';
    counter.style.margin = '-120px auto';
  }
  
  export const interval = () => {
    let percent = 100;
    const intervalId = setInterval(() => {
        updateProgressBar(percent);
        updateCounter(percent);
        percent--;
        if (percent < 0) {
            clearInterval(intervalId); // Detener el intervalo cuando el porcentaje sea menor que 0
        }
    }, 1000); // Ajusta el intervalo (en milisegundos) para controlar la velocidad de la animación
};