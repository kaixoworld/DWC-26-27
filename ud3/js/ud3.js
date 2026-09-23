/*1. Declara un array con los nombres de 5 compañeros/as de clase y muéstralo por consola.*/
/*var arrayNombres= ["Joane", "Oier", "Iker", "Mer", "Mai"];
var texto="";
for (let index=0; index<arrayNombres.length; index++)
        texto += arrayNombres[index]+"\n";
alert(texto);
text="";
for (let nombre of arrayNombres)
    texto += nombre+"\n";
alert(texto);
*/
/*2. Dado un array de números, muestra por consola su primer elemento y su último elemento.*/
/*var arrayNumeros=[5,-6,10,8];
alert("Primer elemento: "+arrayNumeros[0]+"\nÚltimo elemento: "+arrayNumeros[arrayNumeros.length-1]);*/
/*3. Pide 5 números a la persona usuaria, uno a uno, y guárdalos en un array.*/
/*4. Dado un array de números, muestra cada uno de sus elementos por consola, uno en cada línea.*/
/*5. Dado un array de números, calcula y muestra la suma de todos sus elementos.*/ 
/*var arrayNumeros =[];
var suma=0;
for (let index=0;index<5;index++)
{
    do{
        arrayNumeros[index] = parseInt(prompt("Introduce número "+(index+1)+": "));
        if (isNaN(arrayNumeros[index]))
            alert("TIENES QUE METER UN NÚMERO!");
    }while(isNaN(arrayNumeros[index]));
    suma += arrayNumeros[index];
}    
var mensaje="";
for(var numero of arrayNumeros)
    mensaje += numero + "\n"; *///mensaje = mensaje.concat(numero + "\n");
//mensaje += "La suma de todos los número es: "+suma; 
//mensaje = mensaje.concat("La suma de todos los números es: "+suma);
//alert(mensaje);
/*11. Pide números al usuario, uno a uno, y guárdalos en un array, hasta que introduzca un -1. Al terminar, muestra cuántos números ha introducido en total.*/
/*12. Dado un array de números, cuenta cuántos son pares y cuántos son impares, y muestra ambos totales.*/
var arrayNumeros=[];
var arrayContadores=[0,0]; //en la pos = contador de pares, en la 1 de impares
var numero;
do{
    numero = parseInt(prompt("Introduce un número para el array: "));
    if(numero!=-1){
        arrayNumeros.push(numero);
        if(numero%2 == 0) 
            arrayContadores[0]++;
        else
            arrayContadores[1]++;
    }
}while(numero!=-1);
alert("Has introducido "+arrayNumeros.length+" números\nPARES: "+arrayContadores[0]+"\nIMPARES: "+arrayContadores[1]);

/*18. Pide un valor al usuario y muestra en qué posición (índice) se encuentra dentro de un array dado, o un mensaje indicando que no está.*/
numero = parseInt(prompt("Introduce un número para buscarlo: "));
if (arrayNumeros.indexOf(numero)!=-1)
    alert("ENCONTRADO! El número está en la posición "+(arrayNumeros.indexOf(numero)+1));
else
    alert("NO ENCONTRADO :(");