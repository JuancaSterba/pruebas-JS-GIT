/*
// determinar que valor es mayor
var num1 = parseInt(prompt("Ingresa un número"));
var num2 = parseInt(prompt("Ingresa otro número"));
var mayor = (num1 > num2) ? "El primero es el mayor":"El segundo es el mayor";
alert(mayor);


// verificar si el cuadrado del numero ingresado es correcto
var num1 = parseInt(prompt("Ingresa un número"));
var num2 = parseInt(prompt("Ingresa el cuadrado del número"));
var cuadrado = num1 ** 2;
var mensaje = (cuadrado == num2) ? 
  "El cuadrado ingresado es CORRECTO":"El cuadrado ingresado es INCORRECTO";
alert(mensaje);


let edad = parseInt(prompt("Ingrese su edad"));
let diff = 18 - edad;
let mensaje = (diff <= 0) ? "Puede ingresar":"Regresa en " + diff + " años"
alert(mensaje);


// entrega un mensaje segun la seleccion usando switch-case
let menu, mensaje;
menu = prompt("Elija el tipo de menú: carne, pescado, verdura");
switch (menu) {
  case "carne":
    mensaje = "¿Desea beber vino tinto?";
    break;
  case "pescado":
    mensaje = "¿Desea beber vino blanco?";
    break;
  case "verdura":
    mensaje = "¿Desea beber agua?";
    break;
  default:
    mensaje = "Elija carne, pescado o verdura";
}
alert(mensaje);


// ejercicio switch-case
var creditos, mensaje;
creditos = prompt("Ingrese la cantidad de creditos abonados");
switch (creditos) {
  case "1":
    mensaje = "Puede acceder a la sala de Consolas";
    break;
  case "2":
    mensaje = "Puede acceder a Consolas y Juegos 2D";
    break;
  case "3":
    mensaje = "Puede acceder a Consolas, Juegos 2D y 3D";
    break;
  case "4":
    mensaje = "Puede acceder a Consolas, Juegos 2D y 3D, y Realidad Virtual"
    break;
  default:
    mensaje = "Ingrese 1, 2, 3 o 4 por favor";
}
alert(mensaje);

// ejercicio copiado para ver variante resumida
let creditos, acceso='Salas: ';
creditos = parseInt(prompt("¿Cuántos créditos vas a pagar?"));
switch (creditos){
    case 4:
        acceso += "Realidad Virtual, ";
    case 3:
        acceso += "Juegos 3D, ";
    case 2:
        acceso += "Juegos 2D, ";
    case 1:
        acceso += "Consolas, ";
        break;
    default:
        acceso += "Ninguna";
}
alert(acceso);


let mes, mensaje = "Estación: ";
mes = prompt("Ingresa el mes en numeros");
switch (mes) {
  case '12':
  case '1':
  case '2':
    mensaje += "Invierno";
    break;
  case '3':
  case '4':
  case '5':
    mensaje += "Primavera";
    break;
  case '6':
  case '7':
  case '8':
    mensaje += "Verano";
    break;
  case '9':
  case '10':
  case '11':
    mensaje += "Otoño";
  default:
    mensaje += "ERROR";
}
alert(mensaje);


// agregamos una sentencia de control para asegurar que se ingresen solo números
let base, alto, mensaje;
base = parseInt(prompt("Ingrese la longitud de la base"));
while (isNaN(base)) {
  base = parseInt(prompt("Ingrese la longitud de la base (sólo números):"));
}
alto = parseInt(prompt("Ingrese la altura"));
while (isNaN(alto)) {
  alto = parseInt(prompt("Ingrese la altura (sólo números):"));
}
switch (true) {
  case base == alto:
    mensaje = "Es un cuadrado";
    break;
  case base > alto:
    mensaje = "Es un rectangulo Horizontal";
    break;
  default:
    mensaje = "Es un rectángulo vertical";
}
alert(mensaje);


let opcion = prompt("Seleccione el tipo de vehículo: 1-Gasolina, 2-Diesel, 3-Eléctrico").toUpperCase();
let mensaje = "Dirijase a la oficina Nro. ";
switch (opcion) {
  case '1':
  case 'GASOLINA':
    mensaje += '100';
    break;
  case '2':
  case 'DIESEL':
    mensaje += '200';
    break;
  case '3':
  case 'ELÉCTRICO':
    mensaje += '300';
    break;
  default:
    mensaje += "ERROR"
}
alert(mensaje);


let monto = parseFloat(prompt("Ingrese el monto de la compra"));
let factura;
switch (true) {
  case (monto < 100):
    factura = monto;
    break;
  case (monto >= 100 && monto <= 300):
    factura = monto * .95;
    break;
  case (monto > 300 && monto <= 500):
    factura = monto * .9;
    break;
  default:
    factura = monto * .85;
}
alert("Su factura es de: $ " + factura.toFixed(2));

////

let nota, mensaje;

while (true) {
  nota = prompt("Por favor, ingrese una nota del 0 al 10:");

  if (isNaN(nota)) {
    alert("Por favor, ingrese un valor numérico.");
  } else if (nota < 0 || nota > 10) {
    alert("Por favor, ingrese una nota válida.");
  } else {
    break;
  }
}

switch (true) {
  case (nota < 5):
    mensaje = "SUSPENDIDO";
    break;
  case (nota >= 5 && nota < 7):
    mensaje = "APROBADO";
    break;
  case (nota >= 7 && nota < 9):
    mensaje = "NOTABLE";
    break;
  case (nota >= 9 && nota <= 10):
    mensaje = "SOBRESALIENTE";
    break;
  default:
    mensaje = "ERROR: no es una nota válida";
}
alert(mensaje);
*/