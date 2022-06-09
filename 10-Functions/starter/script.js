'use strict';
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
  
//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉


const polldata=new Map([
    [0,"JavaScript"],
    [1,"Python"],
    [2,"Rust"],
    [3,"C++"]
])

// alt

const polldataObject={
    0:"Javascript",
    1: "Python",
    2: "Rust",
    3:"C++",
}
   
console.log(polldataObject)
console.log(polldata)

console.log(polldataObject)



const poll ={
    answers:new Array(4).fill(0),

    registerNewAnswer(){
    const question="Whats your favorite language "
    const options=[["0:JavaScript"],
    ["1:Python"],
    ["2:Rust"],
    ["3:C++"]]
    let value=prompt((question+options),1)
    if (options.length<value || value<0 || isNaN(value)) return false
    this.answers[Number(value)]=this.answers[Number(value)]+1
    }
}
console.log(poll.answers)

document.querySelector(".poll").addEventListener("click",poll.registerNewAnswer())


// function registerNewAnswer() {
//     const question="Whats your favorite language "
//     const options=[["0:JavaScript"],
//     ["1:Python"],
//     ["2:Rust"],
//     ["3:C++"]]
//     const answer= new Array(4).fill(0)

//     let value=prompt((question+options),1)
//     if (options.length<value || value<0 || isNaN(value)) return false
//     answer[Number(value)]=answer[Number(value)]+1
//     return answer
//     // return Number(value)
//     // console.log(polldataObject[value])
//     // console.log(polldata.get(Number(value)))
//     // for (const [key,index] of (polldata)) console.log(key,index)
// }


// Kunne her benyttet en function inn i en annen function for å lage en closure. dette medfører at man storer staten til variablen answer selv ved reset 

