/* 
estructura dee un array
[valor1, valor2, valor3, valorn];

*/

// EJEMPLOS

// const vacio = [];
// const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// const nombres = ["camila", "juan", "andres", "pedro"];
// const valores = [false, true, true, false];
// const varios = [true, 2, "andres"];


/*
const nombres = ["camila", "juan", "andres", "pedro"];

console.log(nombres[1]);
*/

/*
const numeros = [2, 3, 4, 5, 6, 7];

let resultado = numeros[1] + numeros[3];   // forma de llamar a los valores de un array
console.log(resultado);
*/
/*
const productos = ["mate", "cafe", "carne", "chocolate"];

// length longtud o cantidad de elementos del array
console.log(productos.length);

// push agrega un elemento al final del array
productos.push("agua");
console.log(productos);

// unshift agrega un elemnto al inicio del array
productos.unshift("granola");
console.log(productos);

// pop quita el ultimo elemento del array

productos.pop();
console.log(productos);

// shift quita el primer elemnto del array
productos.shift();
console.log(productos);
*/

//  const productos = ["mate", "cafe", "carne", "chocolate"];
// splice elimina uno o varios elementos en cualquier posicion
// productos.splice(1, 2);
// console.log(productos);

// join une en un solo string todos los elementos de un array separados por el parametro
// console.log(productos.join(" "));


//concat 

// const numeros = [4, 5, 6, 2, 45, 6];
// const varios = productos.concat(numeros);
// console.log(varios);


// slice crea una copia de un fragmento del array
// const productos = ["mate", "cafe", "carne", "chocolate"];
// const copua = productos.slice(1, 4);
// console.log(copia);

// indexOf buscar la posicion de un elemento en un array

// const productos = ["mate", "cafe", "carne", "chocolate"];

// console.log(productos.indexOf("chocolate"));

// includes verifica la existencia de un elemento dentro del arreglo
// console.log(productos.includes("chocolate"));


// EJEMPLO

// let nombre = prompt("Ingrese el producto a verificar su existencia");

// if (productos.includes(nombre)) {
//     alert("Producto Disponible");
// } else {
//     alert("Producto no disponilbe");
// }

// const productos = [
//     {id: 1, nombre: "camisa", precio: 1000},
//     {id: 2, nombre: "gorra", precio: 1000},
//     {id: 3, nombre: "zapatos", precio: 1000},
//     {id: 4, nombre: "medias", precio: 1000},
// ];

// for (const item of productos) {
//     console.log(item.nombre);
//     console.log(item.precio);
// }

// class producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// const productos = [];

// for (let i = 0; i < 3; i++) {
//     let nombre = prompt("Ingrese el nombre del producto a agregar");
//     let precio = Number(prompt("Ingrese el precio del producto a agregar"));

//     let producto = new producto(nombre, precio)

//     productos.push(producto);
// }

// console.log(productos);


// EJEMPLOS

// const productos = [
//     {nombre: "mando de ps5", precio: 25000},
//     {nombre: "pc gamer", precio: 77000},
//     {nombre: "play station 5", precio: 155000},
//     {nombre: "iphone pro max", precio: 85000},
//     {nombre: "mando de ps4", precio: 18000},
// ];

// let nombre = prompt("Ingrese el producto que busca");

// for (const item of productos) {
//     if ( item.nombre === nombre) {
//         alert(`Nombre:¨${item.nombre} Precio:¨${item.precio}`);
//     } else {
//         alert("Por el momento no comercializamos el producto que busca, lo sentimos");
//     }
// }

// CLASE 7 - FUNCIONES DE ORDEN SUPERIOR 1


//const productos = [
//    {id: 1, nombre: "camisa", precio: 1000,},
//    {id: 2, nombre: "pantalon", precio: 2000},
//    {id: 3, nombre: "zapatos",precio: 3000},
//    {id: 4, nombre: "sudadera",precio: 4000},
//]

/* forEach recorre los elementos de un arreglo */
/* productos.forEach(item) => {} => {,
    alert(`
        id:${item.id}
        nombre: ${item.nombre}
        precio: ${item.precio}
    `)
} */


/* find encontrar el primer elemento que cumpla la propiedad */
//let nombre = prompt ("ingrese el nombre del producto");
//const producto = productos.find((item)=> item.nombre === nombre);

//if(producto) {
//    alert (`
//    id: ${producto.id}
//    nombre: ${producto.nombre}
//    precio: ${producto.precio}
//`)
//} else {
//    alert(`Producto no comercializado.`)
//}




// forEach, find, filter y map los mas importantes de saber.

/*
const productos = [
    {id: 1, nombre: "camisa", precio: 2000},
    {id: 2, nombre: "pantalon", precio: 4000},
    {id: 3, nombre: "zapatillas", precio: 6000},
    {id: 4, nombre: "campera", precio: 8000},
];

const aplicarDescuento = (producto) => {
    const descuento = 0.21;
    const precioConDescuento = producto.precio * 0.21;

    return {Producto: producto, precio: precioConDescuento};
};

const productosConDescuento = productos.map(aplicarDescuento);

alert(`Bienvenido a nuestra tienda online, recuerda que tenemos el 20% de descuento en todos los productos`);
let prd = prompt("Ingrese el producto que busca");
*/



// CLASE 8 

// Propiedades del objeto Math
// constantes
//console.log(Math.E);
//console.log(Math.PI);

//console.log(Math.max(3, 4, 6, 8, 354, 23, 45));


//Aproximaciones
//console.log(Math.ceil(3.12));  //aproxima al entero mas cercano hacia arriba
//console.log(Math.floor(3.7)); //aproxima al entero mas cercano hacia abajo
//console.log(Math.round(3.5)); //aproxima al entero mas cercano




//CLASE 9 DOM
