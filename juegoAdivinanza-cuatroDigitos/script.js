document.addEventListener("DOMContentLoaded", function(){
    generarChispas(10);
})

function generarChispas(cantidad) {
    const explosionContainer = document.querySelector('.explosion-container');

    // Define las posiciones horizontales fijas para cada chispa
    const positions = ['10%', '30%', '50%', '70%', '90%'];

    for (let i = 0; i < cantidad; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');
        
        // Establece la posición horizontal fija para cada chispa
        spark.style.left = positions[i % positions.length]; // Cicla a través de las posiciones

        explosionContainer.appendChild(spark);

        // Elimina la chispa después de que termine la animación
        spark.addEventListener('animationend', () => {
            spark.remove();
        });
    }
}

const audioElement = document.getElementById("background-audio");
audioElement.volume = 0.5;
let numeroRandom1 = Math.trunc(Math.random() * 10);
let numeroRandom2 = Math.trunc(Math.random() * 10);
let numeroRandom3 = Math.trunc(Math.random() * 10);
let numeroRandom4 = Math.trunc(Math.random() * 10);
let entrada1 = document.getElementById("numeroEntrada1");
let entrada2 = document.getElementById("numeroEntrada2");
let entrada3 = document.getElementById("numeroEntrada3");
let entrada4 = document.getElementById("numeroEntrada4");
let entrada;
let numeroRandom = numeroRandom1.toString() + numeroRandom2.toString() + numeroRandom3.toString() + numeroRandom4.toString();
let reload = document.getElementById("comprobar");
let mensaje = document.getElementById("mensaje");
let intentos = document.getElementById("intentos");
console.log(numeroRandom);
let contadorIntentos = 0;
let juegoGanado = false;
intentos.textContent = contadorIntentos;
mensaje.textContent = "A jugar!";

const comprobar = () => {
    let entradas = [entrada1.value, entrada2.value, entrada3.value, entrada4.value];

    if (entradas.some(e => e === "" || isNaN(e))) {
        alert("Los datos ingresados son erróneos. Vuelve a intentarlo.");
        return;
    }

    if (!juegoGanado) {
        entrada = entrada1.value + entrada2.value + entrada3.value + entrada4.value;
        let setEntrada = Array.from(new Set(entrada)).join("");
        let coincidencias = 0;
        let coincidenciasExactas = 0;
        contadorIntentos++;
        intentos.textContent = contadorIntentos;
        mensaje.style.color = "red";
        if (entrada == numeroRandom) {
            mensaje.textContent = "¡Felicitaciones! Has adivinado el número.";
            mensaje.style.color = "green";
            juegoGanado = true;
            reload.textContent = "Volver a jugar.";
        } else {
            for (let i = 0; i < setEntrada.length; i++) {
                if (numeroRandom.includes(setEntrada[i])) {
                    coincidencias++;
                }
            }
            for(let j = 0; j < numeroRandom.length; j++) {
                if (entrada[j] == numeroRandom[j]) {
                    coincidenciasExactas++;
                }
            }
            mensaje.innerHTML = `<p>¡Qué lástima! No has adivinado. Vuelve a intentarlo.</p>
                                         <p>Valores que se encontraron: ${coincidencias}</p>
                                         <p>Coincidencias exactas: ${coincidenciasExactas}</p>`;
        }
    } else {
        reiniciarJuego();
    }
}

const reiniciarJuego = () => {
    numeroRandom1 = Math.trunc(Math.random() * 10);
    numeroRandom2 = Math.trunc(Math.random() * 10);
    numeroRandom3 = Math.trunc(Math.random() * 10);
    numeroRandom4 = Math.trunc(Math.random() * 10);
    numeroRandom = numeroRandom1.toString() + numeroRandom2.toString() + numeroRandom3.toString() + numeroRandom4.toString();
    console.log(numeroRandom);
    entrada1.value = "";
    entrada2.value = "";
    entrada3.value = "";
    entrada4.value = "";
    mensaje.innerHTML = "¡A jugar!";
    reload.innerHTML = "Comprobar";
    contadorIntentos = 0;
    intentos.textContent = contadorIntentos;
    juegoGanado = false;
}

const manipularAudio = () => {
    const imageElement = document.getElementById('boton-audio');
    if (imageElement.src.includes('img/sin-audio.png')) {
        imageElement.src = 'img/audio.png';
        audioElement.play();
    } else {
        imageElement.src = 'img/sin-audio.png';
        audioElement.pause();
    }
}