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

let numero = Number(prompt("Ingrese un numero para saber si es primo"));
let esPrimo = chequearPrimo(numero);
let mensaje = mensajeSalida(esPrimo);
alert(mensaje);

function mensajeSalida(valorCondicion) {
  if (valorCondicion) {
    return "El numero que ingreso es primo"
  } else {
    return"El numero que ingreso no es primo";
  }
}

function chequearPrimo(numero) {
  let esPrimo = true;
  for (let i = 2; i < numero; i++)
    if (numero % i == 0) {
      esPrimo = false;
    }

  return esPrimo;
}
