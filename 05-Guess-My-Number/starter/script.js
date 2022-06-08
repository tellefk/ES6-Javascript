'use strict';

// console.log(document.querySelector(".message").textContent)


// document.querySelector(".message").textContent="Correct Number"


const displayMessage=function(message) {
    document.querySelector(".message").textContent=message
}

let pointScore=document.querySelector(".number").textContent=20
// document.querySelector(".score").textContent=30

// document.querySelector(".guess").value=23
let secretNumber=Math.trunc(Math.random()*20)
document.querySelector(".number").textContent="?"
document.querySelector(".again").addEventListener("click",function () {
    document.querySelector("body").style.backgroundColor="#222"
    secretNumber=Math.trunc(Math.random()*20)
    pointScore=20
    document.querySelector(".score").textContent=pointScore
    document.querySelector(".number").textContent="?"
})
    

const validateScore = function(valueScore) {
    if (valueScore<1){
        displayMessage("You lost the game!")
        document.querySelector(".score").textContent=0
    } else {
        document.querySelector(".score").textContent=pointScore
    }
}

// const secretNumber=Math.trunc(Math.random()*20)

// document.querySelector(".number").textContent="?"
let highscore=0

document.querySelector(".check").addEventListener("click",function () {
    let score=Number(document.querySelector(".guess").value)
    console.log(score)
    if (!score) {
        displayMessage("No number!")
    }else if (score===secretNumber){
        document.querySelector("body").style.backgroundColor="#60b347";
        document.querySelector(".number").textContent=secretNumber
        displayMessage("Correct number!")
        pointScore--
        validateScore(pointScore)
        if (pointScore>highscore){
            highscore=pointScore
        }
        document.querySelector(".highscore").textContent=highscore
    }else if (score!==secretNumber){
        displayMessage((score>secretNumber) ? "To high":"to low")
        pointScore--
        validateScore(pointScore)
    }
    
    
    // else if (score>secretNumber){
    //     document.querySelector(".message").textContent="To high!"
    //     pointScore--
    //     validateScore(pointScore)
    // }else if (score<secretNumber){
    //     document.querySelector(".message").textContent="To low"
    //     pointScore--
    //     validateScore(pointScore)
    // }
})

// const checkHighscore= function (highscore) {
    
// }
// document.querySelector(".highscore").textContent






// if (document.getElementById(".check")){
//     console.log("okokok")
// }
// const number=document.getElementById(".number")
