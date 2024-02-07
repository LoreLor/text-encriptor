const btnEncriptar = document.getElementById('btn-encriptar');

function encriptarTexto() {
    let inputTexto = document.getElementById("input-texto").value;
    let textoEncriptado = 
    inputTexto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    return textoEncriptado
}


