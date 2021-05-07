const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_two = document.getElementById('password_two');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password_twoValue = password_two.value.trim();

    // Username conditions
    if(usernameValue === ''){
        // show error // add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        // add success class
        setSuccessFor(username);
    };

    // Email conditions
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else{
        setSuccessFor(email);
    };

    // Password conditions
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    } else {
        // add success class
        setSuccessFor(password);
    };

    // Password check conditions
    if(password_twoValue === ''){
        setErrorFor(password_two, 'Password cannot be blank');
    } else if(passwordValue !== password_twoValue){
        setErrorFor(password_two, 'Passwords does not match');
    } else {
        // add success class
        setSuccessFor(password_two);
    };

    // show a success message
    
};

function setErrorFor(input, message){
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function isEmail(email){
    return /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(email);
}