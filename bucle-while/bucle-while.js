
/*let i = 0;
let mensaje = '';
let n = parseInt(prompt("Ingrese un número: "));

while (i < n) {
  mensaje += i + ", ";
  i++
}
mensaje += n;
alert(mensaje);


let n = 0;

while (n < 1 || n > 5) {
  n = parseInt(prompt("Por favor ingrese un número del 1 al 5: "));
}
alert("Gracias.");


let msg = '';
while (msg != "n") {
  msg = prompt("Desea continuar con el programa? Presione N/S").toLowerCase();
}
alert("Fin del programa.")


let numero, resto, divisor = 2, esPrimo = " Si";
numero = parseInt(prompt("Teclear un numero entero"));
while (divisor < numero ) {
    if (numero % divisor == 0) {
      esPrimo = " No";
      break;
    }
  divisor++;
}
alert("El numero " + numero + esPrimo + " es primo");


let pass, att, key;
key = "Clave1";
att = 0;
while (pass != key && att < 3) {
  pass = prompt("Ingrese su clave: ");
  if (pass == key) {
    alert("Acceso concedido.");
  }else{
    alert("Clave incorrecta");
    att++;
  }
}
if (att == 3) {
  alert("Alerta: INTRUSO!")
}


alert("ingrese números a sumar, el proceso termina si introduce un Cero.")
let num, suma=0;
while (num != 0) {
  num = parseInt(prompt("Ingrese un número: "))
  suma += num;
}
alert("La suma de los númeors ingresados es: " + suma);


let min = Infinity;
let max = -Infinity;
let num = null;

alert("ingrese números a sumar, el proceso termina si introduce un Cero.")

while (num != 0) {
  
  num = parseInt(prompt("Ingrese un número: "));

  if (num != 0) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  
}

alert("El número mas grande es: " + max + ", y el mas chico es: " + min)


let num = 1, pares = 0;
while (num % 2 != 0) {
  num = parseInt(prompt("Ingrese un número par: "));
  if (num % 2 == 0) {
    pares++;
  }
  num++;
}
alert("Ingresó: " + pares + " pares")


let opcion = '';
while (opcion !== '3') {
  opcion = prompt("Seleccione: \n1-Leer datos \n2-Mostrar datos \n3-Fin");
  switch (opcion) {
    case '1':
      alert("Seleccionó leer datos.");
      break;
    case '2':
      alert("Seleccionó mostrar datos.");
      break;
    case '3':
      alert("Fin del programa.");
      cond = false;
      break;
    default:
      alert("ERROR: seleccione una opcion válida.");
  }
}
*/

var num = null; esPar = true, suma = 0;
while (esPar) {
  while (num != 0) {
    num = parseInt(prompt("Ingrese un número."));
    suma += num;
  }
  if (suma % 2 == 0) {
    alert("La suma de los números ingresados es: " + suma);
    alert("El resultado es par. El programa se reiniciará.");
    suma = 0;
    num = null;
  }else{
    alert("La suma de los números ingresados es: " + suma);
    esPar = false;
  }
}
alert("El resultado es impar. Fin del programa.")