//CALCULO DE INTERESES
// alert("Bienvenido vamos a calcular el monto")

// let monto = Number(prompt("Ingrese su monto a invertir"))
// let interesAnual = Number(prompt("Ingrese su interes anual"))
// let anios = Number(prompt("Ingrese la cantidad de años"))
// let total = monto

// for (let i = 0; i < anios; i++) {
//     total = total + total * interesAnual / 100
//     console.log(total)
// }

// TABLAS DE MULTIPLICACION
// let salida = ""
// let numero = Number(prompt ("Ingrese el numero para mostrar su tabla"))
// for(let i = 0; i < 10; i++){
//     console.log(`${numero} X ${i + 1} = ${numero * (i + 1)}`)

//     salida = salida + (`${numero} X ${i + 1} = ${numero * (i + 1)}\n`)

// }

// alert(salida)

// let numero = Number(prompt("Ingrese un numero para saber si es primo"));
// let esPrimo = chequearPrimo(numero);
// let mensaje = mensajeSalida(esPrimo);
// alert(mensaje);

// function mensajeSalida(valorCondicion) {
//   if (valorCondicion) {
//     return "El numero que ingreso es primo"
//   } else {
//     return"El numero que ingreso no es primo";
//   }
// }

// function chequearPrimo(numero) {
//   let esPrimo = true;
//   for (let i = 2; i < numero; i++)
//     if (numero % i == 0) {
//       esPrimo = false;
//     }

//   return esPrimo;
// }

// let sexo = prompt("Ingrese M, F o X")
// switch (sexo.toUpperCase()) {
//   case "M":
//     console.log("su sexo es masculino");
//     break;
//   case "F":
//     console.log("su sexo es femenino");
//     break;
//   case "X":
//     console.log("su sexo es no binario ");
//     break;
//   default:
//     console.log("Opcion ingresada incorrecta");
//     break;
// }

// console.log(document)
// console.dir(document)

//EJERCICIOS
// 7.Escribir un programa que almacene el abecedario en un Array, elimine las letras
// que ocupen posiciones multiplos de 3, y muestre por pantanlla la lista resultante.

// let abecedario = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// let resultadoFinal = [];

// for (let i = 0; i < abecedario.length; i++) {
//   if (i % 3 !== 0 || i === 0) {
//     abecedario.splice(i, 1);
//     cont++;
//   }
// }

// console.log(abecedario);

// 8.Escribir un programa que pida al usuario una lista de letras y muestre por pantalla el numero de
// veces que ingreso cada vocal
// let resultado = {
//   a: 0,
//   e: 0,
//   i: 0,
//   o: 0,
//   u: 0,
// };

// for (let i = 0; i < 10; i++) {
//   let letra = prompt("ingrese una letra").toLowerCase()
//   switch (letra) {
//     case 'a':
//       resultado.a++;

//       break;
//     case 'e':
//       resultado.e++;
//       break;
//     case 'i':
//       resultado.i++;
//       break;
//     case 'o':
//       resultado.o++;
//       break;
//     case 'u':
//       resultado.u++;
//       break;
//     default:
//       break;
//   }
// }

// let salida = ''
// for (const prop in resultado){
//     salida += "Hay " + resultado[prop] + " letras " + prop + "\n"
// }
// alert(salida)
// console.log(resultado);

// funcion anonima porque no tiene nombre
// let palabra =[ "auto", "telefono", "perro"]
// palabra.forEach(function (palabra) {
//   alert(palabra)

// })

// funcion comun
// function nameFuncion(palabra) {
//   console.log(palabra)
// }
// nameFuncion("Emanuel")

//Preentrega 2

// alert("Click en aceptar para ver los productos");

// let objetos = [
//   {
//     id: 1,
//     nombre: "PlayStation 4",
//     categoria: "Electronico",
//     precio: 100000,
//     stock: 4,
//   },
//   {
//     id: 2,
//     nombre: "Nintendo",
//     categoria: "Electronico",
//     precio: 150000,
//     stock: 5,
//   },
//   {
//     id: 3,
//     nombre: "Monopoli",
//     categoria: "Juego de mesa",
//     precio: 5000,
//     stock: 8,
//   },
//   {
//     id: 4,
//     nombre: "jumanji",
//     categoria: "Juego de mesa",
//     precio: 9000,
//     stock: 2,
//   },
// ];
// objetos.sort((a, b) => a.precio - b.precio);
// console.log(objetos);

// let salida = "";
// objetos.forEach((objeto) => {
//   salida = salida + objeto.id + "- " + objeto.nombre + "\n";
// });

// alert(salida);

//Tercer entrega

// let Boton = document.getElementById("boton");
// Boton.addEventListener("click", () => alert("Realizo un click"));

let Productos = [
  {
    id: 1,
    nombre: "Short Deportivo",
    categoria: "Deportiva",
    precio: 1500,
    stock: 20,
    imgUrl: "./Imagenes/ShortDeportivo.png",
  },
  {
    id: 2,
    nombre: "Campera",
    categoria: "Ropa de invierno",
    precio: 1800,
    stock: 10,
    imgUrl: "./Imagenes/Campera.png",
  },
  {
    id: 3,
    nombre: "Musculosa",
    categoria: "Ropa de verano",
    precio: 2000,
    stock: 9,
    imgUrl: "./Imagenes/Musculosa.jpg",
  },
  {
    id: 4,
    nombre: "Remera",
    categoria: "Ropa de Invierno",
    precio: 2500,
    stock: 15,
    imgUrl: "./Imagenes/Remera.png",
  },
];

let ContenedorProductos = document.getElementById("ContenedorProductos"); // Uno solo

let buscador= document.getElementById("buscador")
let buscar = document.getElementById("buscar")
//buscador.onchange = () => console.log("EVENTO CHANGE")
//buscador.oninput = () => console.log("EVENTO INPUT")
//buscador.onclick = () => console.log("CLICK")
buscar.onclick = filtrar
//buscador.oninput = filtrar
 function filtrar () {
  let productosFiltrados = Productos.filter(Producto => Producto.nombre.toLowerCase().includes(buscador.value.toLowerCase())||
                                                        Producto.categoria.toLowerCase().includes(buscador.value.toLowerCase()))

  renderizarProductos(productosFiltrados)
  console.log(productosFiltrados)
}
///renderizar productos
renderizarProductos(Productos)
function renderizarProductos (arrayDeProductos){
  ContenedorProductos.innerHTML = ""
// let boton = document.getElementById("botonn");
// botonn.onclick = AlertBot;
function AlertBot() {
   alert("Realizo un click");
}
// function AlertBott() {
//   alert("Realizo un click");
// }

arrayDeProductos.forEach((Producto) => {
  let cardProducto = document.createElement("div");

  cardProducto.classList.add("Producto");
  cardProducto.id = `card${Producto.id}`;

  cardProducto.innerHTML = `
    <h3>${Producto.nombre}</h3>
    <p>$${Producto.precio}</p>
    <button id=${Producto.id}> Agregar al carrito</button>
   <img src=${Producto.imgUrl} ./Imagenes/ShortDeportivo.png>
    
    `;

  if (Producto.stock < 10) {
    cardProducto.classList.add("pocasUnidades");
    let PocasUnidades = document.createElement(`h6`);
    PocasUnidades.innerText = "Pocas unidades";
    cardProducto.appendChild(PocasUnidades);

    // PocasUnidades = "Quedan pocas unidades";
  }

  ContenedorProductos.append(cardProducto);

  let boton = document.getElementById(Producto.id)
  boton.onclick = AlertBot

  //let botonn = document.getElementById("botonn");
   //botonn.onclick = AlertBott;

})
}
