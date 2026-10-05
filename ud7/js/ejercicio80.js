let boton=document.getElementsByTagName("input")[0];
boton.addEventListener("click", ()=>{
    let textoNuevoElemento = prompt("Nuevo elemento de la lista: ");
    //ese texto lo quiero meter en un <li></li> y luego ese li lo meteré en el <ul></ul>
    //creamos el nuevo elemento <li></li>
    let nuevoItem = document.createElement("li");
    //meto el texto del <li>textoNuevoElemento</li>
    nuevoItem.innerText = textoNuevoElemento;
    //localizo la lista en la que voy a añadir ese nuevo elemento
    let lista = document.getElementsByTagName("ul")[0];
    //añado el nodo nuevo a la lista
    lista.appendChild(nuevoItem);
});