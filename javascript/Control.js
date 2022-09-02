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
        //textoobtenido  = textoobtenido.toLowerCase();
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
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    
    if(seguir){

        var textoobtenido = document.getElementById("textoobtenido").value; 
        var campovacio = document.getElementById("textoresultado");
        //textoobtenido  = textoobtenido.toLowerCase();
        campovacio.style.backgroundImage = "none";
    


        for( let i=0; i<matrizcodigo.length;i++){
            if(textoobtenido.includes(matrizcodigo[i][1])){
                textoobtenido=textoobtenido.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);
            }
        }

        limpiarenfocar();
        document.getElementById("textoresultado").innerText = textoobtenido;
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

//window.onresize = colocarimagen;

