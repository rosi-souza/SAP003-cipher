//chamar a função do window aqui
//função para chamar no botão click
function clique() {
  event.preventDefault();
  let msg = document.getElementById('msg').value;
  let offset = Number(document.getElementById('offset').value);
  let codigo = window.cipher.encode(msg, offset);
  document.getElementById('msg-codificar').innerHTML=`${codigo}`;
}
clique();

function decodificar() {
  event.preventDefault();
  let cod = document.getElementById('text').value;
  let offset = Number(document.getElementById('offset').value);
  let funcaodecod = window.cipher.encode(cod, offset);
  document.getElementById('msg-codificar').innerHTML=`${funcaodecod}`;
}

decodificar ();
// para saber codigo asc = string.charcode(posição da letra);
// codigo asc inicia em 65 e fnaliza em 90.
// (codigo)
//(codigodaletraASC - codigo1letra + desloc) % tamanho da letra