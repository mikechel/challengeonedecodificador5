function encriptar() {
  function validarInput() {
    let input = document.getElementById("input-texto").value;
    let regex = /[A-ZÀ-Ú]/g;
    if (regex.test(input)) {
      alert("O texto não deve conter letras maiúsculas ou acentos!");
      return false;
    }
    return true;
  }
  if(validarInput(true)){
      let str = document.getElementById("input-texto").value;
      console.log(str);
      let res = str.replace(/e/g, "enter");
      res = res.replace(/i/g, "imes");
      res = res.replace(/a/g, "ai");
      res = res.replace(/o/g, "ober");
      res = res.replace(/u/g, "ufat");
      const mostrar = document.getElementById("btn-copy");
      mostrar.hidden = false;
      return (document.getElementById("msgAlterada").value = res);
    }
  }
function decriptar() {
  function validarInput() {
    let input = document.getElementById("input-texto").value;
    let regex = /[A-ZÀ-Ú]/g;
    if (regex.test(input)) {
      alert("O texto não deve conter letras maiúsculas ou acentos!");
      return false;
    }
    return true;
  }
  if(validarInput(true)){
      let str = document.getElementById("input-texto").value;
      
      let res = str.replace(/enter/g, "e");
      res = res.replace(/imes/g, "i");
      res = res.replace(/ai/g, "a");
      res = res.replace(/ober/g, "o");
      res = res.replace(/ufat/g, "u");
      console.log(res);
      const mostrar = document.getElementById("btn-copy");
      mostrar.hidden = false;
      return (document.getElementById("msgAlterada").value = res);
  }  
    
}

const form = document.getElementById('formEntrada');
form.addEventListener('submit', e => {
    e.preventDefault();
     document.getElementById("input-texto").value = "";
    console.log('Deu certo');
});

function copiarTexto() {
  const textarea = document.getElementById("msgAlterada");
  textarea.select();
  document.execCommand("copy");
  alert("Texto copiado para a área de transferência!");
  return(document.getElementById("input-texto").value = textarea.value);
}
  

  
  

