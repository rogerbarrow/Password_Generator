//DOM elements 
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('genarate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol
};
// Generate Event 
generateEl.addEventListener('click', () => {
  const length = lengthEl.value;
   const hasLower = lowercaseEl.checked;
   const hasUpper = UppercaseEl.checked;
   const hasNumber = numbersEl.checked;
   const hasSymbol = symbolsEl.checked;

   resultEL.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
    );
});

// Copy passworld  to clipboard
clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const passsword = resultEl.innerText;

  if(!passsword) {
    return;
  }
  textarea.value = passsword;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password Copie to clipboard')
})


//Generate  passsword function
function generatePassword(lower, upper, number, symbols, length) {
  // 1. Init  pw var
  // 2. Filter out unchecked types
  // 3. loop over lenght call generatr function for each type
  // 4. add final pw to pw var and return
  let generatePassword = '';

  const typesCount = lower + upper + number + symbols;

  console.log('typesCount:', typesCount);

  const typesArr = [{lower}, {upper}, {number}, {symbols}].filter(item => Object.value(item)[0]);

  console.log('typesArr: ', typesArr ) 
  if(typesCount === 0) {
    return '';
  }
  for(let i = 0; i < length; i += typesCount){
typesArr.forEach(type => {
  const funcName = Object.keys(type)[0];
  generatedPassword += randomFunc[funcName]();
  console.log('funcName', funcName);
})
  }
  \const finalPassword = generatePassword.slice(0, lenght);
  return finalPassword;
}

//Generator functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }


  function getRandomSymbol() {
     const symbols = '!@#$%^&*(){}[]=<>/,.=.'
     return symbols[Math.floor(Math.random() * symbols.length)];

 
  }
