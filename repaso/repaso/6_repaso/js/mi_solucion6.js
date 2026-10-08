let listaDestinatarios = document.getElementById("destinat");
let areaMensaje = document.getElementById("textoMensaje");
let listaMensajes = document.getElementById("listaDefinitiva");
let mensajeListaVacia = document.getElementById("mensaje");
/*boton "ENVIAR"*/
document.getElementsByTagName("input")[0].addEventListener("click", ()=>{
    /*comprobar que la select tiene seleccionada una opción válida*/
    if (listaDestinatarios.selectedIndex==0)
        alert("¡Tienes que seleccionar un destinatario!");
    else{
        /*comprobamos que el mensaje tiene texto*/
        if (areaMensaje.value=="")
            alert("No mandes mensaje vacío :(");
        else{
            /*si estaba el mensaje de la lista vacía borro su texto*/
            mensajeListaVacia.textContent=""; 
            /*todo correcto, lo enviamos*/
            let destinatario = "Destinatari@: "+listaDestinatarios.options[listaDestinatarios.selectedIndex].innerHTML; 
            let parrafoDestinatario = document.createElement("p");
            parrafoDestinatario.textContent = destinatario;
            let mensaje = "Mensaje: " +areaMensaje.value;
            let parrafoMensaje = document.createElement("p");
            parrafoMensaje.textContent = mensaje;
            listaMensajes.appendChild(parrafoDestinatario);
            listaMensajes.appendChild(parrafoMensaje);
            /*dejo limpio la zona del mensaje*/ 
            areaMensaje.value="";
            listaDestinatarios.selectedIndex = 0;
        }
    }
    
    
}); 
/*boton "ELIMINAR"*/ 
document.getElementsByTagName("input")[1].addEventListener("click", ()=>{
    /*deja el html como si no hubiera pasado...como un F5*/
    window.location.reload();
    /*de forma artesanal:
    areaMensaje.value="";
    listaDestinatarios.selectedIndex = 0;
    mensajeListaVacia.textContent="De momento...nada"; 
    */ 
});
/*boton "A LA NUBE"*/ 
document.getElementsByTagName("input")[2].addEventListener("click", ()=>{
    let listaParrafos = listaMensajes.getElementsByTagName("p");
    let mensajeAlert="";
    for(let parrafo of listaParrafos)
        mensajeAlert += parrafo.textContent +"\n";
    alert(mensajeAlert);
});