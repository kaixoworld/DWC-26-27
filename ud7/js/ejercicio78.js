let numeroEnlaces = document.getElementsByTagName("a").length;
console.log("Enlaces de la página: "+numeroEnlaces);
let numeroEnlacesCSL=0;
for(let enlace of document.getElementsByTagName("a"))
{
    if(enlace.getAttribute("href") == "http://www.centrosanluis.com")
        numeroEnlacesCSL++;
}
console.log("Nº de enlaces a SanLu: "+numeroEnlacesCSL);