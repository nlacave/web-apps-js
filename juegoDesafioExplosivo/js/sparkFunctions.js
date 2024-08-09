//Función para generar chispas de fuego
export const generarChispas = (cantidad) => {
    const explosionContainer = document.querySelector('.explosion-container');

    // Generar la mitad de las chispas para el lado izquierdo
    for (let i = 0; i < cantidad / 2; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');

        // Establece una posición horizontal aleatoria centrada en el lado izquierdo
        let randomValue = Math.random() * 0.3; // Valor entre 0 y 0.3
        let leftPosition = 50 - (randomValue * 100); // Centro en 50%
        spark.style.left = `${leftPosition}%`;

        // Añade un retraso aleatorio para la animación
        spark.style.animationDelay = `${Math.random() * 2}s`;

        //Agregar la chispa al contenedor
        explosionContainer.appendChild(spark);

        // Elimina la chispa después de que termine la animación
        spark.addEventListener('animationend', () => {
            spark.remove();
        });
    }

    // Generar la mitad de las chispas para el lado derecho
    for (let i = 0; i < cantidad / 2; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');

        // Establece una posición horizontal aleatoria centrada en el lado derecho
        let randomValue = Math.random() * 0.3; // Valor entre 0 y 0.3
        let rightPosition = 50 + (randomValue * 100); // Centro en 50%
        spark.style.left = `${rightPosition}%`;

        // Añade un retraso aleatorio para la animación
        spark.style.animationDelay = `${Math.random() * 2}s`;

        explosionContainer.appendChild(spark);

        // Elimina la chispa después de que termine la animación
        spark.addEventListener('animationend', () => {
            spark.remove();
        });
    }
}
