let intentos=0, aciertos=0; mejorResultado=0;
let solucion=["Solo Front-end", "Javascript","Javascript", "Clean Code","ES6, ES2015"];
/*REINTENTAR*/
//function reintentar(){alert("reintentar");} 
reintentar = ()=>{
    window.location.reload();
}
/*RENDIRSE*/
rendirse = ()=>{

} 
/*comprobar*/ 
comprobar = ()=>{
    //comprobamos cada 1 de las 5 respuestas
    //de cada respuesta dada cogeremos el value del input seleccionado y lo compararemos con la solución
    //si coincide, el número de aciertos++
    aciertos=0; intentos++;
    for(let index=1; index<=5; index++){
        console.log(document.getElementsByName("respuPreg"+index));
        let opciones = document.getElementsByName("respuPreg"+index);
        let respuestaOK = solucion[index-1];
        //coger el value del option checkeado por la persona usuaria para compararlo con respestaOK
        let indexOpciones=0;
        while (indexOpciones<4 && !opciones[indexOpciones].checked){
            indexOpciones++;
        }
        if(indexOpciones<4){
            if(opciones[indexOpciones].value==respuestaOK)
                aciertos++;
        }
    }
    console.log("ACIERTOS: "+aciertos);
    if (aciertos>mejorResultado)
        mejorResultado = aciertos;
    /*mostrar en pantalla num intento y resultado*/
   let bodyTabla = document.getElementsByTagName("tbody")[0];
   let nuevaFila = document.createElement("tr");
   let elementoFila1 = document.createElement("td"); 
   elementoFila1.textContent = intentos;
   let elementoFila2 = document.createElement("td"); 
   elementoFila2.textContent = aciertos +" aciertos de 5";
   nuevaFila.appendChild(elementoFila1);
   nuevaFila.appendChild(elementoFila2);
   bodyTabla.appendChild(nuevaFila);
   /*escribo el mejor resultado*/
   let allTd =document.getElementsByTagName("td");
   let ultimoTd =  allTd[allTd.length-1];
   ultimoTd.textContent = mejorResultado;
}