document.getElementById("clique").addEventListener("click", clique);

function clique() {
  event.preventDefault();
  let msg = document.getElementById("msg").value;
  let offset = Number(document.getElementById("offset").value);
  if (!offset) {
    return document.getElementById("msg-error").innerHTML= "Por favor, digite um número válido.";
  } 
  document.getElementById("msg-error").innerHTML = "";
  let codigo = window.cipher.encode(offset, msg);
  document.getElementById("msg-title").innerHTML = "Mensagem codificada:";
  document.getElementById("msg-codificar").innerHTML= codigo;
}

document.getElementById("decodificar").addEventListener("click", decodificar);

function decodificar() {
  event.preventDefault();
  let cod = document.getElementById("msg").value;
  let offset = Number(document.getElementById("offset").value);
  if (!offset) {
    return document.getElementById("msg-error").innerHTML= "Por favor, digite um número válido.";
  } 
  let funcaodecod = window.cipher.decode(offset, cod);
  document.getElementById("msg-title").innerHTML= "Mensagem decodificada:";
  document.getElementById("msg-codificar").innerHTML = funcaodecod;
}
