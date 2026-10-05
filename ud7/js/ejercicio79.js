let boton= document.getElementsByTagName("input")[0];
boton.addEventListener("click", ()=>{
    //aqui escribimos lo que queremos que pase cuando se pinche el botón
    if(boton.value=="ocultar"){
        boton.value="mostrar";
        document.getElementsByTagName("p")[0].style = "display:none";
    }else{
        document.getElementsByTagName("p")[0].style = "display:block";
        boton.value="ocultar";
    }
});