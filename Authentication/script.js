let signUpForm = document.querySelector('#signUpForm')
let loginForm = document.querySelector('#logInForm')
let signUp = document.querySelector('.signUp')
let login = document.querySelector('.login')

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let userData = {
        username: e.target.user.value.trim(),
        password: e.target.password.value,
    }

    localStorage.setItem('userData', JSON.stringify(userData))

    document.querySelector('#submit').innerHTML = "Saving..."

    signUpForm.reset()

    setTimeout(function () {
        
        signUp.classList.add('remove')
        login.classList.remove('remove')
    }, 3000)



})


loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let loginData = {
        username: e.target.user.value.trim(),
        password: e.target.password.value
    }

    let savedData = JSON.parse(localStorage.getItem('userData'))

    // create elements
    const statusDiv = document.createElement('div')
    const heading = document.createElement('h1')

    // add class
    statusDiv.classList.add('status')

    // add text
    // heading.innerText = 'Access Granted'

    // structure
    statusDiv.appendChild(heading)

    // add to DOM
    let main = document.querySelector('#main')


    if (savedData.username == loginData.username && savedData.password == loginData.password) {

        signUp.classList.add('remove')
        login.classList.add('remove')

        heading.innerHTML = "Access Granted"
        main.appendChild(statusDiv)

    } else {
        
        signUp.classList.add('remove')
        login.classList.add('remove')

        heading.innerHTML = "Access Denied"
        heading.classList.add('text')
        

        main.appendChild(statusDiv)
    }


})