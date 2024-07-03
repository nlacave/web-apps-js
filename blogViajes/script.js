import { barcelona, roma, paris, londres} from "./ciudades.js";

let elementos = document.querySelectorAll("a");

elementos.forEach(elemento => {
    elemento.addEventListener("click", function(){
        elementos.forEach(elemento => {
            elemento.classList.remove("active");
        })
        this.classList.add("active");

        const ciudad = obtenerElemento(elemento.textContent);

        let elementoTitulo = document.getElementById("titulo");
        let elementoSubtitulo = document.getElementById("subtitulo");
        let elementoParrafo = document.getElementById("parrafo");
        let elementoPrecio = document.getElementById("precio");

        elementoTitulo.innerHTML = ciudad.titulo;
        elementoSubtitulo.innerHTML = ciudad.subtitulo;
        elementoParrafo.innerHTML = ciudad.parrafo;
        elementoPrecio.innerHTML = `<h3>${ciudad.precio}</h3>`;
    })
})

const obtenerElemento = (elemento) => {
    const ciudades = {
        "Barcelona": barcelona,
        "Roma": roma,
        "París": paris,
        "Londres": londres,
    };

    return ciudades[elemento];
}