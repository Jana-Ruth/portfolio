
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