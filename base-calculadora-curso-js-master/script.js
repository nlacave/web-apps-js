const agregar = (elemento) => document.getElementById("pantalla").value += elemento;

const borrarTodo = () => document.getElementById("pantalla").value = "";

const borrar = () => {
    const vista  = document.getElementById("pantalla");
    vista.value = vista.value.slice(0, -1)
};

const calcular = () => {
    const valorPantalla = document.getElementById("pantalla").value;
    try {
        const resultado = eval(valorPantalla);
        document.getElementById("pantalla").value = resultado;
    } catch (error) {
        document.getElementById("pantalla").value = "Error en la expresión";
    }
}