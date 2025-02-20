
var user = document.getElementById('user').innerHTML;
var password= document.getElementsByClassName('password')
var confirme = document.getElementsByClassName('password')

    if(password.value == confirme.value){
      alert('Usuário registrado com sucesso!')
     
    }else{
        alert('Erro! as senhas devem ser iguais')
    }
