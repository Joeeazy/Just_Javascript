//grab the input using html id
const passwordBox = document.getElementById("password");

//maximum length of the password to be generated
const len = 12;

//characters to include in the password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()~><?-+_[]{}";

const allChars = upperCase + lowerCase + number + symbols;

//function that generates the random password onclick html button
function createPassword(){
    //create an empty variable
    let password = "";
    //append random values to password
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    //when len == 12 > password created add other chars
    while(len > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    //display the password in out input box
    passwordBox.value = password;
}

//function to copy the password that has been generated onclick html img
function copyPassword(){
    //selects generated chars from the input box
    passwordBox.select();
    //command that copies
    document.execCommand("copy");
}