function Validate() {
    var firstname = document.registerhere.firstname;
    var lastname = document.registerhere.lastname;
    var email = document.registerhere.email;
    var gender = document.registerhere.gender;
    var city = document.registerhere.city;
    var password = document.registerhere.password;
// Validating Username
    
var name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
if (!firstName.value.match(name)||firstName.value =="" ||firstName.value.length < 2){
    firstName.style.border = '1px solid red';
    document.getElementById("fname").innerHTML = "Please enter a name with letters only(atelast 5 characters)";

    return false;

} 
// if(firstName.value.length < 2){
//     firstName.style.border = '1px solid red';
//     document.getElementById("fname").innerHTML = "Expected more than two characters";

//     return false;

// }
if (!lastName.value.match(name)){
    lastName.style.border = '1px solid red';
    document.getElementById("lname").innerHTML = "Please enter a name with letters only";

    return false;

} if(firstName.value.length < 2){
    lastName.style.border = '1px solid red';
    document.getElementById("lname").innerHTML = "Expected more than two characters";

    return false;
}
// Validating email address.
const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value.match(emailregex)) {
        email.style.border = '1px solid red'; 
        document.getElementById("emailfield").innerHTML = "please enter a valid email address";
      return false;
    }

// validating password field.
if(password.value.length < 5){
    lastName.style.border = '1px solid red';
    document.getElementById("pwd").innerHTML = "Please input a complex password";
}

}