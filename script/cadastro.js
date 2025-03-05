function validateCadastro(){
   var fname = document.getElementById('fname').value;
   var lname = document.getElementById('lname').value; 
   var email = document.getElementById('email').value;
   var nasc = document.getElementById('nasc').value;
   var nation = document.getElementById('nation').value;

   if(nasc<18){
      alert('Só é possível realizar o cadastro com mais de 18 anos!!')
   }else{
      alert('Continuação na próxima página de cadastro')
   }
}

