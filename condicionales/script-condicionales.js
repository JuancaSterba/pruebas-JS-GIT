/*
// decir si un numero es par o impar
var numero = parseInt(prompt("Ingrese un número"));
var numPar = numero % 2;
var mensaje = "El número ingresado es ";
if (numPar == 0) {
  alert(mensaje + "PAR");
}else {
  alert(mensaje + "IMPAR");
}

// decir si el mismo número es positivo o negativo
if (numero >= 0) {
  alert(mensaje + "POSITIVO")
}else {
  alert(mensaje + "NEGATIVO")
}

// pedir dos numeros y entregar el cociente, alertar si se ingresa un cero
let dividendo = parseInt(prompt("Ingrese un número para dividirlo"));
let divisor = parseInt(prompt("Ingrese el otro número"));
if (divisor == 0) {
  alert("ERROR: El divisor no puede ser cero");
}else {
  alert("El cociente de la división es: " + (dividendo / divisor));
}

// solicitar letra entre A, B, C, D y decir si acertó
let letra = prompt("Elija entre A, B, C y D").toUpperCase();
if (letra !== 'A' && letra !== 'B' && letra !== 'C' && letra !== 'D') {
  alert("La opción ingresada no esta en la lista");
}else if (letra === 'A') {
  alert("Acertaste")
}else {
  alert("Equivocado")
}

// retornar la diferencia entre dos numeros (no la resta)
numero = parseInt(prompt("Ingrese un número, vamos a calcular la diferencia"));
var numero2 = parseInt(prompt("Ingrese el otro numero"));
if (numero >= numero2) {
  alert("La diferencia es: " + (numero - numero2));
}else {
  alert("La diferencia es: " + (numero2 - numero))
}

// elegir entre opciones y dirigir al sector correscpondiente
let articulo = prompt("Puede elegir entre: vino, cerveza u otros").toLowerCase();
if (articulo === "vino" || articulo === "cerveza") {
  alert("Diríjase a la barra");
}else {
  alert("Diríjase a la tienda");
}

// dar un mensaje segun la opcion elegida
var medio = prompt("¿Viaja en tren, autobus, coche o bicicleta?");
if (medio === "tren" || medio === "autobus") {
  alert("No olvides el dinero para el boleto!");
}else if (medio === "coche") {
  alert("Que papudo...");
}else {
  alert("Que tiriquera...");
}

// calcular la velocidad de un tramo recorrido
alert("ingrese el tiempo empleado para recorrer el tramo de 135 km");
let horas = parseInt(prompt("Horas:"));
let minutos = (parseInt(prompt("Minutos:"))) / 60;
let velocidad = parseInt(135 / (horas + minutos));
alert("Para calificar la velocidad debe estar entre 60 km/h y 80 km/h");
if (velocidad >= 60 && velocidad <= 80) {
  alert("Velocidad: " + velocidad + " km/h. CLASIFICADO");
}else {
  alert("Velocidad: " + velocidad + " km/h. DESCASIFICADO");
}

// otorgar 15% de descuento a compras de +10 art y +$40
var cantArt = parseInt(prompt("Ingrese la cantidad de artículos"));
var valArt = parseInt(prompt("Ingrese el valor del artículo"));
var total = cantArt * valArt;
if (cantArt >= 10 && valArt >= 40) {
  total = (total * .85).toFixed(2);
}
alert("Su factura es de: $" + total)
*/
// mensaje segun promedio de nota del alumno
let nota1 = parseInt(prompt("Ingresa la nota del 1er trimestre"));
let nota2 = parseInt(prompt("Ingresa la nota del 2do trimestre"));
let nota3 = parseInt(prompt("Ingresa la nota del 3er trimestre"));
let promedio = ((nota1 + nota2 + nota3) / 3).toFixed(2);
if (promedio < 5) {
  alert("Promedio: " + promedio + " SUSPENDIDO");
}else if (promedio >= 5 && promedio < 8) {
  alert("Promedio: " + promedio + " APROBADO");
}else {
  alert("Promedio: " + promedio + " NOTABLE");
}