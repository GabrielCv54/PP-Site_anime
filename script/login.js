function validate(){

     const user_name = document.getElementById('login').value;
     const password = document.getElementById('password').value;
     var submit = document.getElementById('submit').value;
     var recovery = document.getElementById('recovery').value;

     


     //var invite = document.getElementById('')
     
     if(!user_name || !password){
      alert('O campo deve ser preenchido')
     }else if((user_name)){
          alert("Login feito com Sucesso")
          location.href = '/view/home.html'    
     }else{
          alert('O email ou senha não são válidos')
     }

 
}



 

