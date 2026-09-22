/*1. Muestra por consola el mensaje "Hola mundo".*/
console.log("Hola mundo!");
/*2. Declara una variable con tu nombre y muéstrala por consola dentro de un saludo.*/
var nombre="Elen";
console.log("Visualizo mi nombre: "+nombre);
/*3. Muestra por consola el resultado de sumar 5 y 3.*/
console.log("5+3= "+(5+3));
/*4. Muestra por consola tres mensajes distintos, cada uno en una línea separada.*/
console.log("Pongo 3 mensajes\nen diferentes líneas\nsi quiero");
/*5. Declara una variable con tu edad y muéstrala por consola junto a un texto explicativo (ej: "Tengo 16
años").*/ 
var edad=25;
console.log("Tengo "+edad+" años");
/*
6. Pide a la persona usuaria su nombre con prompt() y muéstralo vventana flotante con un mensaje de bienvenida.*/
//nombre = prompt("Introduce tu nombre: "); 
//alert("Te damos la bienvenida, "+nombre);
/*7. Pide a la persona usuaria un número y muéstralo multiplicado por 2.*/
var numero ;//= parseInt(prompt("Introduce un número: ")); 
//alert(numero + " * 2 = "+ (numero*2));*/
/*8. Pide a la persona usuaria dos números y muestra su suma por consola.*/
var numero2 ;//= parseInt(prompt("Introduce otro número: ")); 
//var suma = numero+numero2;
//alert(numero+" + "+numero2+" = "+suma);
/*9. Pide a la persona usuaria su año de nacimiento y calcula (aproximadamente) su edad actual.*/
/*10. Pide a la persona usuaria el nombre de su ciudad y muestra un mensaje personalizado de bienvenida.
*/ 
/*
11. Declara dos variables numéricas, calcula su producto y muéstralo por consola.*/
numero=10;
numero2=4;
console.log(numero +" * "+numero2+" = "+ (numero*numero2));
/*12. Intercambia el valor de dos variables usando una tercera variable auxiliar, y muestra el resultado.*/
//alert("Numero1: "+numero+"\nNumero2: "+numero2+"\n");
var varAuxiliar = numero;
numero = numero2;
numero2= varAuxiliar;
//alert("Intercambio:\nNumero1: "+numero+"\nNumero2: "+numero2);
/*13. Declara una variable con el precio de un producto y calcula su valor final aplicando un 21% de IVA.*/
const IVA = 21;
var precio = 10;
//alert("Precio sin IVA: "+precio+"\nPrecio con IVA: " + (precio*(1+IVA/100)));
/*14. Declara una variable con una temperatura en grados Celsius y conviértela a Fahrenheit (F = C * 9/5 + 32).*/

/*15. Declara una variable con un número entero y muestra si es par o impar usando el operador %.*/
numero=24;
/*if(numero%2==0)
    alert(numero + " es PAR");
else
    alert(numero + " es IMPAR");
numero=23;
if(numero%2==0)
    alert(numero + " es PAR");
else
    alert(numero + " es IMPAR");*/

/*16. Pide un número y muestra por consola si es positivo, negativo o cero.*/
/*numero = prompt("Introduce un número");
if (numero>0)
    console.log(numero+ " es +");
else if (numero<0)
    console.log(numero+ " es -");
else
    console.log(numero+ " es 0");*/
/*17. Pide la edad de una persona y muestra si es mayor o menor de edad.*/
//var edad= prompt("Dime una edad: ");
/*if (edad>=18)
    console.log("Eres mayor de edad");
else    
    console.log("Eres menor de edad");
*/
/*18. Pide dos números y muestra cuál de los dos es mayor.*/
//numero = prompt("Introduce un número:");
/*numero2 = prompt("Introduce otro número:");

if (numero>numero2)
    console.log(numero+ " es mayor que "+numero2);
else if (numero<numero2)
    console.log(numero+ " es menor que "+numero2);
else
    console.log("son iguales");*/
/*19. Pide una nota numérica (0-10) y muestra "Aprobado" o "Suspenso".*/ 
//var nota = parseFloat(prompt("Introduce una nota: "));
/*if (nota>=5)
    alert("APROBADA");
else
    alert("SUSPENDIDA");*/
/*20. Pide una nota (0-10) y muestra su calificación: Sobresaliente (9-10), Notable (7-8), Bien (6), Suficiente (5) o Insuficiente (menos de 5).*/
/*switch(nota){
    case 10,9: alert("SOBRESALIENTE");break;
    case 7,8: alert("NOTABLE");break;
    case 6: alert("BIEN");break;
    case 5: alert("SUFI");break;
    default:
        alert("PENCO");
}
*/
/*21. Pide un número y muestra si es múltiplo de 3, de 5, de ambos a la vez, o de ninguno.*/
/*if ((numero %3 == 0)&&(numero %5 == 0))
    alert(numero + " es múltiplo de 3 y de 5");
else if(numero %3 == 0)
    alert(numero + " es múltiplo de 3");
else if(numero %5 == 0)
    alert(numero + " es múltiplo de 5");
else
    alert(numero + " no es múltiplo ni de 3 ni de 5");*/
/*22. Pide un número del 1 al 12 (representa un mes) y muestra a qué estación del año pertenece.*/
/*console.log(numero);
switch(parseInt(numero)){
    case 12,1,2: alert("INVIERNO");break;
    case 3,4,5: alert("PRIMAVERA");break;
    case 6,7,8: alert("VERANO");break;
    default: alert("OTOÑO");
}*/
/*23. Pide la edad de una persona y clasifícala en: bebé, niño, adolescente, adulto o anciano (tú decides los rangos).
*/ 
/*
if(edad<=2)
    alert("BEBÉ");
else if (edad>2 && edad <=13)
    alert("NIÑO/A");
else if (edad>13 && edad <=19)
    alert("ADOLESCENTE");
else if(edad>20 && edad<=70)
    alert("ADULTO/A");
else
    alert("ANCIANO/A");
*/

/*24. Pide un número del 1 al 7 y muestra el nombre del día de la semana correspondiente usando switch.*/

/*25. Pide una letra (A, B, C o D) y muestra un mensaje distinto para cada caso usando switch, con un
mensaje por defecto si no coincide ninguna.*/

/*
26. Muestra por consola los números del 1 al 10 usando un bucle for.*/
/*for(let index=1; index<=10; index++)
    console.log(index);*/
/*27. Muestra por consola los números pares del 1 al 20 usando un bucle for.*/
/*for(let index=2; index<=20; index+=2)
    console.log(index);*/
/*28. Calcula y muestra la suma de todos los números del 1 al 100 usando un bucle for.
*/ 
var suma=0;
for(let index=1; index<=100; index++)
    suma+=index;
console.log(suma);
/*29. Pide a la persona usuaria un número tras otro (usando prompt() dentro de un while) hasta que
introduzca un 0. Cuando eso ocurra, termina el bucle.*/ 

//DO..WHILE
/*do{
    numero = parseInt(prompt("Introduce un número: "));
}while(numero!=0);
*/
//WHILE
/*numero = parseInt(prompt("Introduce un número: "));
while(numero!=0){
    numero = parseInt(prompt("Introduce un número: "));
}
*/
/*30. Usa un bucle do...while para pedir un número a la persona usuaria repetidamente hasta que
introduzca uno mayor que 100. Muestra un mensaje de aviso cada vez que el número sea válido.*/
/*do{
    numero = parseInt(prompt("Introduce un número: "));
    if(numero<=100)
        alert("¡Bien hecho! Introduce otro número <= 100");
}while(numero<=100);
*/
/*
31. Pide un número a la persona usuaria y comprueba si es primo.*/
/*numero = parseInt(prompt("Introduce un número: "));
console.log("NUMERO: "+numero);
var index=2;
while((numero%index!=0)&&(index<=numero/2)){
    index++;
}
if(index>numero/2)
    console.log("ES PRIMO");
else
    console.log("NO ES PRIMO");
*/
/*32. Calcula el factorial de un número introducido por el usuario.*/
/*var factorial=1;
do{
    numero=parseInt(prompt("Introduce un número para calular el factorial:"));
}while(numero<0);
var mensaje=numero+" !";
for(let index=1;index<=numero;index++){
    factorial *= i;
}
mensaje += "= " + factorial;
alert(mensaje);*/
/*33. Programa el clásico juego "FizzBuzz": para los números del 1 al 50, muestra "Fizz" si el número es múltiplo de 3, "Buzz" si es múltiplo de 5, "FizzBuzz" si es múltiplo de ambos, y el propio número en caso contrario.*/
/*alert("FIZZBUZZ");
do{
    numero=parseInt(prompt("Número (1..50):"));
    if(numero<1 || numero>50)
        alert("EL NÚMERO DEBE ESTAR ENTRE 1 Y 50");
}while(numero<1 || numero>50);
var texto="";
if(numero % 3 == 0)
    texto += "Fizz";
if(numero % 5 == 0)
    texto += "Buzz";
if(texto=="")
    texto += numero;
alert(texto);*/
/*34. Pide un número y comprueba si es capicúa (se lee igual del derecho que del revés, como 121 o 1331).*/

/*35. Simula un cajero automático: el programa tiene un PIN correcto guardado en una variable. Pide el PIN a la persona usuaria, permitiendo un máximo de 3 intentos; si acierta antes, muestra "Acceso concedido", y si agota los 3 intentos sin acertar, muestra "Tarjeta bloqueada".*/
/*var intentos=1;
var pinCorrecto="1234";
var pin=0;
do{
    pin = prompt("Introduce PIN (intento"+intentos+"):");
    if(pin==pinCorrecto)
        alert("Acceso concedido");
    else intentos++;
}while(intentos<=3 && pin!=pinCorrecto);
if(intentos>3)
    alert("Tarjeta bloqueada");
*/
/*36. Pide las notas de 5 exámenes, una a una, y al finalizar muestra la nota media y si la persona aprueba (media ≥ 5).*/
/*37. Pide un número y muestra su tabla de multiplicar, pero mostrando solo los resultados que sean pares.*/
/*38. Calcula cuántos números primos hay entre el 1 y el 100, mostrando el total al finalizar.*/


/*39. El programa "piensa" un número secreto guardado en una variable (por ejemplo, 42). La persona usuaria va introduciendo números y el programa responde "más alto" o "más bajo" hasta que acierte.*/
/*var numeroSecreto = 42;
var numero=0;
do{
    numero = prompt("Introduce un número: ");
    if (numero < numeroSecreto)
        alert("¡Más grande!");
    else if (numero > numeroSecreto)
        alert("¡Más pequeño!");
    else
        alert("¡HAS ACERTADO!");
}while(numero!=numeroSecreto);
*/
/*40. Pide la temperatura registrada cada día de una semana (7 valores, uno a uno) y al finalizar muestra la temperatura máxima, la mínima y la media.
*/ 
var temperaturaMaxima, temperaturaMinima, media;
var temperatura = parseInt(prompt("Introduce la temperatura del día 1:"));
temperaturaMaxima = temperatura;
temperaturaMinima = temperatura;
media = temperatura;
for(let index=2; index<=7; index++)
{
    temperatura = parseInt(prompt("Introduce la temperatura del día 1:"));
    if(temperatura<temperaturaMinima)
        temperaturaMinima = temperatura;
    if(temperatura>temperaturaMaxima)
        temperaturaMaxima = temperatura;
    media += temperatura; // media = media+temperatura; 
}    
alert("TEMPERATURA MÁXIMA: "+temperaturaMaxima +"\nTEMPERATURA MÍNIMA: "+temperaturaMinima+"\nTEMPERATURA MEDIA: "+media/7);