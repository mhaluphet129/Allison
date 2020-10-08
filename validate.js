$(document).ready(()=>{
     function validate(){
 alert("cute si bujoy");
         let pass = $("#password");
         let confirm = $("#confirm");
         let name = $("#name");
         let email = $("#email");
         let username = $("username");
         
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
