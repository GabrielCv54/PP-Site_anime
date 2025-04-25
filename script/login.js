const user_name = document.getElementById('login').value;
const password = document.getElementById('password').value;
var submit = document.getElementById('submit').value;
var recovery = document.getElementById('recovery').value;
const icon = document.querySelector('#eye')

function validate(){
     //var invite = document.getElementById('')
     
     if(!user_name || !password){
      alert('O campo deve ser preenchido')
     }else if((user_name)){
          alert("Login feito com Sucesso")
          location.href = 'home.html'    
     }else{
          alert('O email ou senha não são válidos')
     }
 
}

function showPassword(){
     if(password.type == 'password'){
          password.setAttribute('type','text');
          icon.classList.add('hide');
     }else{
          password.setAttribute('type','password');
          icon.classList.remove('hide');
     }
}


 

