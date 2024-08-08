import { ocultarIntervalos, pantallaGameOver, pantallaJuegoGanado, pantallaReinicio } from "./imagen.js";
import { interval, percentContador } from "./progressBarFunctions.js";
import { cambiarMusica } from "./audio.js";
import { generarChispas } from "./sparkFunctions.js";

let entrada1 = document.getElementById("numeroEntrada1");
let entrada2 = document.getElementById("numeroEntrada2");
let entrada3 = document.getElementById("numeroEntrada3");
let entrada4 = document.getElementById("numeroEntrada4");
let mensaje = document.getElementById("mensaje");
let intentos = document.getElementById("intentos");
export let entrada = entrada1.value.concat(entrada2.value, entrada3.value, entrada4.value);
export let contadorIntentos;
export let juegoGanado;
export let juegoTerminado;
export let juegoPerdido;

let numeroRandom1, numeroRandom2, numeroRandom3, numeroRandom4, numeroRandom;
let mapaRepetidos;
let repetidos;

export const cargarValoresIniciales = () => {
        ocultarIntervalos();
        numeroRandom1 = Math.trunc(Math.random() * 10);
        numeroRandom2 = Math.trunc(Math.random() * 10);
        numeroRandom3 = Math.trunc(Math.random() * 10);
        numeroRandom4 = Math.trunc(Math.random() * 10);
        numeroRandom = numeroRandom1.toString() + numeroRandom2.toString() + numeroRandom3.toString() + numeroRandom4.toString();
        console.log(numeroRandom);
        contadorIntentos = 10;
        juegoGanado = false;
        juegoPerdido = false;
        juegoTerminado = false;
        intentos.textContent = contadorIntentos;
        mensaje.style.color = 'black';
        mensaje.textContent = "A jugar!";
    }

//Comprobar si el valor ingresado es válido
export const comprobar = () => {
    let entradas = [entrada1.value, entrada2.value, entrada3.value, entrada4.value];
    mapaRepetidos = {};
    repetidos = "No";

    if (entradas.some(e => e === "" || isNaN(e))) {
        alert("Los datos ingresados son erróneos. Vuelve a intentarlo.");
        return;
    }

    if (!juegoTerminado) {
        entrada = entrada1.value + entrada2.value + entrada3.value + entrada4.value;
        let setEntrada = Array.from(new Set(entrada)).join("");
        let valores = 0;
        let coincidenciasExactas = 0;
        contadorIntentos--;
        intentos.textContent = contadorIntentos;
        if (entrada == numeroRandom && contadorIntentos > 0 && percentContador >= 0) {
            pantallaJuegoGanado();
            juegoGanado = true;
            juegoPerdido = false;
            juegoTerminado = true;
            cambiarMusica(juegoGanado, juegoPerdido);
        } else if(entrada != numeroRandom && contadorIntentos > 0 && percentContador >= 0) {
            for (let i = 0; i < setEntrada.length; i++) {
                if (numeroRandom.includes(setEntrada[i])) {
                    valores++;
                }
            }

            for (let j = 0; j < numeroRandom.length; j++) {
                if (entrada[j] == numeroRandom[j]) {
                    coincidenciasExactas++;
                }

                if (numeroRandom.includes(entrada[j])) {
                    if (!mapaRepetidos[entrada[j]]) {
                        mapaRepetidos[entrada[j]] = 0;
                    }
                    mapaRepetidos[entrada[j]]++;
                }
            }
            mensaje.style.color = 'red';
            for (let key in mapaRepetidos) {
                if (mapaRepetidos[key] > 1) {
                    repetidos = "Si";
                    break;
                }
            }
            mensaje.textContent = "Error! Encontraste: " + valores + " digitos / En la posicion correcta: " + coincidenciasExactas + " / Repeticiones encontradas: " + repetidos;
        } else if(entrada != numeroRandom && contadorIntentos == 0) {
            pantallaGameOver();
            juegoGanado = false;
            juegoTerminado = true;
            juegoPerdido = true;
            cambiarMusica(juegoGanado, juegoPerdido);
        }
    }
}

//Función para volver a comenzar desde cero el juego
export const reiniciarJuego = () => {
    entrada1.value = ""; entrada2.value = ""; entrada3.value = ""; entrada4.value = "";
    generarChispas(6);
    cargarValoresIniciales();
    pantallaReinicio();
    cambiarMusica();
    interval();
}