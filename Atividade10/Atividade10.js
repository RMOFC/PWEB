function validar(){
    nome = document.forms['form']['nome'].value;
    email = document.forms['form']['email'].value;
    comentario = document.forms['form']['comentario'].value;

    var teste = 0;

    if(nome.length < 10){
      alert("Nome inválido, por favor, preencha com 10 caraceteres ou mais");
      return teste =1;
    }
    if(comentario.length < 20){
      alert("Comentário inválido, por favor, preencha com 20 caraceteres ou mais");
      return teste = 1;

    }
    if (teste != 1)
      pesquisa();
      }

  function limpardados(){
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('comentario').value = '';
}

function pesquisa(){
  if(document.getElementById('radiosim').checked == true)
    alert("Que bom que você voltou à página!");
  else
    alert("Volte sempre!");
}