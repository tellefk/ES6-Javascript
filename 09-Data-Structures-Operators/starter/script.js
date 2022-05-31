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

console.log(func(1,2,3,4))