/*botón AÑADIR*/
let botonAñadir=document.getElementsByTagName("input")[0]; 
botonAñadir.addEventListener("click", ()=>{
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerText= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam quos nobis minima, dolorem ullam repellendus asperiores, nihil fugit iste molestiae veritatis facilis est accusamus fugiat! Debitis ipsam quae asperiores.";
    document.getElementsByTagName("body")[0].appendChild(nuevoParrafo);
});
/*botón ELIMINAR*/
let botonEliminar=document.getElementsByTagName("input")[1]; 
botonEliminar.addEventListener("click", ()=>{
    //eliminamos el último párrafo
    let parrafos = document.getElementsByTagName("p");
    let ultimoParrafo = parrafos[parrafos.length-1];
    document.getElementsByTagName("body")[0].removeChild(ultimoParrafo);
});