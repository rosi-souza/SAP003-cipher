window.cipher = {
  encode: encode,
  decode: decode,
};

function encode (msg, offset) {
  var salvar = "";
  for (var i = 0; i < msg.length; i++) {
    let codificar = ((msg.charCodeAt(i) - 65 + offset) % 26) + 65;
    salvar += String.fromCharCode(codificar);
  }
  return salvar;
}

function decode (cod, offset) {
  var decod = "";
  for (var i = 0; i <cod.length; i++) {
    let decodificar = ((cod.charCodeAt(i) - 90 - offset) % 26) + 90;
    decod += String.fromCharCode(decodificar);
  }
  return decod;
}
// para saber codigo asc = string.charcode(posição da letra);
// codigo asc inicia em 65 e fnaliza em 90.
// (codigo)
//(codigodaletraASC - codigo1letra + desloc) % tamanho da letra
// (string.charcode() - 65 + desloc) % 26