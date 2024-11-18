document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();


const nameForm = document.getElementById("name").value;
const lastName = document.getElementById("lastname").value;
const emailAddress = document.getElementById("email").value;
const generalEnquiry = document.getElementById("general-enquiry");
const supportEnquiry = document.getElementById("support-request");
const messageTxt = document.getElementById("message-textarea").value;
const checkboxValue = document.getElementById("agreement");


let isValid = true;


let nameError = document.getElementById("name-error");
let lastNameError = document.getElementById("lastname-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let queryError = document.getElementById("query-error");
let checkboxError = document.getElementById("agreement-error");


var namePattern = /^[a-zA-Z\s-]+$/;
var lastNamePattern = /^[a-zA-Z\s-]+$/;


//Name validation

if(nameForm == ""){
    isValid = false;
    nameError.textContent = "This field is required";
    nameError.style.display = "block";
} else{
    nameError.style.display = "none";
}
//Last name validation
if(lastName == ""){
    isValid = false;
    lastNameError.textContent = "This field is required";
    lastNameError.style.display = "block";
} else{
    lastNameError.style.display = "none";
}

//email validation
if(emailAddress == ""){
    isValid = false;
    emailError.textContent = "Please enter a valid email address";
    emailError.style.display = "block";
}
else{
    emailAddress.style.display = none;
}

//Radio Box validation
if(generalEnquiry.checked == false){
    isValid = false;
    queryError.textContent = "Please select a query type";
    queryError.style.display = "block";
} else{
    queryError.style.display = "none";
}

if(supportEnquiry.checked == false){
    isValid = false;
    queryError.textContent = "Please select a query type";
    queryError.style.display = "block";
} else{
    queryError.style.display = "none";
}

//Message validation

if(messageTxt == ""){
    isValid = false;
    messageError.textContent = "This field is required";
    messageError.style.display = "block";
} else{
    messageError.style.display = "none";
}

//checkbox validation
if(checkboxValue.checked == false){
    isValid = false;
    checkboxError.textContent = "To submit this form, please consent to being contacted";
    checkboxError.style.display = "block";
} else{
    checkboxError.style.display = "none";
}



});


