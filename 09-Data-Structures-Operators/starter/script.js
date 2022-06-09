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


// Challenge 1:

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
  test(){
    
  },
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};



console.log(game.test())


const [Team1,Team2]=game.players
// const [[gk,...fieldPlayers],[gk2,...fieldPlayers2]]=game.players


const [gk,...fieldPlayers]=Team1

const allPlayers=[...Team1,...Team2]
console.log(allPlayers)


const playersFinal=[...Team1,"Thiago","Coutinho","Perics"]

const {team1:team1,x:draw,team2:team2}=game.odds
console.log(team1,draw,team2)


const printGoals=(...numbers)=>{
  console.log(numbers)
}

printGoals()

console.log(gk,fieldPlayers)

const soccer={
  team:Array=[],
  scored:Number=null,
  odds:Number=null,
  getodds(){
    if (this?.odds != null){
      for (const x of Object.keys(this.odds)){
        console.log(this.odds[x])
      } }
    // this.test=this?.test || this?.odds || for (const keys of Object.values(this.odds)) { keys.length*10}
  }
}
const X=function(){
  return "bro"
}
const x=()=>{
  return "bro"
}

console.log(x())

soccer.team.push(...allPlayers)
soccer.odds=game.odds

soccer.getodds()
console.log(soccer.test)

console.log(soccer.team)
console.log(game.odds)

// || && or ??( nullish undefined variables etc good when test could be a number of 0. )
soccer.test=soccer?.test ?? 0 
// if value on right is false/undefined etc then go to next
console.log(soccer?.test || "Test variable is not yet set")
// if value on right is false then go to next
console.log(soccer?.test ?? "Test variable is not yet set")
// if value on right is true then go to next
console.log(soccer?.test && "Test variable is not yet set")

