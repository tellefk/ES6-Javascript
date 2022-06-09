'use strict';



const poll={
    answers:new Array(4).fill(0),
    question: "What is your favorit language",
    options: {0:"Javascript",1:"Python",2:"Rust",3:"C++"},
    type:"array",
    registerNewAnswer(){
        const answer = prompt(`${this.question} \n ${JSON.stringify(this.options)}`)
        if (Number(answer)>=this.answers.length || Number(answer)<0 || isNaN(answer)) return console.log("Not a number or to high") 
        console.log(this.options[answer])
        this.answers[answer]++
        this.displayResults(this.type)
        this.displayResults("string")

    },
    displayResults(type="array"){
        type==="array"? console.log(`${this.answers}`) : console.log(`Poll results are ${[...this.answers]}`)
    }
}

// binder poll function i callback func fordi this wordet vil ellers være window/global pga det er en funksjon
document.querySelector(".poll").addEventListener("click",poll.registerNewAnswer.bind(poll))
// Poll results are 13, 2, 4, 1



// const testData1=[5,2,3]

// const funcDisplay=poll.displayResults

// funcDisplay.call({answers:testData1},"string")


// const testData2=[1,5,3,9,6,1]


// funcDisplay.call({answers:testData2},"string")


function test() {
    const header=document.querySelector('h1');
    header.style.color="white";
    return function (color){document.querySelector("body").addEventListener("click",function (){
        header.style.color=color;
})}
}
const p=test()
p("blue")

// closure husker alltid color


function test2(Startarray) {
    const arraybro=Startarray
    return function(addValue) {
        arraybro.push(addValue)
        console.log(arraybro)
    }
}

const arrayMan=test2([1,2,3,4,5])
arrayMan(2)
arrayMan(4)



// function test(){
//     const header=document.querySelector('.h1');
//     header.style.color="red";
//     document.querySelector("body").addEventListener("click",function (){
//         header.style.color="blue";
//     })
// }

// test()


// (function () {
//     const header=document.querySelector('.h1');
//     header.style.color="red";
//     header.addEventListener("click")
// })();











