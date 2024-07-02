import {barcelona, roma, paris, londres} from "./ciudades.js";

let ciudades = {barcelona, roma, paris, londres}

globalThis.mostrarInfo = (event) => {
    const idCiudad = event.currentTarget.id;
    if(ciudades.hasOwnProperty(idCiudad)) {
        const ciudad = ciudades[idCiudad];
        document.getElementById("titulo").innerText = ciudad.titulo;
        document.getElementById("subtitulo").innerText = ciudad.subtitulo;
        document.getElementById("parrafo").innerText = ciudad.parrafo;
    } else {
        console.error("Ciudad no encontrada:", idCiudad);
    }
}

