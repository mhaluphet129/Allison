$(document).ready(()=>{
     function validate(){
         let pass = $("#password").val();
         let confirm = $("#confirm").val();
         let name = $("#name").val();
         let email = $("#email").val();
         let username = $("username").val();
         
         if ( pass != confirm )
              alert("Passwords are not match.)
         else if ( pass == '' || confirm == '' || name == '' || email == '' || username == '' )
              alert("Provide the blank spaces.");
         else
              alert("Name: " + name + "\nEmail:" + email + "\nUsername:" + username + "\nPassword: " + password );

         /*
          Alli is cute
         */
     }


     $("#register").click(validate);
})
