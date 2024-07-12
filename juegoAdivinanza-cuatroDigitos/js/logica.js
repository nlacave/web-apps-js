import { ocultarIntervalos } from "./imagen";
import { generarChispas } from "./sparkFunctions";

let entrada1 = document.getElementById("numeroEntrada1");
let entrada2 = document.getElementById("numeroEntrada2");
let entrada3 = document.getElementById("numeroEntrada3");
let entrada4 = document.getElementById("numeroEntrada4");
let reload = document.getElementById("comprobar");
let mensaje = document.getElementById("mensaje");
let intentos = document.getElementById("intentos");
let entrada = entrada1.value.concat(entrada2.value, entrada3.value, entrada4.value);
let contadorIntentos;
let juegoGanado;
let numeroRandom1, numeroRandom2, numeroRandom3, numeroRandom4, numeroRandom;

export const cargarValoresIniciales = () => {
        generarChispas(6);
        ocultarIntervalos();
        numeroRandom1 = Math.trunc(Math.random() * 10);
        numeroRandom2 = Math.trunc(Math.random() * 10);
        numeroRandom3 = Math.trunc(Math.random() * 10);
        numeroRandom4 = Math.trunc(Math.random() * 10);
        numeroRandom = numeroRandom1.toString() + numeroRandom2.toString() + numeroRandom3.toString() + numeroRandom4.toString();
        contadorIntentos = 0;
        juegoGanado = false;
        intentos.textContent = contadorIntentos;
        mensaje.textContent = "A jugar!";
    }

//Comprobar si el valor ingresado es válido
export const comprobar = () => {
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

//Función para volver a comenzar desde cero el juego
export const reiniciarJuego = () => {
    let numeroRandom1 = Math.trunc(Math.random() * 10);
    let numeroRandom2 = Math.trunc(Math.random() * 10);
    let numeroRandom3 = Math.trunc(Math.random() * 10);
    let numeroRandom4 = Math.trunc(Math.random() * 10);
    let numeroRandom = numeroRandom1.toString() + numeroRandom2.toString() + numeroRandom3.toString() + numeroRandom4.toString();
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

