// Assignment Code
let generateBtn = document.querySelector("#generate");
let pwdLength = 0;
let specChar = false;
let numChar = false;
let capChar = false;
let pwdChars = "";
let randPassword = "";

// Write password to the #password input                 
function writePassword() 
{
  // calls the generatePassword and then writes the password into the id of password
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Prompts for password criteria     
function passwordCrit() 
{
  // prompt to determine the length of the password
  pwdLength = prompt("How many characters does the password need?");
  // checks if the length is within the criteria then it asks for the rest of the criteria
  if (pwdLength >= 8 && pwdLength <= 128) 
  {
    specChar = confirm("Would you like special characters?");
    numChar = confirm("Would you like numbers?");
    capChar = confirm("Would you like to use capital letters");
    
    }
    // security for when someone tries to input a number too little or too high or any other character.
    else 
    {
      alert("Pick a number of 8 characters and a max of 128 characters for your password length.")
      passwordCrit();
    }
};
// Generates random password
function generatePassword() 
{
  //calls password criteria function to get the criteria for passwords  
  passwordCrit();
  // if else statements to determin if the criteria was met for diffferent variations of passwords 
    //and gererates the random password. all blocks of code are the same with the exception of the criteria. 
    if (specChar === true && numChar === true && capChar === true) 
    {
      // creates the array of pwdChars with the different criteria provided in the if statement
      pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/";
      // generates the random password by taking the the length of the password stated above and using the array letters and randomly 
        //selecting the correct length of letters, numbers or special characters
      randPassword = Array(parseInt(pwdLength)).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
      return randPassword;
    }
    else if (specChar === true && numChar === true && capChar === false)
    {
      pwdChars = "0123456789abcdefghijklmnopqrstuvwxyz~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/";
      randPassword = Array(parseInt(pwdLength)).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
      return randPassword;
    }
    else if (specChar === true && numChar === false && capChar === true)
    {
      pwdChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/";
      randPassword = Array(parseInt(pwdLength)).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
      return randPassword;
    }
    else if (specChar === true && numChar === false && capChar === false)
    {
      pwdChars = "abcdefghijklmnopqrstuvwxyz~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/";
      randPassword = Array(parseInt(pwdLength)).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
      return randPassword;
    }
    else if (specChar === false && numChar === true && capChar === true)
    {
      pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      randPassword = Array(parseInt(pwdLength)).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
      return randPassword;
    }
    else if (specChar === false && numChar === true && capChar === false)
    {
      pwdChars = "0123456789abcdefghijklmnopqrstuvwxyz";
      randPassword = Array(parseInt(pwdLength)).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
      return randPassword;
    }
    else if (specChar === false && numChar === false && capChar === true)
    {
      pwdChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      randPassword = Array(parseInt(pwdLength)).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
      return randPassword;
    }
    else
    {
      pwdChars = "abcdefghijklmnopqrstuvwxyz";
      randPassword = Array(parseInt(pwdLength)).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
      return randPassword;
    }

}

// when the generate password button is clicked the write password function is ran.
generateBtn.addEventListener("click", writePassword);
