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

function printString(str) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < str.length) {
            const char = str.charAt(i);
            const outputDiv = document.getElementById("output");
            outputDiv.innerHTML += char;
            i++;
        } else {
            clearInterval(interval);
        }
    }, 200);
}

printString("Hello! I'm Oluwatobiloba ✌");