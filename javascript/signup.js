let firstname=document.getElementById("firstname");
let errorf=document.getElementById("errorf");
let lastname=document.getElementById("lastname");
let errorl=document.getElementById("errorl");
let email=document.getElementById("email");
let errore=document.getElementById("errore");
let phone=document.getElementById("phone");
let errorphone=document.getElementById("errorphone");

let password=document.getElementById("password");
let errorpass=document.getElementById("errorpass");
let password1=document.getElementById("password1");
let errorpass1=document.getElementById("errorpass1");
function validate(){
 let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let exp1=/^([0-9]{10})$/;
    let exp=/^[0-9]{3}[-. ][0-9]{3}[-. ][0-9]{4}$/;
    let pass=/^(?=.{6,10}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
   
    if(firstname.value.trim()==""||(!regexp.test(email.value))||(!(exp1.test(phone.value)||exp.test(phone.value))))
    {
      if(firstname.value.trim()==""){
        errorf.innerHTML="Enter your first name";
        errorf.style="color:red";
        // return false;
      }
      if(!regexp.test(email.value)){
          errore.innerHTML="Enter a valid email address";
          errore.style="color:red";
          // return false;
        }
      if(!(exp1.test(phone.value)||exp.test(phone.value)))
        {
         errorphone.innerHTML="Enter a valid phone number ";
         errorphone.style="color:red";
        // return false;
        }
        return false;
            
    }
    if(!pass.test(password.value))
    {
      
        return false;
     
    }
    else{
      
        if(password.value!=password1.value){
             errorpass1.innerHTML="Password not matched";
             errorpass1.style="color:red";
             return false;

        }
        return true;
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
    
