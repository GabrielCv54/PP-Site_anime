//function login(){
     const listage  = {};
   
     var user_name = document.getElementById('login').value;
     var password = document.getElementById('password').value;

     listage.Usuário = user_name
     listage.password =password

     //var invite = document.getElementById('')
     
     if(user_name.value.length == '' || password.value.length==''){
      alert('O campo deve ser preenchido')
     }else{
          alert('Sucesso')
          console.log(listage)
     }

 
//}
