function colocarimagen(){
    var campovacio = document.getElementById("textoresultado");
    if (window.matchMedia("(min-width: 768px)").matches) {
        campovacio.style.backgroundImage = 'url(images/Imagen.svg)'; 
    } else {
        campovacio.style.backgroundImage = 'none';
    }
}

function validarContenido(){
    var textoobtenido = document.getElementById("textoobtenido").value;
    if (textoobtenido==""){
        document.getElementById("textoobtenido").focus();
        return false;
    }
    
    return true;
    
}

function limpiarenfocar(){
    document.getElementById('textoobtenido').value = "";
    document.getElementById("textoresultado").focus();
}

function encriptarTexto(){

    var seguir = validarContenido();
    if(seguir){

        var textoobtenido = document.getElementById("textoobtenido").value;
        var campovacio = document.getElementById("textoresultado");
        campovacio.style.backgroundImage = "none";
        
        var texto = "";
        
        for(var i=0; i<textoobtenido.length; i++){
            if(textoobtenido[i]!="a" && textoobtenido[i]!="e" && textoobtenido[i]!="i"&& textoobtenido[i]!="o" && textoobtenido[i]!="u")
            {texto = texto + textoobtenido[i];}
            if(textoobtenido[i]=="e"){texto = texto + "enter";}
            if(textoobtenido[i]=="i"){texto = texto + "imes";}
            if(textoobtenido[i]=="a"){texto = texto + "ai";}
            if(textoobtenido[i]=="o"){texto = texto + "ober";}
            if(textoobtenido[i]=="u"){texto = texto + "ufat";}
            
        }
        
        limpiarenfocar();
        document.getElementById('textoresultado').innerText = texto;
    }

}
function desencriptarTexto(){

    var seguir = validarContenido();
    if(seguir){

        var textoobtenido = document.getElementById("textoobtenido").value;
        var campovacio = document.getElementById("textoresultado");
        campovacio.style.backgroundImage = "none";
        
        var texto = "";
        
        for(var i=0; i<textoobtenido.length; i++){

            if(textoobtenido[i]=="a" && textoobtenido[i+1]=="i"){
                texto = texto + "a";
                i=i+2;
            }
            if(textoobtenido[i]=="o" && textoobtenido[i+1]=="b" && textoobtenido[i+2]=="e" && textoobtenido[i+3]=="r"){
                texto = texto + "o";
                i=i+4;
            }
            if(textoobtenido[i]=="i" && textoobtenido[i+1]=="m" && textoobtenido[i+2]=="e" && textoobtenido[i+3]=="s"){
                texto = texto + "i";
                i=i+4;
            }
    
            if(textoobtenido[i]=="e" && textoobtenido[i+1]=="n" && textoobtenido[i+2]=="t" && textoobtenido[i+3]=="e" && textoobtenido[i+4]=="r"){
                texto = texto + "e";
                i=i+5;
            }        
            if(i>=textoobtenido.length){
                break;
            }
            if(textoobtenido[i]=="u" && textoobtenido[i+1]=="f" && textoobtenido[i+2]=="a" && textoobtenido[i+3]=="t"){
                texto = texto + "u";
                i=i+4;
            }
            else {
                texto = texto + textoobtenido[i];
            }
            
        }
        
        limpiarenfocar();
        document.getElementById('textoresultado').innerText = texto;
    }
}

function copiarTexto(){

    let textoacopiar = document.querySelector("#textoresultado")
    textoacopiar.select();
    document.execCommand("copy");

    document.getElementById('textoresultado').innerText = "";
    limpiarenfocar();
    document.getElementById("textoobtenido").focus();


    colocarimagen();
}

window.onresize = colocarimagen;

