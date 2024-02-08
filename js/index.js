// función validación
function textValidation(inputText) {
    // sólo letras mayúsculas y espacio en blanco
    let validTextRegex = /^[A-Z\s]*$/;
    
    if (!inputText || validTextRegex.test(inputText)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Debe ingresar un texto en minúsculas y sin caracteres especiales.',
            icon: 'error',
        });
        return true;
    } else {
        return false;
    }
};


// encriptar
const rules = {"e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};
function encriptarText(inputText) {
    let encripted = "";

    for(const char in rules){
        encripted = inputText.replaceAll(char, rules[char]);
        inputText = encripted;
    }
    return encripted;
};


// desencriptar
function desencriptarText(inputText){
    let desencripted = "";

    for(const char in rules){
        desencripted = inputText.replaceAll(rules[char], char);
        inputText = desencripted;
    }
    return desencripted;
};


// Evento encriptar
const btnEncriptar = document.getElementById('btn-encriptar');

btnEncriptar.addEventListener('click', () => {
    let inputText = document.getElementById('input-texto').value;
    let result = document.getElementById('texto-encriptado');
    console.log('result :>> ', result);

    if(!textValidation(inputText)) {
        result.textContent = encriptarText(inputText);
        document.getElementById('input-texto').value = "";
    } else {
        // ver si aca va lo de la imagen
        inputText = "";
    }
});


// Evento desencriptar
const btnDesencriptar = document.getElementById('btn-desencriptar');

btnDesencriptar.addEventListener('click',() => {
        let inputText = document.getElementById('texto-encriptado').value;
        let desencripted = desencriptarText(inputText);

        if(desencripted){
            let result = document.getElementById('input-texto');
            result.value = desencripted;
            result.textContent = desencripted;
            document.getElementById('texto-encriptado').value = "";
            console.log('desencripted :>> ', desencripted);
        } else {
            Swal.fire({
                title: '¡Error!',
                text: 'No existe un texto para desencriptar.',
                icon: 'error',
            })
        }
    }
);

const btnCopiar = document.getElementById('btn-copiar');

btnCopiar.addEventListener('click', () =>{
    let copy = document.getElementById('texto-encriptado').value;
    navigator.clipboard.writeText(copy);
    document.getElementById('input-texto').value = "";
    console.log('copy :>> ', copy);
    if(copy){
        document.getElementById('texto-encriptado').value= "";
    } else {
         Swal.fire({
            title: '¡Error!',
            text: 'No existe un texto para copiar.',
            icon: 'error',
         })
    }
});