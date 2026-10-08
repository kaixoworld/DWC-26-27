let diasEusk =["Astelehena", "Astearte", "Asteazkena", "Osteguna", "Ostirala"];
let diasCast =["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

/*BOTÓN VER SOLUCION*/ 
document.getElementById("solucion").addEventListener("click", ()=>{
    if (confirm("¿Segura que quieres abandonar la partida?")){ //quiere abandonar
        //sacamos la solución en un alert
        let solucion = "SOLUCIÓN\n";
        for (let index=0;index<diasCast.length;index++)
            solucion += diasCast[index]+": "+diasEusk[index]+"\n";   
        alert(solucion);
    }else{ //responde que no
        alert("Así se hace! Sigue intentándolo :)");
    }
});
/*Volver a Jugar*/
document.getElementById("reiniciar").addEventListener("click", ()=>{
    window.location.reload();
}); 
/*emparejar*/
document.getElementById("emparejar").addEventListener("click", ()=>{
    /*1. cogemos el elemento seleccionado de cada lista desplegable*/
    let indexEuskera = document.getElementsByTagName("select")[0].selectedIndex;
    let indexCastellano =  document.getElementsByTagName("select")[1].selectedIndex;
    console.log(indexEuskera);
    console.log(indexCastellano);
    /*2. comprobamos si coincide con la solución*/
    /*buscar la posicion que ocupa la palabra en euskera seleccionada dentro del array solución*/ 
    let indexEuskSolucion = 0;
    while (diasEusk[indexEuskSolucion] != document.getElementsByTagName("select")[0].options[indexEuskera].value){
        indexEuskSolucion++;
    }
   console.log(document.getElementsByTagName("select")[1].options[indexCastellano].textContent);
    if (diasCast[indexEuskSolucion]==document.getElementsByTagName("select")[1].options[indexCastellano].textContent){
    /*2.1 si coincide: alert diciendo que bien! Decrementamos el contador de emparejamientos que faltan*/
        alert("BUENA!");
        
    }else   
        /*2.2 si no coincide: alert para que siga intentándolo*/    
        alert("OHHHHHHH....SIGUE INTENTÁNDOLO");
    //}
}); 