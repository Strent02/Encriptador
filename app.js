function Encriptacion(texto){

  texto = texto.toLowerCase();

  const conversion = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
};

let textoModificado = '';
for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    textoModificado += conversion[letra] || letra;
}

return textoModificado;
}

function Encriptar(){
  let EncriptarBox = document.getElementById("EncriptarBox").value;
  let resultado = Encriptacion(EncriptarBox);
  document.getElementById("DesencriptarBox").value = resultado;
  document.getElementById("EncriptarBox").value = "";

} 



function Desencriptacion(texto){

  texto = texto.toLowerCase();

  const desconversion = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u',
};

let textoModificado = texto;
Object.keys(desconversion).forEach(clave => {
    const valor = desconversion[clave];
    textoModificado = textoModificado.split(clave).join(valor);
});

return textoModificado;
}

function Desencriptar(){
  let EncriptarBox = document.getElementById("EncriptarBox").value;
  let resultado = Desencriptacion(EncriptarBox);
  document.getElementById("DesencriptarBox").value = resultado;
  document.getElementById("EncriptarBox").value = "";

} 

function Copiar(){

  navigator.clipboard.writeText(document.getElementById("DesencriptarBox").value)
  document.getElementById("DesencriptarBox").value = "";

}