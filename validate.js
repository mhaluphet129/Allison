$(document).ready(()=>{
     function validate(){
 alert("cute si bujoy");
         let pass = $("#password").val();
         let confirm = $("#confirm").val();
         let name = $("#name").val();
         let email = $("#email").val();
         let username = $("username").val();
         
         if ( pass != confirm )
              alert("Passwords are not match.)
         else
              alert("Name: " + name + "\nEmail:" + email + "\nUsername:" + username + "\nPassword: " + password );

         /*
          Alli is cute
         */
     }


     $("#register").click(validate);
})
