// Dom elements
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');

const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    Symbol: getRandomSymbol
};

//Generate event listen
generateEL.addEventListener('click', () => {
    const length = +lengthEL.value;
    const hasLower = lowercaseEL.checked;
    const hasUpper = uppercaseEL.checked;
    const hasNumber = numbersEL.checked;
    const hasSymbol = symbolsEL.checked;

    resultEL.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = '';

    const typesCount = lower + upper + number + symbol;

    console.log('typesCount: ', typesCount);

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (item => Object.values(item) [0]);

    console.log('typesArr: ', typesArr);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type) [0];
            console.log('funcName: ', funcName);

            generatedPassword += randomFunc[funcName] ();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);
}

//Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
    
    let generatePassword = '';

    const typesCount = lower + upper + number + symbol;

    console.log('typesCount: ', typesCount)

    const typesArr = [lower, upper, number, symbol];

    console.log('typesArr: ', typesArr);

}

//generate random password

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol () {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
