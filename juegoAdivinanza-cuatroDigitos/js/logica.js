import { ocultarIntervalos, pantallaGameOver, pantallaJuego, pantallaJuegoGanado } from "./imagen.js";
import { generarChispas } from "./sparkFunctions.js";
import { interval } from "./progressBarFunctions.js";
import { cambiarMusica } from "./audio.js";

let percentContador = 31;
let percent = 30;
let entrada1 = document.getElementById("numeroEntrada1");
let entrada2 = document.getElementById("numeroEntrada2");
let entrada3 = document.getElementById("numeroEntrada3");
let entrada4 = document.getElementById("numeroEntrada4");
let mensaje = document.getElementById("mensaje");
let intentos = document.getElementById("intentos");
let entrada = entrada1.value.concat(entrada2.value, entrada3.value, entrada4.value);
let contadorIntentos;
export let juegoTerminado;
export let juegoGanado;
let numeroRandom1, numeroRandom2, numeroRandom3, numeroRandom4, numeroRandom;

export const cargarValoresIniciales = () => {
        generarChispas(6);
        ocultarIntervalos();
        numeroRandom1 = Math.trunc(Math.random() * 10);
        numeroRandom2 = Math.trunc(Math.random() * 10);
        numeroRandom3 = Math.trunc(Math.random() * 10);
        numeroRandom4 = Math.trunc(Math.random() * 10);
        numeroRandom = numeroRandom1.toString() + numeroRandom2.toString() + numeroRandom3.toString() + numeroRandom4.toString();
        console.log(numeroRandom);
        contadorIntentos = 10;
        juegoGanado = false;
        juegoTerminado = false;
        intentos.textContent = contadorIntentos;
        mensaje.style.color = 'black';
        mensaje.textContent = "A jugar!";
    }

//Comprobar si el valor ingresado es válido
export const comprobar = () => {
    let entradas = [entrada1.value, entrada2.value, entrada3.value, entrada4.value];

    if (entradas.some(e => e === "" || isNaN(e))) {
        alert("Los datos ingresados son erróneos. Vuelve a intentarlo.");
        return;
    }

    if (!juegoTerminado) {
        entrada = entrada1.value + entrada2.value + entrada3.value + entrada4.value;
        let setEntrada = Array.from(new Set(entrada)).join("");
        let coincidencias = 0;
        let coincidenciasExactas = 0;
        contadorIntentos--;
        intentos.textContent = contadorIntentos;
        if (entrada == numeroRandom && contadorIntentos > 0 && percentContador >= 0) {
            pantallaJuegoGanado();
            juegoGanado = true;
            juegoTerminado = true;
        } else if(entrada != numeroRandom && contadorIntentos > 0 && percentContador >= 0) {
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
            mensaje.style.color = 'red';
            mensaje.textContent = `¡Error! Valores encontrados: ${coincidencias} / En la posicion correcta: ${coincidenciasExactas}`;
        } else if(entrada != numeroRandom && contadorIntentos == 0) {
            pantallaGameOver();
            juegoTerminado = true;
        }
    }
}

//Función para volver a comenzar desde cero el juego
export const reiniciarJuego = () => {
    juegoTerminado = false;
    cargarValoresIniciales();
    pantallaJuego();
    cambiarMusica();
    interval(percentContador, percent);
}