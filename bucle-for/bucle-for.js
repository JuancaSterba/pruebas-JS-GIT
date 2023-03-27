/*
let num = parseInt(prompt("Ingrese un número entero:"));
let i, mensaje = "<ul>";
for (i = 0; i <= num; i++) {
  mensaje += "<li>" + i + "</li>";
}
mensaje += "</ul>";
document.getElementById("demo").innerHTML = mensaje;


let num = parseInt(prompt("Ingrese un número entero:"));
let i, mensaje = "<ul>";
for (i = num; i >= 0; i--) {
  mensaje += "<li>" + i + "</li>";
}
mensaje += "</ul>";
document.getElementById("demo").innerHTML = mensaje;


let num = parseInt(prompt("Ingrese un Número entero:"));
let pares = '';
for (i = 0; i < num; i++) {
  if (i % 2 == 0) {
    pares += i + "\n";
  }
}
alert("los numeros pares positivos anteriores al numero ingresado son:\n" + pares)


let n, mensaje;
n = parseInt(prompt("Ingrese el número que desea ver la tabla:"));
mensaje = "Aquí tiene la tabla de multiplicar:\n";

for (i = 0; i < 10; i++) {
  mensaje += n + ' x ' + (i + 1) + ' = ' + n * (i+1) + '\n';
}
alert(mensaje);


let n = parseInt(prompt("ingrese un numero entero:"));
 for (i = 1; i < n; i++) {
  if (i % 3 == 2) {
    console.log(i);
  }
 }


let letra = prompt("Ingrese una letra: ");
let numero = parseInt(prompt("Ingrese el número de veces que quiere que se repita la letra: "));
let mensaje = '';
for (i = 0; i < numero; i++) {
  mensaje += letra;
}
alert(mensaje);


let n = parseInt(prompt("ingresa un número"));
let pinito = '';
for (i = 0; i < n; i++) {
  pinito += '*';
  console.log(pinito);
}


let n = parseInt(prompt("Ingresa un número: "));
let suma = 0;
for (i = 0; i <= n; i++) {
  suma += i;
}
alert("La suma del 0 al " + n + " es igual a: " + suma);


let n = 0, sum, prom;

for (i = 0; i < 4; i++) {
  n += parseFloat(prompt("Ingresar número: "));
}
prom = n/4;
alert("El promedio de los numeros ingresados es: " + prom.toFixed(2));
*/

// escribe un programa que arrroje 20 numeros al azar del 0 al 100
let mensaje = '';

for (i = 0; i < 20; i++) {
  mensaje += Math.floor(Math.random() * 151) + "\n";
}

alert(mensaje);
