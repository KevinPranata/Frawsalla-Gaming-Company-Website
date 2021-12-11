var txtName = document.getElementById('txt-name');
var rbGender = document.getElementsByName('gender');
var txtEmail = document.getElementById('txt-email');
var txtPassword = document.getElementById('txt-password');
var txtConfirmPass = document.getElementById('txt-confirm-password');
var cbTermCondition = document.getElementById('cb-term-condition');
var cbTermConditionContainer = document.getElementById('cb-term-condition-container');
var txtForm = document.getElementById('form');
var successContainer = document.getElementById('success-registered-container');
var formContainer = document.getElementById('regform-input-container')

var ErrorName = document.getElementById('lbl-error-name');
var ErrorGender = document.getElementById('lbl-error-gender');
var ErrorEmail = document.getElementById('lbl-error-email');
var lblErrorPassword = document.getElementById('lbl-error-password');
var lblErrorConfirmPass = document.getElementById('lbl-error-confirm-password');

var flag = true;
form.addEventListener('submit', (e) => {
    successContainer.classList.add("hide")
 
    flag = true;
    resetLblError();
    resetEffectError();

    validateName();
    validateGenderRb();
    validateEmail();
    validatePassword();
    validateConfirmPass();
    validateTermCondition();

    if (flag == false) {
        e.preventDefault();
    }
})


function resetLblError() {
    lblErrorName.innerHTML = "";
    lblErrorEmail.innerHTML = "";
    lblErrorPassword.innerHTML = "";
    lblErrorConfirmPass.innerHTML = "";
    lblErrorGender.innerHTML = "";
}

function resetEffectError() {
    txtEmail.classList.remove("error");
    txtName.classList.remove("error");
    txtPassword.classList.remove("error");
    txtConfirmPass.classList.remove("error");
    cbTermConditionContainer.classList.remove("error");
}

function validateName(){
    if (txtName.value === '' || txtName.value == null) {
        lblErrorName.innerHTML = "Name is required";
        txtName.classList.add("error");
        flag = false;
    } else if (txtName.value.length < 3) {
        lblErrorName.innerHTML = "Name length must be at least 3 characters";
        txtName.classList.add("error");
        flag = false;
    }
}

function validateGenderRb() {
    var isChecked = false;
    for (i = 0; i < rbGender.length; i++) {
        if (rbGender[i].checked) {
            isChecked = true;
        }
    }

    if (isChecked == false) {
        lblErrorGender.innerHTML = "Please choose one of the option above";
        flag = false;
    }
}

function validateEmail(){
    var isValidEmail = true;
    var atEmail = txtEmail.value.indexOf('@');

    if(txtEmail.value.length == 0){
        lblErrorEmail.innerHTML = "Email is required";
        txtEmail.classList.add("error");
        isValidEmail = false;
    }
    else if(txtEmail.value.length < 2){
        lblErrorEmail.innerHTML = "Please enter a valid email address";
        txtEmail.classList.add("error");
        isValidEmail = false;
    }

    if(isValidEmail == false){
        flag = false;
    }
}

function validatePassword(){
    if (txtPassword.value === '' || txtPassword.value == null) {
        lblErrorPassword.innerHTML = "Password is required";
        txtPassword.classList.add("error");
        flag = false;
    } else if (txtPassword.value.length <= 8) {
        lblErrorPassword.innerHTML = "Password length must be at least 8 characters";
        txtPassword.classList.add("error");
        flag = false;
    }
}

function validateConfirmPass(){
    if (txtConfirmPass.value === '' || txtConfirmPass.value == null) {
        lblErrorConfirmPass.innerHTML = "Confirm password is required";
        txtConfirmPass.classList.add("error");
        flag = false;
    } else if (txtConfirmPass.value.length <= 8) {
        lblErrorConfirmPass.innerHTML = "Password length must be at least 4 characters";
        txtConfirmPass.classList.add("error");
        flag = false;
    }else if (txtConfirmPass.value != txtPassword.value) {
        lblErrorConfirmPass.innerHTML = "Password didn't match";
        txtConfirmPass.classList.add("error");
        flag = false;
    } 
}

function validateTermCondition(){
    if (cbTermCondition.checked == false) {
        cbTermConditionContainer.classList.add("error");
        flag = false;
    }
}


var url_string = window.location.href; 
var url = new URL(url_string);
var nameRegistered = url.searchParams.get("name");
var nameRegisteredH1 = document.getElementById('registered-name')

if(nameRegistered != null){
    formContainer.classList.add("hide")
    successContainer.classList.remove("hide")
    nameRegisteredH1.innerHTML = "Hello, " + nameRegistered
}