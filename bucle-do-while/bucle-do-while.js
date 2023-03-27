/*
let letra = '';
do {
  letra = prompt("Teclea la letra A (mayúscula).");
} while (letra != 'A');
alert("Fin del programa.");


// Pedimos al usuario que ingrese un número entre 0 y 100
let num;
do {
  num = parseInt(prompt("Ingresa un número entre 0 y 100:"));
} while (isNaN(num) || num < 0 || num > 100);

let esPrimo = true;

// Verificamos si el número es primo o no
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    esPrimo = false;
    break;
  }
}

// Mostramos el resultado en una alerta
if (esPrimo) {
  alert(num + " es un número primo");
} else {
  alert(num + " no es un número primo");
}


// Aqui el codigo entero está dentro del bucle
let num;
let esPrimo;

do {
  num = parseInt(prompt("Ingresa un número entre 0 y 100:"));

  // Verificamos si el número es primo o no
  esPrimo = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      esPrimo = false;
      break;
    }
  }

  // Mostramos el resultado en una alerta
  if (esPrimo && num >= 2) {
    alert(num + " es un número primo");
  } else if (num >= 0 && num <= 100) {
    alert(num + " no es un número primo");
  }
} while (isNaN(num) || num < 0 || num > 100);


let opcion = '';
do {
  opcion = prompt("Seleccione: \n1-Leer \n2-Escribir \n3-Salir");
  switch (opcion) {
    case '1':
      alert("Seleccionó leer.");
      break;
    case '2':
      alert("Seleccionó escribir.");
      break;
    case '3':
      alert("Seleccionó salir. Fin del programa.");
      break;
    default:
      alert("Ingrese una opción válida.");
  }
} while (opcion != '3');


let repeat = true;

do {
  // Pedir al usuario que ingrese dos números
  const num1 = Number(prompt("Ingresa un número:"));
  const num2 = Number(prompt("Ingresa otro número:"));

  // Calcular la suma
  const sum = num1 + num2;

  // Mostrar la suma al usuario
  alert(`La suma de ${num1} y ${num2} es ${sum}`);

  // Pedir al usuario que ingrese S para repetir o N para salir
  let answer = prompt("¿Quieres repetir? (S/N)").toUpperCase();

  while (answer !== "S" && answer !== "N") {
    answer = prompt("Respuesta no válida. Por favor, ingresa S o N.").toUpperCase();
  }

  // Comprobar la respuesta del usuario
  if (answer === "N") {
    repeat = false;
  }
} while (repeat);

alert("¡Hasta luego!");


let letra = '', veces = 0, cadena = '';

do {
  // le pedimos al usuario que ingrese X o Z
  letra = prompt("ingrese X o Z:").toUpperCase();
} while (letra !== "X" && letra !== "Z");

do {
  // le pedimos al usuario que ingrese un número del 1 al 15
  veces = parseInt(prompt("Ingrese del 1 al 15, las veces que repetirá la letra:"));
} while (veces < 1 || veces > 15);

do {
  // formamos la cadena
  cadena += letra;
  veces--;
} while (veces > 0);

// mostramos la cadena
alert(cadena);


let dividendo, divisor, resto, mcd=0;

// pedimos al usuario dos números
dividendo = parseInt(prompt("ingresa un número: "));
divisor = parseInt(prompt("Ingresa otro número: "));

do {
  resto = dividendo % divisor;
  if (resto == 0) {
    mcd = divisor
  } else {
    dividendo = divisor;
    divisor = resto;
  }
} while (resto != 0);

alert("El MCD es: " + mcd);


var numero, salida='', digito;
numero = parseInt(prompt("teclear un número"));
do {
    digito =  numero % 10;
    numero = parseInt(numero/10);
    salida += digito + '  ';
} while (numero > 0)
alert("Dígitos del número " + salida);


let numero, par;

do {
  numero = parseInt(prompt("Ingrese un número mayor que cero: "));
  if (numero != 0) {
    par = 2;
    suma = 0;
    do {
      suma += par;
      par += 2;
    } while (par <= numero)
    alert("La suma de los pares desde el cero al número ingresado es igual a: " + suma);
  }
} while (numero != 0);

alert("Fin del programa.")


alert("Ingrese dos numeros en orden ascendente.")
do {
  num1 = parseInt(prompt("Ingrese el 1er número: "))
  num2 = parseInt(prompt("Ingrese el 2do número: "))
} while (num2 <= num1);
alert("Números ordenados")
*/

let numero, inverso = 0, copia, resto;

numero = parseInt(prompt("teclear el numero"));

copia = numero;

do {
    resto = copia % 10;
    inverso = inverso * 10 + resto;
    copia = parseInt(copia / 10);
} while(copia != 0);

if (inverso == numero) {
  alert(numero + " es palindromo ");
} else {
  alert(numero + " no es palindromo ");
}
