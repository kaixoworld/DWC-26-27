let sectionSuperior = document.getElementsByTagName("section")[0];
let sectionInferior = document.getElementsByTagName("section")[1];
/*BOTÓN MOSTRAR*/
document.getElementsByTagName("button")[0].addEventListener("click", ()=>{
    /*quiero recorrer todos los <a></a> del primer section. ¡CUIDADO! los <a> están dentro de <p> luego hay que recorrer los p y dentro del p los a*/
    let parrafosSuperiores = sectionSuperior.getElementsByTagName("p");
    for(let parrafo of parrafosSuperiores){
        let enlaceParrafo = parrafo.getElementsByTagName("a")[0];
        /*de cada a coger el href y meterlo en un nuevo Element p*/
        let parrafoNuevo = document.createElement("p");
        parrafoNuevo.textContent = enlaceParrafo.href;/*enlaceParrafo.getAttribute("href")*/ 
        parrafoNuevo.style.color = "#BA3B59";
        /*añadir ese p al section de abajo*/  
        sectionInferior.appendChild(parrafoNuevo);
    }
}); 
/*Cambiar estilo pares*/ 
document.getElementsByTagName("button")[1].addEventListener("click", ()=>{
    let enlacesSuperiores = sectionSuperior.getElementsByTagName("a");
    let parrafosInferiores = sectionInferior.getElementsByTagName("p");
    let index=1;
    while( index < enlacesSuperiores.length){
        enlacesSuperiores[index].style.color="#fff";
        enlacesSuperiores[index].style.backgroundColor="#000";
        parrafosInferiores[index].style.color="#fff";
        parrafosInferiores[index].style.backgroundColor="#000";
        index += 2;
    }
});
/*cambiar texto al último enlace de la sectionSuperior*/
document.getElementsByTagName("button")[2].addEventListener("click", ()=>{
    let enlacesSuperiores = sectionSuperior.getElementsByTagName("a");
    let ultimoEnlace = enlacesSuperiores[enlacesSuperiores.length-1];
    ultimoEnlace.textContent = "San Google";
});
/*resetear*/ 
document.getElementsByTagName("button")[3].addEventListener("click", ()=>{
    window.location.reload();
});
