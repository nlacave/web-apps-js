import { ocultarIntervalos, pantallaGameOver, pantallaJuego, pantallaJuegoGanado } from "./imagen.js";
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

    if (entradas.some(e => e === "" || isNaN(e))) {
        alert("Los datos ingresados son erróneos. Vuelve a intentarlo.");
        return;
    }

    if (!juegoTerminado) {
        entrada = entrada1.value + entrada2.value + entrada3.value + entrada4.value;
        let valores = 0;
        let coincidenciasExactas = 0;
        contadorIntentos--;
        intentos.textContent = contadorIntentos;

        if (entrada === numeroRandom && contadorIntentos >= 0 && percentContador >= 0) {
            pantallaJuegoGanado();
            juegoGanado = true;
            juegoPerdido = false;
            juegoTerminado = true;
            cambiarMusica(juegoGanado, juegoPerdido);
        } else if (entrada !== numeroRandom && contadorIntentos > 0 && percentContador >= 0) {
            let mapaEntrada = {};
            let mapaNumeroRandom = {};

            // Contar la frecuencia de cada dígito en entrada y numeroRandom
            for (let i = 0; i < entrada.length; i++) {
                mapaEntrada[entrada[i]] = (mapaEntrada[entrada[i]] || 0) + 1;
                mapaNumeroRandom[numeroRandom[i]] = (mapaNumeroRandom[numeroRandom[i]] || 0) + 1;

                // Contar coincidencias exactas
                if (entrada[i] === numeroRandom[i]) {
                    coincidenciasExactas++;
                }
            }

            // Calcular el número de coincidencias considerando las repeticiones
            for (let digito in mapaEntrada) {
                if (mapaNumeroRandom[digito]) {
                    valores += Math.min(mapaEntrada[digito], mapaNumeroRandom[digito]);
                }
            }
            mensaje.style.color = 'red';
            mensaje.textContent = `Error! Encontraste: ${valores} digitos / En la posicion correcta: ${coincidenciasExactas}`;
        } else if (entrada !== numeroRandom && contadorIntentos === 0) {
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
    cargarValoresIniciales();
    pantallaJuego();
    cambiarMusica();
    interval();
}
