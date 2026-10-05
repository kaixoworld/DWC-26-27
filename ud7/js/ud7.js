/*Ejemplos para manipular elementos html con JS*/
/*para localizar una etiqueta concreta: SIEMPRE DEVUELVE UN ARRAY*/
/*Ejemplo: quiero cambiar el texto del h1*/
let tituloH1 = document.getElementsByTagName("h1")[0];
let arrayTitulosH1 = document.getElementsByTagName("h1");
console.log(arrayTitulosH1[0]);
console.log(tituloH1);
tituloH1.textContent = "Nuevo título de h1";
/*Ejemplo2: quiero acceder por ID*/ 
let menuPrincipal = document.getElementById("menu-principal");
/*Ejemplo3: quiero acceder por class: SIEMPRE DEVUELVE 1 ARRAY*/
let opcionesMenu = document.getElementsByClassName("opcion-menu"); 
/*Probamos ahora a manipular los elementos de la lista como nodos*/ 