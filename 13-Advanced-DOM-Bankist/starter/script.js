'use strict';

///////////////////////////////////////
// Modal window



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector(".nav")
const message =document.createElement('div');

const operations=document.querySelector(".operations__tab-container")
const tabsContents=document.querySelectorAll(".operations__content")








const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



"create html"

// message.style.

const root=document.documentElement;
// Chage style page same as style.widt=x etc
// root.style.setProperty("Classname", "changeStyle")


const logo=document.querySelector('.nav__logo');

console.log(logo.src)
console.log(logo.href)
console.log(logo.alt)
console.log(logo.className)
console.log(logo.designer="Jonas")
console.log(logo.getAttribute('href'))

// """ Data attributes need to start with data then x-x wich needs to be called data.xX"""
// data-whatever=x

// dataset.versionNumber

logo.classList.add("bro")
logo.classList.toggle("bro")
logo.classList.remove("bro")
logo.classList.contains("bro")





message.classList.add("cookie-message")  
message.innerHTML=`We use cookie for improved functionality and analytics.
<button class="btn btn--close-cookie">Got it </button> `

const header= document.querySelector('.header');

header.append(message);

message.style.backgroundColor=`#37383d`;
message.style.width="120%"
message.style.height="10%"

message.style.bottom="0"
message.style.position="fixed"

document.querySelector(".btn--close-cookie").addEventListener("click",function(e){
  // document.querySelector(".cookie-message").remove()
  message.remove()
})


const nav_bar=document.querySelector(".nav")
nav_bar.style.position="fixed"


const nav_link=document.querySelectorAll(".nav__link")

// function on all the elemetns noot good 

// nav_link.forEach(element => {
//   element.addEventListener("click",function (e){
//     e.preventDefault()
//     const id=this.getAttribute("href")  
//     // id from href links is with # that matches the section ID name 
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
//   })
  
// });


// add event listener to common parant element 
// Determine what element that origitanted event 
const nav_links=document.querySelector(".nav__links")
nav_links.addEventListener("click",function (e){
  e.preventDefault()
  if (e.target.classList.contains("nav__link")){
    const id=e.target.getAttribute("href")
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
  // console.log(e.target.getAttribute("href"))
})





const h1= document.querySelector('h1');

console.log(h1.querySelectorAll(".highlight"))
console.log(h1.parentElement,"hoved element")
console.log(h1.children)

h1.firstElementChild.style.color="white"
h1.lastElementChild.style.color="black"
console.log(h1.parentNode)

// finds the closest paranet class near the h1 class which in this case have the name header
// finds parents 
console.log(h1.closest(".cookie-message"))
console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)

console.log(h1.parentElement.children)




const h2= document.querySelector('h2');

console.log(h2.parentElement.children,"barnelement")


// .cookie-message {
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   width: 100%;
//   background-color: white;
//   color: #bbb;
//   font-size: 1.5rem;
//   font-weight: 400;
// }



// const operations=document.querySelector(".operations__tab-container")

// const operation=[...operations.children]
// operation.forEach(el=>el.addEventListener("click",function (e){
//   e.preventDefault()
//   const firstElement=document.querySelector(`.operations__content--1`)
//   const id_section=e.target.dataset["tab"]
//   const targetElement=document.querySelector(`.operations__content--${id_section}`)
//   if (id_section!==1){
//     if (firstElement.classList.contains("operations__content--active")){
//       firstElement.classList.remove("operations__content--active")
//     }
//     if(targetElement.classList.contains("operations__content--active")){
//       targetElement.classList.remove("operations__content--active")
//     } else {
//       targetElement.classList.add("operations__content--active")
//     }
  
// }))





operations.addEventListener("click",function (e){ 
  const clicked=e.target.closest('.operations__tab')
  if (!clicked) return


  [...operations.children].forEach(el=>el.classList.remove("operations__tab--active"))
  
  
  // operations.foreach(el=>el.classList.remove("operations__tab--active"))
  clicked.classList.add("operations__tab--active")
  
  console.log(document.querySelector(".operations"))
  // remove all first

  tabsContents.forEach(el=>el.classList.remove("operations__content--active"))
  const targetElement=document.querySelector(`.operations__content--${clicked.dataset.tab}`)

  targetElement.classList.add("operations__content--active")

  // add new afterbegin


})


const handleHover=function(e) {
  // console.log(this)
  if (e.target.classList.contains("nav__link")){
    const link=e.target
    const siblings=link.closest(".nav").querySelectorAll(".nav__link")
    siblings.forEach(el=>{
      if (el!==link) el.style.opacity=this
    })
}}



// nav.addEventListener("mouseover",function (e){
//   handleHover(e,0.5)
// })


// nav.addEventListener("mouseout",function (e){
//   handleHover(e,1)
// })

nav.addEventListener("mouseover",handleHover.bind(0.5))

nav.addEventListener("mouseout",handleHover.bind(1))






// Nav bar hover fade




















// button1.addEventListener("click",function(e) {
//   console.log(e.target)
//   console.log(e.target.dataset)
// })



// <button class="btn operations__tab operations__tab--1 operations__tab--active" data-tab="1">
//             <span>01</span>Instant Transfers
//           </button>