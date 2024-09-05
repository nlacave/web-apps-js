//Variables
/*
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

//BUCLES:
let tecnologias = ["HTML","CSS","JAVASCRIPT","REACT","ANGULAR"];

for(let index = 0; index < tecnologias.length; index++) {
    console.log("Tecnologia con for común:", tecnologias[index]);
}

for(tecnologia of tecnologias) {
    console.log("Tecnologia con for of:", tecnologia);
}

const alumno = {
    nombre: "Ricardo",
    edad: 25,
    tecnologias: ["HTML","CSS"]
}

for(const key in alumno){
    console.log("Tecnología con for key in:", alumno[key]);
}

tecnologias.forEach(tecnologia => {
    console.log("Tecnologia con forEach:",tecnologia);
})


//Sets
let arr = [1, 1, 2, 3, 4, 5, 6, 1, 0, 3];

nSet = new Set(arr);

console.log(nSet);

//Maps

let nuevoMapa = new Map([
    ["HMTML", 1],
    ["CSS", 2],
    ["JS", 3],
    ["JQUERY", "Deprecado"],
    ["React", "Framework de JS"],
])

console.log(nuevoMapa.get("React"));

console.log(nuevoMapa.set("VueJs", "Framework de JS pero no tan conocido como React"));

console.log(nuevoMapa.delete("React"));

console.log(nuevoMapa.has("JQUERY"));

let nuevoArr = [...nSet];

console.log(nuevoArr);

nuevoArr2 = [...nuevoMapa.keys()];

console.log(nuevoArr2);

//TypeOf & InstanceOf

let a = typeof "sergie";
console.log(a);

let b = 4;
console.log(b);

let c = typeof NaN;
console.log(c);

let d = typeof true;

console.log(d);

let e = ["Ricardo", "Nicolas", "Gabriel"];

console.log(e);

let f = typeof {curso: "JavaScript"};

console.log(f);

if(typeof b == "number") {
    console.log("Estoy imprimiendo un numero");
} else {
    console.log("Enviame un numero");
}

if(e instanceof Array) {
    console.log("He recibido un arreglo");
} else{
    console.log("Esto no es un arreglo");
}

let texto = 'Este curso es de Javascript y está enseñado por Sergie Code en el año 2023 y mes Octubre';

let busqueda = texto.search(/Javascript/);

console.log(busqueda);

let busqueda2 = texto.search(/JAVASCRIPT/i);

console.log(busqueda2);

let patron = /Sergie Code/;

let busqueda3 = patron.test(texto);

console.log(busqueda3);

let patron2 = /sergie/;

let busqueda4 = patron2.test(texto);

console.log(busqueda4);

let patron3 = /sergie/i;

let busqueda5 = patron3.test(texto);

console.log(busqueda5);

let busqueda6 = patron2.exec(texto);

console.log(busqueda6);

let busqueda7 = patron3.exec(texto);

console.log(busqueda7);

let patron4 = /[2001-2024]/;

let busqueda8 = patron4.exec(texto);

console.log(busqueda8);

let patron5 = /\d/;

let busqueda9 = patron5.test(texto);

console.log(busqueda9);

try {
    console.log('Llamando al Backend');
    //throw('Este cliente no está apto para la compra');
    setTimeout(() => {
        console.log('Practicando');
    }, 1000);
} catch(error) {
    console.log('Algo falló', error);
} finally {
    console.log('Se ejecuta siempre');
}  

function calculo(numero1, numero2, operacion) {
    return operacion(numero1, numero2);
}

function suma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(calculo(1, 2, suma));


let promesa = new Promise((resolve) => {
    setTimeout(()=>{
        let tarea = {'Descripcion':'Tarea 1 completada'}
        resolve(tarea);
    }, 3000);
})

let promesa2 = new Promise((resolve) => {
    setTimeout(()=>{
        let tarea = {'Descripcion': 'Tarea 2 completada'}
        resolve(tarea);
    }, 5000)
})

let promesa3 = new Promise((resolve) => {
    setTimeout(()=>{
        let tarea = {'Descripcion': 'Tarea 3 completada'}   
        resolve(tarea)
        }, 2500)
    })

    promesa.then(res => {
        console.log(res.Descripcion);
        promesa2.then(res => {
            console.log(res.Descripcion);
            promesa3.then(res => {
                console.log(res.Descripcion);
            })
        })
    })


    
// Funciones que devuelven promesas
const tarea1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tarea1Exito = true; // Cambia esto a false para simular una falla
            if (tarea1Exito) {
                resolve({ Descripcion: 'Tarea 1 completada' });
            } else {
                reject('Fallo en la tarea 1');
            }
        }, 3000); // Simula un retraso para la tarea 1
    });
};

const tarea2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tarea2Exito = true; // Cambia esto a false para simular una falla
            if (tarea2Exito) {
                resolve({ Descripcion: 'Tarea 2 completada' });
            } else {
                reject('Fallo en la tarea 2');
            }
        }, 5000); // Simula un retraso para la tarea 2
    });
};

const tarea3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tarea3Exito = true; // Cambia esto a false para simular una falla
            if (tarea3Exito) {
                resolve({ Descripcion: 'Tarea 3 completada' });
            } else {
                reject('Fallo en la tarea 3');
            }
        }, 2500); // Simula un retraso para la tarea 3
    });
};

// Función asíncrona para ejecutar las tareas secuencialmente

    tarea1().then(Response => {
        console.log(Response);
        return tarea2()
            .then(Response => {
            console.log(Response);
            return tarea3()
            .then(Response => {
                console.log(Response);
            })
        })
    })
    .catch(error => {
        console.error(error);
    }) 

    let promesa1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let tarea = {
            status: 201,
            descripcion: "Objeto creado.",
            valor: 1,
        };
        let tarea2 = {
            status: 201,
            descripcion: 'Objeto creado.',
            valor: 1,
        }
        if(tarea.status == 201 && tarea2.status == 201) {
            resolve([tarea, tarea2]);
        } else{
            reject(['Fallo al crear el objeto:', tarea, tarea2]);
        }
    }, 3000)
}) 
promesa1.then(res => {
    console.log("Se completó la tarea:", res[0].descripcion, "Hay", parseInt(res[0].valor) + parseInt(res[1].valor), "objetos creados");
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            let nuevaTarea = {
                status: 201,
                descripcion: "Objeto creado",
            }

            if(nuevaTarea.status == 200) {
                resolve(nuevaTarea);
            } else {
                reject("Fallo al crear la nueva tarea");
            }
        }, 5000)
    }).then(res => {
        console.log('Segunda tarea creada:', res.status);
    }).catch(err => {
        console.log(err);
    })

}).catch(err => {
    console.error(err);
})
*/

let promesa1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let tarea = {
            status: 201,
            descripcion: "Objeto creado.",
            valor: 1,
        };
        let tarea2 = {
            status: 201,
            descripcion: 'Objeto creado.',
            valor: 1,
        }
        if(tarea.status == 201 && tarea2.status == 201) {
            resolve([tarea, tarea2]);
        } else{
            reject(['Fallo al crear el objeto:', tarea, tarea2]);
        }
    }, 3000)
}) 

async function respuestaPromesas() {
    let respuestaPromesa1 = await promesa1
    console.log(respuestaPromesa1[0].status);
}

respuestaPromesas();