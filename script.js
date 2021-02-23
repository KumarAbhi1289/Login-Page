const SignIn = document.getElementById('SignIn');
const SignUp = document.getElementById('SignUp');
SignUp.style.left = "100%";
SignIn.style.right = "0%";

document.getElementById('signUpNow').addEventListener('click', () => {
    SignIn.style.right = "100%";
    SignUp.style.left = "0%";

});
document.getElementById('LoginNow').addEventListener('click', () => {
    SignIn.style.right = "0%";
    SignUp.style.left = "100%";

});


const toggle = ()=>{
    if(document.getElementById('password1').type == 'password'){
        document.getElementById('password1').type = 'text';
        document.getElementById('eye1').innerHTML ='<i class="fa fa-eye" aria-hidden="true"></i>';
    }
    else{
        document.getElementById('password1').type = 'password';
        document.getElementById('eye1').innerHTML ='<i class="fa fa-eye-slash" aria-hidden="true"></i>';
    }

    if(document.getElementById('password2').type == 'password'){
        document.getElementById('password2').type = 'text';
        document.getElementById('eye2').innerHTML ='<i class="fa fa-eye" aria-hidden="true"></i>';
    }
    else{
        document.getElementById('password2').type = 'password';
        document.getElementById('eye2').innerHTML ='<i class="fa fa-eye-slash" aria-hidden="true"></i>';
    }
}