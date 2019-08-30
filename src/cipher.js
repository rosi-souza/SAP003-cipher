window.cipher = {
  encode: encode,
  decode: decode,
};

function encode (offset, msg) {
  var salvar = "";
  for (var i = 0; i < msg.length; i++) {
    if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) < 91) {
      let codificar = ((msg.charCodeAt(i) - 65 + offset) % 26) + 65;
      salvar += String.fromCharCode(codificar);
    } else if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i)< 123) {
      let codificarminuscula = ((msg.charCodeAt(i) - 97 + offset) % 26) + 97;
      salvar += String.fromCharCode(codificarminuscula);
    }
    else {
      let codificar = msg.charCodeAt(i);
      salvar += String.fromCharCode(codificar);
    }
  }
  return salvar;
}

function decode (offset, cod) {
  var decod = "";
  for (var i = 0; i < cod.length; i++) {
    if (cod.charCodeAt(i) >= 65 && cod.charCodeAt(i) < 91) {
      let decodificar = ((cod.charCodeAt(i) - 65 - offset) % 26) + 65;
      decod += String.fromCharCode(decodificar);
    } else if (cod.charCodeAt(i) >= 97 && cod.charCodeAt(i) <= 122) {
      let decodificarminuscula = ((cod.charCodeAt(i) - 122 - offset) % 26) + 122;
      decod += String.fromCharCode(decodificarminuscula);
    }
    else {
      let codificar = cod.charCodeAt(i);
      decod += String.fromCharCode(codificar);
    }
  } 
  return decod;
}
