$(document).ready(()=>{
     function validate(){
         let pass = $("#password").val();
         let confirm = $("#confirm").val();
         let name = $("#name").val();
         let email = $("#email").val();
         let username = $("username").val();
         
     
              alert("Name: " + name + "\nEmail:" + email + "\nUsername:" + username + "\nPassword: " + password );

         /*
          Alli is cute
         */
     }


     $("#register").click(validate);
})
