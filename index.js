// random password generator

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

  const lowerCase = "qbcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+";


  let allowedChars = " ";
  let password = " ";


  allowedChars += includeLowercase ? lowerCase : "";
  allowedChars += includeUppercase ? upperCase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";


  if (length <= 0){
    return 'password must be at least one character ';
  }
  if(allowedChars.length === 0){
    return 'password must select at least one character ';
  }



 for (let i = 0 ; i <length; i++){

     const randomIndex = Math.floor(Math.random() * allowedChars.length);
     password += allowedChars[randomIndex];
 }


 return password;
}



const passwordlength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordlength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated password : ${password}`);


function getName(){
 
    const userName = document.getElementById("name").value;
    const displayPass = document.getElementById("displayPass");

     
    displayPass.textContent = `hey ${userName} your password is ${password}`;

    

}
