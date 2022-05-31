'use strict'

function getYear(year){
    const newYear=2037-year
    return newYear
}
console.log(getYear(37))

// only called when defined before function 
const getYear2=function(year) {
    const newYear=2037-year
    return newYear
}

//arrow function wont get this value 
const retirement=year=> 2037-year;


// const retirementNew=(year,x)=> {
//     if (year>2000){
//         const value=year+x
//     }
//     return value
// }

const retirementNew=(year,x)=> {
    if (year>2000) {
        console.log("Something broo")
    }
    const newYear=year+x
    return newYear
}
console.log(retirementNew(2001,100))
const c=retirement(311)
console.log(c)
console.log(getYear2(37))
const b=getYear2(37)
const B=getYear(57)
console.log(b)


function getAge(birthYear){
    return 2022-birthYear
}
// to forskjellige måter å skrive funksjoner på, den ene er mer lik python 
const getAge2=function(birthYear){
    return 2022-birthYear
}


// if (getAge(year)<=0){
//     console.log("allready retired")
//     return 0
// }
// //const age=getAge(year)
// }


function Retirement(year,name){
    const yearsToRetirement=65-getAge(year)
    if (yearsToRetirement<=0){
        console.log(`${name} is allready retired`)
        return null
    }else {
        console.log(`${name} is retired in ${yearsToRetirement} years`)
        return yearsToRetirement
    }
}
const resultat=Retirement(1956,"tellef")
console.log(resultat)


// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}



const Avrage=(point1,point2,point3)=>{
    const avrage=(point1+point2+point3)/3
    return avrage
}
const AvRage=(point1,point2,point3)=>((point1+point2+point3)/3)


const Avr=points=>points/3
console.log(Avr(300))
console.log(Avrage(30,30,30))

// const dolphSum=44+23+71 
// const koalaSum=85+54+41 

let avrDolph=AvRage(44,23,71)
let avrKoala=AvRage(85,54,41)
checkWinner(avrDolph, avrKoala)
avrDolph=AvRage(85,54,41)
avrKoala=AvRage(23,34,27)
checkWinner(avrDolph, avrKoala)

function checkWinner(avrage1,avrage2){
    if (avrage1>avrage2*2){
        console.log(`Dolhpines wins with ${avrage1} vs ${avrage2}`)
    }else if (avrage2>avrage1*2){
        console.log(`Koalas wins with ${avrage2} vs ${avrage1}`)
    }
}












