const mensaje = document.querySelector("#texto-ingresado");
const mensajeEncriptado = document.querySelector("#textoIncriptado");
var encriptar = document.getElementById("encriptar");
var desencriptar = document.getElementById("desencriptar");
var copiar = document.getElementById("boton-copiar");
var filtro = ("ABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóú");
var filtrosplit = filtro.split("");

function encriptarMensaje(nuevoMensaje)
{
    var mensajeCapturado= mensaje.value;
    var letras = mensajeCapturado.split("");
    
    for(let indice = 0; indice < mensaje.textLength; indice++)
    {   
        
        if(letras[indice] == "a")
        {
            letras[indice]="ai";    
        }
        if(letras[indice] == "e")
        {
            letras[indice]="enter";    
        }
        if(letras[indice] == "i")
        {
            letras[indice]="imes";    
        }
        if(letras[indice] == "o")
        {
            letras[indice]="ober";    
        }
        if(letras[indice] == "u")
        {
            letras[indice]="ufat";    
        }
    }
    var nuevoMensaje = letras.join("");
    console.log(nuevoMensaje);
    mostrarMensaje(nuevoMensaje);
    return nuevoMensaje;
    
}
function mostrarMensaje(nuevoMensaje)
{
    var cambio = document.getElementById("derecha-2");
    cambio.style.display = "block";
    mensajeEncriptado.value = nuevoMensaje;
}
function copiarMensaje(nuevoMensaje)
{
    mensajeEncriptado.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    window.alert("Texto copiado");
}

function desencriptarMensaje(nuevoMensaje)
{
    var mensajeCapturado= mensaje.value;
    var nuevoMensaje = mensajeCapturado.replace(/ober/g,"o")
    .replace(/ai/g,"a")
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ufat/g,"u");
    console.log(nuevoMensaje);
    mostrarMensaje(nuevoMensaje);
    return nuevoMensaje;
}
function filtrar()
{
    var mensajesplit = mensaje.value.split("");
    for(var x=0; x < mensajesplit.length; x++)
    {
        
        for(var i=0; i < filtrosplit.length; i++)
            {
                if(mensajesplit[x] == filtrosplit[i])
                {
                    window.alert("Solo minúsculas y sin acentos");
                    document.querySelector("#texto-ingresado").value = "";
                    return;
                }
            }
            
    }
    encriptarMensaje();
}

encriptar.onclick = filtrar;
desencriptar.onclick = desencriptarMensaje;
copiar.addEventListener("click",copiarMensaje);