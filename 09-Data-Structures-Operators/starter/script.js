'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


// spread ... gjør om til liste på høyre siden og pakker ned på venstre siden, samme som *args på lister og **kvargs på objecter

const [val1,val2,val3]=restaurant.mainMenu

const [val4,...rest]=restaurant.mainMenu

console.log(...rest)

console.log(val2)




const x={...restaurant}
const [X, , B]=restaurant.mainMenu

console.log(x)

// const [...newList]=x

const {name:names,location:test}=restaurant
console.log(names)


// const func=(...numbers)=>{
//  [for(let i=0;i<numbers.length;i++) sum(numbers[i])]
// }





// challengens:

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


const [team1,team2]=game.players
const [gk1,...fieldPlayers1]=team1
const [gk2,...fieldPlayers2]=team2

// const {team1:Team1,x:Draw,team2:Team2}=game.odds
const {odds:{team1:Team1,x:Draw,team2:Team2}}=game


console.log(Team1,Draw,Team2)


const printGoals=(...numbers)=>{
  // for (const value of numbers) console.log(numbers.length, value) same as python for in
  // for (const [index,value] of numbers.entries()) console.log(index,value) same as python enumerate 
  console.log(numbers.length,numbers)
}


printGoals("levandowski","thiago","hermano")
console.log(game.scored)


console.log(game.odds.team1>game.odds.team2 || game.odds.team1)
console.log(game.odds.team2>game.odds.team1 && game.odds.team1)






// challeng 2 

const printGoal=(numbers)=>{
   for (const [index,value] of numbers.entries()) console.log(`Goal ${index+1}:${value}`) 
}

printGoal(game.scored)


for (const odd of Object.keys(game.odds)) console.log(odd)

let sum=0
let numbers=0
for (const odd of Object.values(game.odds)){
  numbers+=1
  sum+=odd
}

console.log(sum/numbers)
console.log(sum/Object.values(game.odds).length)

if (game?.odds) {
  console.log("netS")
} else{
  console.log("kkkk")
}

const getOdd=(game)=>{
  if (game?.odds){
  for (const odd of Object.keys(game.odds)){
    if (odd !="x"){
      console.log(`Odd for victory ${game[odd]}:${game.odds[odd]}`)
      const resultString=`Odd for victory ${game[odd]}:${game.odds[odd]}`
    }else if (odd==="x"){
      console.log(`Odd for draw ${game.odds[odd]}`)
    }
  }
  }
}
getOdd(game)

for (const odd of Object.keys(game.odds)){
  console.log()
}

const scored={}

for (const [index,ScoredPlayer] of game.scored.entries()){
  console.log(ScoredPlayer)
  // pp[ScoredPlayer]=0ß
  if (scored[ScoredPlayer]){
    scored[ScoredPlayer]+=1
  } else {
    scored[ScoredPlayer]=1
  }
}
console.log(scored)


// console.log({...game.odds})

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


const events =new Set();

for (const [index,x]  of gameEvents){
  events.add(x)
  if (index===64){
    gameEvents.delete(index)
  }
  if (index<=45){
    console.log(`FIRST HALF: ${index}:${x}`)
  } else {
    console.log(`SECOND HALF: ${index}:${x}`)
  }
const half= index<=45 ? "FIRST":"SECOND"
console.log(`${half} HALF: ${index}:${x}`)

}

gameEvents.delete(64)

const array = Array.from(events)
const Events =[...new Set(gameEvents.values())]

console.log(gameEvents.keys())
console.log(array)
console.log(gameEvents)
console.log(Events)




const getString=(string)=>{
  const [first,last]=string.trim().split("_")
  console.log(first+last[0].toUpperCase()+last.slice(1).toLowerCase())
  return 
}


const stringFromList=(listOfString)=>{
  for (const string of listOfString) {
    getString(string)
  }
}
getString(" first_nSADAame")





const listeOfString=["underscore_case",
"  first_name",
 "Some_Variable",
 "  calculate_AGE",
 "delayed_departure"]


stringFromList(listeOfString)

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// const O=document.getElementById("button").addEventListener("click",stringFromList())


document.querySelector("button").addEventListener("click",function() {
  const listeOfString=document.querySelector('textarea').value
  stringFromList(listeOfString.split("\n"))  
})

// const stringList=document.getElementById("textarea")


const flightS =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';




const stringChanger=function(string){
  let maxStringLengt=string.split("+")[0].length
  for (const stringIndex of string.split("+")){
    if (stringIndex.length>=maxStringLengt) maxStringLengt=stringIndex.length
    let [type,from,to,time]=stringIndex.split(";")
    type=type.replaceAll("_"," ").trim()
    const [time1,time2]=time.split(":")
    const output=`${type.startsWith("Delayed") ? "E": "" } ${type} from ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time1}h${time2})`
    console.log(output.padStart(50))
    // for (const string_ of stringIndex.split(";"))
  }

  
}
console.log(flightS.split(";"))

stringChanger(flightS)



