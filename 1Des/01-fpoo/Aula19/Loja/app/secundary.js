const eyes = document.querySelectorAll('.eye')
const login = document.getElementById('login')
const register = document.getElementById('register')
const title = document.getElementById('title')

function heart() {
    const hearts = document.querySelectorAll('.heart')
    console.log(hearts)
    hearts.forEach(heart => {
        heart.onclick = () => {
            heart.classList.toggle('liked')
            if (heart.classList.contains('liked')) {
                heart.src = '../assets/heartfill.png'
            } else {
                heart.src = '../assets/heart.png'
            }
        }
    })
}


title.onclick = () => {
    document.querySelector('.container').classList.remove('hidden')
    document.querySelector('.login').classList.add('hidden')
    document.querySelector('.register').classList.add('hidden')
}
login.onclick = () => {
    document.querySelector('.container').classList.add('hidden')
    document.querySelector('.login').classList.remove('hidden')
    document.querySelector('.register').classList.add('hidden')
}

register.onclick = () => {
    document.querySelector('.container').classList.add('hidden')
    document.querySelector('.login').classList.add('hidden')
    document.querySelector('.register').classList.remove('hidden')
}

eyes.forEach(eye => {
    eye.onclick = () => {
        if (eye.classList.contains('view')) {
            eye.classList.remove('view')
            eye.previousElementSibling.type = 'password'
            eye.src = '../assets/view.png'
        } else {
            eye.classList.add('view')
            eye.previousElementSibling.type = 'text'
            eye.src = '../assets/hide.png'
        }
    }
})