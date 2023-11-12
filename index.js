
const bars= document.querySelector(".fa-bars");

const xmark=document.querySelector(".fa-xmark")

const list=document.querySelector(".lists")
bars.addEventListener("click",()=>{

    list.classList.toggle("show")
    
})
console.log(xmark)
xmark.addEventListener("click",()=>{
list.classList.remove("show")


})