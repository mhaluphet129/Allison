let name, username, email, password, confirm;

let init = () =>{
    name = $("#name").val();
    email = $("#email").val();
    username = $("#username").val();
    password = $("#password").val();
    confirm = $("#confirm").val();
}

let validate = () => {
    alert(name+" "+email+" "+username+" "+password+" "+confirm);
}

$(".login-button").click(validate);

$(document).ready(init);

