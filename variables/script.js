// modifica el contenido del elemento html con el id: demo
document.getElementById("demo").innerHTML = "Hola mundo!";

// calcula el precio final de un producto conociendo su precio y el iva
let precio = 350;
const iva = 1.21;
console.log("El precio total es: " + (precio * iva));
alert("El precio total es: " + (precio * iva));

// calcula el area y el perimetro de un cuadrado
var ladoCuadrado = 40;
console.log("El área del cuadrado es: " + (ladoCuadrado ** 2));
console.log("El perímetro del cuadrado es: " + (ladoCuadrado * 4));

// recibe el nombre mediante un prompt y retorna un saludo
let nombre = prompt("Escribe tu nombre", "Nombre");
let saludo = "Hola " + nombre + ". Bienvenido!";
console.log(saludo);
alert(saludo);

// ingresa por teclado tres números y calcula la media
var num1 = parseInt(prompt("Ingresa un número:")); // aquí convertimos el string recibido a numero entero
var num2 = parseInt(prompt("Ingresa un número:"));
var num3 = parseInt(prompt("Ingresa un número:"));
var media = (num1 + num2 + num3)/3;
alert("La media de los números ingresados es: " + media);

// calcular el consumo promedio
var consumo = parseInt(prompt("Ingresa los litros consumidos"));
var kilometros = parseInt(prompt("Ingresa los kilometros recorridos"));
var consumoProm = consumo / kilometros;
alert("tuviste un consumo de: " + consumoProm + " l/km");

// cambiar de unidades
let hora =parseInt(prompt("Ingresa la cantidad de horas"));
let minutos =parseInt(prompt("Ingresa la cantidad de minutos"));
let segundos = hora*60*60 + minutos*60;
console.log("El valor en segundos es: " + segundos);

// separar en unidades y decenas
var num = parseInt(prompt("Ingresa un número de dos cifras"));
var unidad, decena;
unidad = num%10;
decena = parseInt(num/10);
console.log("Unidades: " + unidad);
console.log("Decenas: " + decena);

// calcular los ingredientes según los comenzales
let comenzales = parseInt(prompt("Vamos a hacer tortillas de papa, ingresa la cantidad de comenzales"));
let papas = (comenzales * 200)/1000;
let huevos = comenzales;
let cebolla = comenzales * 60;
alert("Necesitas: " + papas + " kg de papas, " + huevos + " huevos, y " + cebolla + " gramos de cebolla");

// intercambia el valor de las variables
var varUno = 10;
var varDos = 20;
console.log("INICIO: varUno = " + varUno + " varDos = " + varDos);
var varTemp = varUno;
varUno = varDos;
varDos = varTemp;
console.log("FINAL: varUno = " + varUno + " varDos = " + varDos);

// decir si un numero es par
let numPar = parseInt(prompt("Ingrese un número para saber si es par"));
let restoNum = numPar % 2;
let esPar = restoNum == 0;
alert("Es par: " + esPar);