//Variables

var nombre = 'Pedro'; //Variable sin scope || no recomendable

nombre = 'Sergie Code';

const plataforma = 'Disponible en youtube';

//Arreglos

let array = [1, 2, 3, 4, "string"];


//Fecha
const date = new Date("06-24-2024");

let a = "5.5";
let b = 5;

//Parseo
let c = parseFloat(a) + b;

console.log(array);
console.log(date);
console.log(c)

//Funciones
function suma(num, num2){
    return parseFloat(num) + parseFloat(num2)
}

let sum = suma(a, b)
console.log(sum)

//Función tipo flecha
const sumaFlecha = (num, num2) => parseFloat(a) + parseFloat(b);

console.log(sumaFlecha(a, b))

//Objetos
let empleado = {
    nombre: "Nicolas",
    apellido: "Lacave",
    empresa: "Belltech",
    darSoporte: function(){
        return "dando soporte de NICE...";
    }
}

console.log("El empleado", empleado.nombre, empleado.apellido, "se encuentra", empleado.darSoporte())

//DOM
mostrarFecha = () => document.getElementById("demostracion").innerHTML = Date();

textoOriginal = () => document.getElementById("demostracion").innerHTML = "Este texto será transformado por JS";

//Metodos de arreglos
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


arr = arr.map(x => {
    if(x == "pablo") {
        return "Nancy";
    } else {
        return x;
    }
})
console.log(arr);


arr = arr.fill("leonel", 4);
console.log(arr);


let encontrado = arr.find(x => x == "Nancy");
console.log(encontrado);


existeEnElArray = arr.some(x => x == "pablo");
console.log(existeEnElArray);
existeEnElArray = arr.some(x => x == "gabriel");
console.log(existeEnElArray);

let primeroEnElArray = arr.findIndex(x => x == "leonel");
console.log(primeroEnElArray);

let todosIgualesEnArray = arr.every(x => x == "esteban");
console.log(todosIgualesEnArray);
todosIgualesEnArray = resultado1.every(x => x == "pablo");
console.log(todosIgualesEnArray);

let menosUltimo = arr.pop();
console.log(menosUltimo);
console.log(arr);

let menosPrimero = arr.shift();
console.log(menosPrimero);
console.log(arr);

let masPrimero = arr.unshift("pablo");
console.log(masPrimero);
console.log(arr);

let masUltimo = arr.push("nicolas");
console.log(masUltimo);
console.log(arr);

let join = arr.join(" || ");
console.log(join);

let frutas = ["tomate", "naranja", "manzana"];
let verduras = ["cebolla", "lechuga","zapallo"];

nuevoArrayJoin = frutas.concat(verduras);
console.log(nuevoArrayJoin);

let arregloNums = [1,12,12,13,25,3,2,4,5];
arregloNums.sort((x, y) => x - y);
console.log(arregloNums);

//Metodos de fechas
nuevaFecha = new Date();
console.log(nuevaFecha)

nuevaFecha.setFullYear("2025");
nuevaFecha.setMonth("7");
nuevaFecha.setDate("5");

console.log(nuevaFecha.getDate() + "/" + nuevaFecha.getMonth() + "/" + nuevaFecha.getFullYear());

//Metodos Math
let numero = 2.1;
console.log(Math.round(numero)); //Redondea al número más cercano
console.log(Math.ceil(numero)) //Redondea siempre para arriba
console.log(Math.floor(numero)) //Redondea siempre para abajo
console.log(Math.trunc(numero)) //Redondea cortando los decimales. Deja solo los enteros
numero = 2.5;
console.log(Math.round(numero));
console.log(Math.ceil(numero))
console.log(Math.floor(numero))
console.log(Math.trunc(numero))
numero = 33.953;
console.log(Math.trunc(numero))
let numeroRandom = Math.random() //Numero aleatorio entre 0 y 1.
nuevoNumRandom = Math.round(numeroRandom * 100)
console.log("Este es un numero random entre 0 y 100:", nuevoNumRandom);
