// const { title } = require("process")

/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('nav__link');

function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')
        borderText = document.getElementById('border-text')


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // console.log(sectionId)
            borderText.textContent = sectionId;
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

// function printString(str) {
//     let i = 0;
//     const interval = setInterval(() => {
//         if (i < str.length) {
//             const char = str.charAt(i);
//             const outputDiv = document.getElementById("output");
//             outputDiv.innerHTML += char;
//             i++;
//         } else {
//             clearInterval(interval);
//         }
//     }, 200);
// }

// printString("Welcome to my portfolio");



function sendEmail(title, email, message) {

    function sendMail(title, email, message) {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '17802d2f93mshb3a0c25585f3219p1d255cjsn6d073cd2df31',
                'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
            },
            body: `{"personalizations":[{"to":[{"email":"tobiloba.a.salau@gmail.com"}],"subject":"${title}"}],"from":{"email":"${email}"},"content":[{"type":"text/plain","value":"${message}"}]}"`
        };

        fetch('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

    }
    // let tit = JSON.stringify(title)
    // console.log(title, email, message);
    // console.log(typeof (title))
    // Call sendMail with the provided parameters
    sendMail(title, email, message);
}

function sendEmailToApi(event) {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('body').value.trim();

    if (!title || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    sendEmail(title, email, message);
    document.getElementById('title').value = '';
    document.getElementById('email').value = '';
    document.getElementById('body').value = '';
}


function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
