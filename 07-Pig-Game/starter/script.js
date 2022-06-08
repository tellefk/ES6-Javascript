'use strict';


const score1EL=document.getElementById("score--0")
const score2EL=document.getElementById("score--1")
const dice=document.querySelector(".dice")

const current1EL=document.getElementById("current--0")
const current2EL=document.getElementById("current--1")

const btnNew=document.querySelector(".btn--new")
const btnRoll=document.querySelector(".btn--roll")
const btnHold=document.querySelector(".btn--hold")

const player0Element=document.querySelector(".player--0")
const player1Element=document.querySelector(".player--1")

let score,activPlayer,currentscore,playing

const init = function(){
    score=[0,0]
    activPlayer=0
    currentscore=0
    playing=true
    document.getElementById(`current--${0}`).textContent=score[0]
    document.getElementById(`current--${1}`).textContent=score[1]
    document.getElementById(`score--${0}`).textContent=score[0]
    document.getElementById(`score--${1}`).textContent=score[1]
    score1EL.textContent=0
    score2EL.textContent=0
    dice.classList.add("hidden")
    document.getElementById(`name--${activPlayer}`).textContent=`Player ${activPlayer+1}`
}

init ()
dice.classList.add("hidden")


const checkWin=function(score,activPlayer){
    if (score[activPlayer]>=30){
        document.getElementById(`score--${activPlayer}`).textContent=score[activPlayer]
      document.getElementById(`name--${activPlayer}`).textContent=`Player ${activPlayer+1} wins!`
      playing=false
}
}

const switchUser =function(activPlayer){
    player0Element.classList.toggle("player--active")
    player1Element.classList.toggle("player--active")
    return activPlayer=(activPlayer===1)? 0:1
}


// const addToScore=function(diceRoll){
//     diceRoll
// }

const rollingDice=function(){
    const diceRoll=Math.ceil(Math.random()*6)
    dice.classList.remove("hidden")
    dice.src = `dice-${diceRoll}.png`
    //`dice-${dice}.png` "dice-"+diceRoll+".png"
    return diceRoll
}

btnRoll.addEventListener("click",function(){
    if (playing) {
        let diceRoll=rollingDice()
        if (diceRoll !==1){
            currentscore+=diceRoll
            score[activPlayer]+=diceRoll
            document.getElementById(`current--${activPlayer}`).textContent=currentscore
            checkWin(score,activPlayer)
        }else{
            currentscore=0
            score[activPlayer]=0
            document.getElementById(`current--${activPlayer}`).textContent=currentscore
            document.getElementById(`score--${activPlayer}`).textContent=score[activPlayer]
            activPlayer=switchUser(activPlayer)
            //toogle same as if classlist.cointans and remove if its true. toogle more easy
            // document.getElementsByClassName(`player--${activPlayer}`).classList.add("player--active")

            // switchUser()
        }   
    }
})

btnHold.addEventListener("click",function(){
    if (playing){
        currentscore=0
        document.getElementById(`score--${activPlayer}`).textContent=score[activPlayer]
        activPlayer=switchUser(activPlayer)
    }

})
btnNew.addEventListener("click",function(){
    init()
})






// if (document.getElementsByClassName(`player--${activPlayer}`).classList.contains("player--active"))
// document.getElementsByClassName(`player--${activPlayer}`).classList.remove("player--active")



// const bntRollDice=document.querySelector(".btn.btn--roll").addEventListener("click",function(){
//     diceRoll=rollingDice()
//     let diceImg="dice-"+rollingDice()+".png"
//     dice.classList("img")
// })

// console.log(bntRollDice)
