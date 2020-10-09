let name, username, email, password, confirm;

function init(){
    name = $("#name").val();
    email = $("#email").val();
    username = $("#username").val();
    password = $("#password").val();
    confirm = $("#confirm").val();
}

function validate(){
    alert(name+" "+email+" "+username+" "+password+" "+confirm);
}

$(".login-button").click(validate);

$(document).ready(init);

