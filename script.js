const settings = document.querySelector(".settings")
const colortext = document.querySelector(".colortext")

settings.addEventListener ("click", (e)=>{
    colortext.classList.toggle("show")
})

const red = document.getElementById("red")
const orange = document.getElementById("orange")
const green = document.getElementById("green")
const blue = document.getElementById("blue")
const pink = document.getElementById("pink")
const empty = document.querySelector(".empty")
const emptytoo = document.querySelector(".emptytoo")




red.addEventListener ("click", (e)=>{
    empty.classList.add("toprightr")
    emptytoo.classList.add("bottomleftr")
})


orange.addEventListener ("click", (e)=>{
    empty.classList.add("toprighto")
    emptytoo.classList.add("bottomlefto")
})

green.addEventListener ("click", (e)=>{
    empty.classList.add("toprightg")
    emptytoo.classList.add("bottomleftg")
})

blue.addEventListener ("click", (e)=>{
    empty.classList.add("toprightb")
    emptytoo.classList.add("bottomleftb")

})

pink.addEventListener ("click", (e)=>{
    empty.classList.add("toprightp")
    emptytoo.classList.add("bottomleftp")
})







// window.addEventListener('scrollend', (e)=>{
//     changeNav.classList.toggle('secNav', this.window.scrollY)
  
