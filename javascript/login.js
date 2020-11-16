let email=document.getElementById("email");
let errore=document.getElementById("errore");
let password=document.getElementById("password");
let errorpass=document.getElementById("errorpass");
function validates(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var strongRegex = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
   if(!regexp.test(email.value))
   {
    errore.innerHTML="Enter a valid email address";
    errore.style="color:red";
    return false;
   }
   if(!strongRegex.test(password.value))
   {
    errorpass.innerHTML="Password incorrect";
    errorpass.style="color:red";
    return false;
   }
}
function passwordchanged() {
    var strength = document.getElementById('strength');
    var strongRegex = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = /^(?=.{6,}).*$/;
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}
    

