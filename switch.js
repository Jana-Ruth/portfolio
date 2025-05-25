
const settings = document.querySelector(".settings")
const colortext = document.querySelector(".colortext")

const settingcolor = document.querySelector(".settingcolor")

settings.addEventListener("click", (e) => {
    settingcolor.classList.toggle("show")
})



window.addEventListener("scroll", (e) => {
    settingcolor.classList.remove("show")
})





const alternatestyles = document.querySelectorAll(".alternatestyles");
function setActiveStyle(color) {
    alternatestyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }

        else {
            style.setAttribute("disabled", "true");
        }
    })
}



const alternatestyle = document.querySelectorAll(".alternatestyle");
function setActiveTheme(color) {
    alternatestyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }

        else {
            style.setAttribute("disabled", "true");
        }
    })
}


const moon = document.getElementById("moon")
const sunny = document.getElementById("sunny")


moon.addEventListener("click", (e) => {
    sunny.style.display = "block"
    moon.style.display = "none"
})

sunny.addEventListener("click", (e) => {
    sunny.style.display = "none"
    moon.style.display = "block"
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

const herosub = document.querySelector(".hero-sub")
const herobanner = document.querySelector(".herobanner")
const aboutme = document.querySelector(".aboutme")
const learn = document.querySelector(".learn")
const personal = document.querySelector(".personal")
const levelbars = document.querySelector(".levelbars")
const edu = document.querySelector(".edu")
const eachservice = document.querySelector(".eachservice")
const curveimg = document.querySelector(".curveimg")
const absolute = document.querySelector(".absolute")
const eachcontact = document.querySelector(".eachcontact")
const questions = document.querySelector(".questions")
const atservices = document.querySelector(".atservices")
const contactform = document.querySelector(".contact-form")

sr.reveal(`.hero-sub, .herobanner,
            .aboutme, .learn,
            .personal, .levelbars,
            .edu, .eachservice,
            ".curveimg", .absolute,
            .eachcontact, .questions, .atservices, .contact-form`, {
    interval: 200
})