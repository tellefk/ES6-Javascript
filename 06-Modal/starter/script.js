'use strict';



const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const btnCloseModal=document.querySelector(".close-modal")
const btnOpenModal=document.querySelectorAll(".show-modal")

const CloseModal = function(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

const OpenModal = function(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

for (let i=0;i<btnOpenModal.length;i++) {
    btnOpenModal[i].addEventListener("click",OpenModal)
}
btnCloseModal.addEventListener("click",CloseModal)
overlay.addEventListener("click",CloseModal)

document.addEventListener('keydown',function(e){
    const key = e.key
    if (key === "Escape" && !modal.classList.contains("hidden")) {
        CloseModal()
    }
})


// for (let i=0; i<btnOpenModal.length ; i++) {
//     btnOpenModal[i].addEventListener("click", function(){
//         modal.classList.remove("hidden")
//         overlay.classList.remove("hidden")
        
//     })

// }

// btnCloseModal.addEventListener("click",function() {
//     CloseModal()
// })

// console.log(modal,overlay,btnCloseModal,btnOpenModal)
// document.querySelector(".check").addEventListener("click",function () {
//     let score=Number(document.querySelector(".guess").value)
//     console.log(score)