document.getElementById("clique").addEventListener("click", clique);

function clique() {
  event.preventDefault();
  let msg = document.getElementById("msg").value;
  let offset = Number(document.getElementById("offset").value);
  let codigo = window.cipher.encode(offset, msg);
  document.getElementById("msg-codificar").innerHTML=`${codigo}`;
}

document.getElementById("decodificar").addEventListener("click", decodificar);

function decodificar() {
  event.preventDefault();
  let cod = document.getElementById("text").value;
  let offset = Number(document.getElementById("offset").value);
  let funcaodecod = window.cipher.decode(offset, cod);
  document.getElementById("msg-decodificar").innerHTML=`${funcaodecod}`;
}

// para saber codigo asc = string.charcode(posição da letra);
// codigo asc inicia em 65 e fnaliza em 90.
// (codigo)
//(codigodaletraASC - codigo1letra + desloc) % tamanho da letra