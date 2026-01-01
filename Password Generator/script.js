let input = document.querySelector('#input')

let btn = document.querySelector('#generateBtn')

let copyPass = document.querySelector('#copy')

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+{}[]?"

const allChars = upperCase + lowerCase + numbers + symbols

const length = 12;

function generatePassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    

    input.value = password

}

btn.addEventListener('click',function(){
    generatePassword()
})

function copyPassword(){
    input.select();
    document.execCommand("copy")
}

copyPass.addEventListener('click',function(){
    copyPassword()
})