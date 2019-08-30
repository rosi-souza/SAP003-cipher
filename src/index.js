document.getElementById("clique").addEventListener("click", clique);

function clique() {
  event.preventDefault();
  let msg = document.getElementById("msg").value;
  let offset = Number(document.getElementById("offset").value);
  let codigo = window.cipher.encode(offset, msg);
  document.getElementById("msg-codificar").innerHTML=`Mensagem codificada: ${codigo}`;
}

document.getElementById("decodificar").addEventListener("click", decodificar);

function decodificar() {
  event.preventDefault();
  let cod = document.getElementById("msg").value;
  let offset = Number(document.getElementById("offset").value);
  let funcaodecod = window.cipher.decode(offset, cod);
  document.getElementById("msg-codificar").innerHTML=`Mensagem decodificada: ${funcaodecod}`;
}
