let numeroRandom = Math.trunc(Math.random() * 100) + 1;
console.log(numeroRandom);
let entrada = document.getElementById("numeroEntrada");
let reload = document.getElementById("comprobar");
let mensaje = document.getElementById("mensaje");
let intentos = document.getElementById("intentos");
let contadorIntentos = 0;
let juegoGanado = false;
intentos.textContent = contadorIntentos;
mensaje.textContent = "A jugar!";


const comprobar = () => {
    if(!juegoGanado) {
        entrada.value = Math.trunc(entrada.value);
        contadorIntentos++;
        intentos.textContent = contadorIntentos;
        mensaje.style.color = "red";
        if(entrada.value == numeroRandom) {
            mensaje.textContent = "Felicitaciones! Has adivinado el número.";
            mensaje.style.color = "green";
            juegoGanado = true;
            reload.textContent = "Volver a jugar.";
        } else if(entrada.value >= 1 && entrada.value <= 100 && entrada.value != numeroRandom) {
            if(entrada.value < numeroRandom) {
                mensaje.textContent = "Que lastima! El número a adivinar es más alto. Vuelve a intentarlo.";
            } else {
                mensaje.textContent = "Que lastima! El número a adivinar es más bajo. Vuelve a intentarlo.";
        }
    } else {
            mensaje.textContent = "Ingresaste un número fuera de rango o un elemento erroneo. Vuelve a intentarlo.";
        }
    } else if(juegoGanado && reload.onclick) {
        reiniciarJuego();
    }
}

const reiniciarJuego = () => {
    numeroRandom = Math.trunc(Math.random() * 100) + 1;
    console.log(numeroRandom);
    entrada.value = "";
    mensaje.style.color = "black";
    mensaje.innerHTML = "A jugar!";
    reload.innerHTML = "Comprobar";
    contadorIntentos = 0;
    intentos.textContent = contadorIntentos;
    juegoGanado = false;
}