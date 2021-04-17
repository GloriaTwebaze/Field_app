function register() {
    firstName = document.registermember.firstname;
    lastName = document.registermember.lastname;
    nin = document.registermember.nin;
    phoneNumber = document.registermember.phone_num;
    age = document.registermember.date;
    
// validating userName
    var name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (!firstName.value.match(name)){
        firstName.style.border = '1px solid red';
        document.getElementById("fname").innerHTML = "First Name should be characters only, no numbers";

        return false;

    } if(firstName.value.length < 2){
        firstName.style.border = '1px solid red';
        document.getElementById("fname").innerHTML = "Expected more than two characters";

        return false;

    }
    if (!lastName.value.match(name)){
        lastName.style.border = '1px solid red';
        document.getElementById("lname").innerHTML = "Last Name should be characters only, no numbers";

        return false;

    } if(firstName.value.length < 2){
        lastName.style.border = '1px solid red';
        document.getElementById("lname").innerHTML = "Expected more than two characters";

        return false;
    }
// validating NIN
var ninReg = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
if (!nin.value.match(ninReg)){
    nin.style.border = '1px solid red';
    document.getElementById("nin_no").innerHTML = "please enter a valid NIN";

     return false;

} 
// validating nin length
if (nin.value.length < 13 || nin.value.length > 13) {
    nin.style.border = '1px solid red';
    document.getElementById("nin_no").innerHTML = "NIN should be exactly 13characters"
    return false;
}
// Validating Age for the driver
if (role.value == "driver" && date.value <30) {
    document.getElementById("dob").innerHTML = "The user is eligible";
    return false;
}
// validating age for the conductor
if (role.value=="conductor" && date.value <18) {
    document.getElementById("dob").innerHTML = "The user is eligible";
    return false;
}

// validating phone
var phone = /^+256/g;
if (!phone_num.value.match(phone)){
    phone_num.style.border = '1px solid red';
    document.getElementById("contact").innerHTML = "Invalid phone number";

     return false;
}


}
