//Función para manipular el audio: pausar y despausar la música
const audioElement = document.getElementById("background-audio");
const imageElement = document.getElementById('boton-audio');

export const manipularAudio = () => {
    if (imageElement.src.includes('img/sin-audio.png')) {
        imageElement.src = 'img/audio.png';
        audioElement.volume = 0.8;
        audioElement.play();
    } else {
        imageElement.src = 'img/sin-audio.png';
        audioElement.pause();
    }
}

export const cambiarMusica = () => {
    audioElement.src = "audios/musica-juego.mp3";
    audioElement.play();
    audioElement.volume = 0.3;
    imageElement.src = 'img/audio.png';
}

