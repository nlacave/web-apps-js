var nombre = 'Pedro';

nombre = 'Sergie Code';

const plataforma = 'Disponible en youtube';

let array = [1, 2, 3, 4, "string"];

const date = new Date("06-24-2024");

let a = "5.5";
let b = 5;
let c = parseFloat(a) + b;

console.log(array);
console.log(date);
console.log(c)

function suma(num, num2){
    return parseFloat(num) + parseFloat(num2)
}

let sum = suma(a, b)
console.log(sum)

const sumaFlecha = (num, num2) => parseFloat(a) + parseFloat(b);

console.log(sumaFlecha(a, b))

let empleado = {
    nombre: "Nicolas",
    apellido: "Lacave",
    empresa: "Belltech",
    darSoporte: function(){
        return "dando soporte de NICE...";
    }
}

console.log("El empleado", empleado.nombre, empleado.apellido, "se encuentra", empleado.darSoporte())

mostrarFecha = () => document.getElementById("demostracion").innerHTML = Date();

textoOriginal = () => document.getElementById("demostracion").innerHTML = "Este texto será transformado por JS";

let texto = "La educación es importante ";
let texto1 = "en Argentina";
resultado = texto.concat(texto1);
console.log(resultado);

resultado2 = texto.trim(texto).concat(" ", texto1);
console.log(resultado2);

texto2 = texto.slice(0, 12);
texto3 = texto2.concat(" ", texto1, " no es importante para todos");
console.log(texto3);
texto2 = texto1.slice(-9, texto1.length);
texto3 = texto2.concat(" ", "es mi pais de origen");
console.log(texto3);
resultado = texto3.replace('Argentina', 'Francia');
console.log(resultado);
resultado = resultado.toUpperCase();
console.log(resultado);
resultado = resultado.toLowerCase();
console.log(resultado);
resultado = resultado.split(" ");
console.log(resultado);

arr = ["ricardo","barba", "zapato", "gabriel"];
arr.sort();
console.log(arr);
arr.splice(0, 1, "nicolas", "esteban", "pablo");
console.log(arr);
arr.splice(arr.length - 1, 1, "pablo");
console.log(arr);
const resultado1 = arr.filter(x => x == "pablo");
console.log(resultado1);