

// const red = document.getElementById("red")
// const orange = document.getElementById("orange")
// const green = document.getElementById("green")
// const blue = document.getElementById("blue")
// const pink = document.getElementById("pink")
// const empty = document.querySelector(".empty")
// const emptytoo = document.querySelector(".emptytoo")
// const imageborder = document.querySelector(".imageborder")
// const secimageborder =document.querySelector(".secimageborder")

// red.addEventListener ("click", (e)=>{
//     empty.classList.add("toprightr")
//     emptytoo.classList.add("bottomleftr")

//     empty.classList.remove("toprighto")
//     emptytoo.classList.remove("bottomlefto")

//     empty.classList.remove("toprightg")
//     emptytoo.classList.remove("bottomleftg")

//     empty.classList.remove("toprightb")
//     emptytoo.classList.remove("bottomleftb")

//     empty.classList.remove("toprightp")
//     emptytoo.classList.remove("bottomleftp")

   
   
//     imageborder.classList.add("bottomrightrl")
//     secimageborder.classList.add("topftrl")

//     imageborder.classList.remove("bottomrightol")
//     secimageborder.classList.remove("topleftol")

//     imageborder.classList.remove("bottomrightgl")
//     secimageborder.classList.remove("topleftgl")

//     imageborder.classList.remove("bottomrightbl")
//     secimageborder.classList.remove("topleftbl")

//     imageborder.classList.remove("bottomrightpl")
//     secimageborder.classList.remove("topleftpl")
// })


// orange.addEventListener ("click", (e)=>{
   
//     empty.classList.remove("toprightr")
//     emptytoo.classList.remove("bottomleftr")

//     empty.classList.add("toprighto")
//     emptytoo.classList.add("bottomlefto")


//     empty.classList.remove("toprightg")
//     emptytoo.classList.remove("bottomleftg")

//     empty.classList.remove("toprightb")
//     emptytoo.classList.remove("bottomleftb")

//     empty.classList.remove("toprightp")
//     emptytoo.classList.remove("bottomleftp")


   
   
//     imageborder.classList.remove("bottomrightrl")
//     secimageborder.classList.remove("topeftrl")

//     imageborder.classList.add("bottomrightol")
//     secimageborder.classList.add("topleftol")


//     imageborder.classList.remove("bottomrightgl")
//     secimageborder.classList.remove("topleftgl")

//     imageborder.classList.remove("bottomrightbl")
//     secimageborder.classList.remove("topleftbl")

//     imageborder.classList.remove("bottomrightpl")
//     secimageborder.classList.remove("topleftpl")
// })

// green.addEventListener ("click", (e)=>{
   
//     empty.classList.remove("toprightr")
//     emptytoo.classList.remove("bottomleftr")

//     empty.classList.remove("toprighto")
//     emptytoo.classList.remove("bottomlefto")

//     empty.classList.add("toprightg")
//     emptytoo.classList.add("bottomleftg")

//    empty.classList.remove("toprightb")
//     emptytoo.classList.remove("bottomleftb")

//     empty.classList.remove("toprightp")
//     emptytoo.classList.remove("bottomleftp")



//     imageborder.classList.remove("bottomrightrl")
//     secimageborder.classList.remove("topleftrl")

//     imageborder.classList.remove("bottomrightol")
//     secimageborder.classList.remove("topleftol")

//     imageborder.classList.add("bottomrightgl")
//     secimageborder.classList.add("topleftgl")

//     imageborder.classList.remove("bottomrightbl")
//     secimageborder.classList.remove("topleftbl")

//     imageborder.classList.remove("bottomrightpl")
//     secimageborder.classList.remove("topleftpl")
// })

// blue.addEventListener ("click", (e)=>{
//     empty.classList.remove("toprightr")
//     emptytoo.classList.remove("bottomleftr")

//     empty.classList.remove("toprighto")
//     emptytoo.classList.remove("bottomlefto")

//     empty.classList.remove("toprightg")
//     emptytoo.classList.remove("bottomleftg")

//    empty.classList.add("toprightb")
//     emptytoo.classList.add("bottomleftb")

//     empty.classList.remove("toprightp")
//     emptytoo.classList.remove("bottomleftp")



//     imageborder.classList.remove("bottomrightrl")
//     secimageborder.classList.remove("topleftrl")

//     imageborder.classList.remove("bottomrightol")
//     secimageborder.classList.remove("topleftol")

//     imageborder.classList.remove("bottomrightgl")
//     secimageborder.classList.remove("topleftgl")

//     imageborder.classList.add("bottomrightbl")
//     secimageborder.classList.add("topleftbl")

//     imageborder.classList.remove("bottomrightpl")
//     secimageborder.classList.remove("topleftpl")
// })

// pink.addEventListener ("click", (e)=>{
//     empty.classList.remove("toprightr")
//     emptytoo.classList.remove("bottomleftr")

//     empty.classList.remove("toprighto")
//     emptytoo.classList.remove("bottomlefto")

//     empty.classList.remove("toprightg")
//     emptytoo.classList.remove("bottomleftg")

//    empty.classList.remove("toprightb")
//     emptytoo.classList.remove("bottomleftb")

//     empty.classList.add("toprightp")
//     emptytoo.classList.add("bottomleftp")



//     imageborder.classList.remove("bottomrightrl")
//     secimageborder.classList.remove("topleftrl")

//     imageborder.classList.remove("bottomrightol")
//     secimageborder.classList.remove("topleftol")

//     imageborder.classList.remove("bottomrightgl")
//     secimageborder.classList.remove("topleftgl")

//     imageborder.classList.remove("bottomrightbl")
//     secimageborder.classList.remove("topleftl")

//     imageborder.classList.add("bottomrightpl")
//     secimageborder.classList.add("topleftpl")
// })



const menue = document.getElementById("menue")
const sidehead = document.querySelector(".sidehead")

menue.addEventListener ("click", (e)=>{
    sidehead.classList.toggle("sideheadcomein")
})



const heroclick = document.querySelector(".heroclick")
const aboutclick = document.querySelector(".aboutclick")
const servicesclick = document.querySelector(".servicesclick")
const portfolioclick = document.querySelector(".portfolioclick")
const contactclick = document.querySelector(".contactclick")

window.addEventListener("DOMContentLoaded", (e)=>{
  heroclick.classList.add("active")
  aboutclick.classList.remove("active")
  servicesclick.classList.remove("active")
  portfolioclick.classList.remove("active")
  contactclick.classList.remove("active")
})



heroclick.addEventListener("click", (e)=>{
  heroclick.classList.add("active")
  aboutclick.classList.remove("active")
  servicesclick.classList.remove("active")
  portfolioclick.classList.remove("active")
  contactclick.classList.remove("active")

})

aboutclick.addEventListener("click", (e)=>{
 heroclick.classList.remove("active")
  aboutclick.classList.add("active")
  servicesclick.classList.remove("active")
  portfolioclick.classList.remove("active")
  contactclick.classList.remove("active")


})


servicesclick.addEventListener("click", (e)=>{
heroclick.classList.remove("active")
  aboutclick.classList.remove("active")
  servicesclick.classList.add("active")
  portfolioclick.classList.remove("active")
  contactclick.classList.remove("active")

})


portfolioclick.addEventListener("click", (e)=>{
 heroclick.classList.remove("active")
  aboutclick.classList.remove("active")
  servicesclick.classList.remove("active")
  portfolioclick.classList.add("active")
  contactclick.classList.remove("active")

})


contactclick.addEventListener("click", (e)=>{
  heroclick.classList.remove("active")
  aboutclick.classList.remove("active")
  servicesclick.classList.remove("active")
  portfolioclick.classList.remove("active")
  contactclick.classList.add("active")

})





const btn = document.getElementById('send-btn');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();


   btn.value = 'Sending...';

   const serviceID = 'service_o9k9zpn';
   const templateID = 'template_vfb6bxu';
  
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Message Sent Successfully !!');
      document.getElementById('form').reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});




// window.addEventListener('scrollend', (e)=>{
//     changeNav.classList.toggle('secNav', this.window.scrollY)
  
