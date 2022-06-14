'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// opacity=0 inn the ccs file makes the page blank
containerApp.style.opacity=100

const displayMoments=function(movements){
  containerMovements.innerHTML=""
  movements.forEach((mov,i)=>{
    const type=mov>0 ? "deposit":"withdrawal"
    const html=`
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}€</div>
    </div>`
    // afterbegin(append) or beforeend(reverse append)
    containerMovements.insertAdjacentHTML("afterbegin",html)
  })
}

const movementsDescriptions=movements.map((mov,i)=>{
  return `Movements ${i+1}: You ${mov>0 ? "deposited ": "withdrew "}${Math.abs(mov)} `
})
/////////////////////////////////////////////////

const createUsernamesList=function(accArray){
  accArray.forEach(acc=>{
    acc.username=((acc.owner.trim().toLowerCase().split(" ").map(name=>name[0])).join(""))
  })
}
// createUsernames(account1)

const getBalance=function(movements){
  labelBalance.textContent= movements.reduce(function(acc,cur){
    return acc+cur
  },0)
}

const displaySummary=function(movements){
  const positivSum=movements.filter(mov=>mov>0)
  .reduce((acc, mov) => acc + mov, 0)
  const negativSum=movements.filter(mov=>mov<0)
  .reduce((acc, mov) => acc + mov, 0)
  
  labelSumIn.textContent=positivSum
  labelSumOut.textContent=negativSum
}


const createTotalSum=function(accounts){
  accounts.forEach(account=>{
    account.total=account.movements.reduce(function (acc, cur){return acc+cur})
  })
}

const updateUI=function(acc){
  displaySummary(acc.movements)
  displayMoments(acc.movements)
  getBalance(acc.movements)

}

let Currentacc

btnLogin.addEventListener("click",function(e){
  e.preventDefault()
  Currentacc=accounts.find(acc=>acc.username===inputLoginUsername.value)
  // if(Currentacc?.pin===Number(inputClosePin.value)){
  //   console.log("YEA")} Noe klikk med inputen her 
  if (!Currentacc){
    return alert("Worng username and password")
  }
  updateUI(Currentacc)
  return Currentacc
  // console.log(acc)
})




btnTransfer.addEventListener("click", function (e){
  e.preventDefault()
  const amount=Number(inputTransferAmount.value) 
  const transferTo=accounts.find(acc=>acc.username===inputTransferTo.value)

  if (!transferTo) alert("No name found")


  if (amount && Currentacc.total>=amount) {
    transferTo.movements.push(amount)
    Currentacc.movements.push(-amount)
    createTotalSum(accounts)
    updateUI(Currentacc)
  }
  // !amount && Currentacc.total>=amount && transferTo.movements.push(amount)
  
  // Currentacc.movements.push(-amount)
  // createTotalSum(accounts)
  
})

createUsernamesList(accounts)
createTotalSum(accounts)

// Currentacc=login() 
// Transfer(Currentacc)







// displaySummary(movements)
// displayMoments(account1.movements)
// getBalance(account1.movements)





const login=function(){
  btnLogin.addEventListener("click",function(e){
    e.preventDefault()
    const Currentacc=accounts.find(acc=>acc.username===inputLoginUsername.value)
    // if(Currentacc?.pin===Number(inputClosePin.value)){
    //   console.log("YEA")} Noe klikk med inputen her 
    if (!Currentacc){
      return alert("Worng username and password")
    }
    updateUI(Currentacc)
    return Currentacc
    // console.log(acc)
  })

}

const Transfer=function(Currentacc){
  btnTransfer.addEventListener("click", function (e){
    e.preventDefault()
    const amount=Number(inputTransferAmount.value) 
    const transferTo=accounts.find(acc=>acc.username===inputTransferTo.value)

    if (!transferTo) alert("No name found")


    if (amount && Currentacc.total>=amount) {
      transferTo.movements.push(amount)
      Currentacc.movements.push(-amount)
      createTotalSum(accounts)
      updateUI(currentAccount)
    }
    // !amount && Currentacc.total>=amount && transferTo.movements.push(amount)
    
    // Currentacc.movements.push(-amount)
    // createTotalSum(accounts)
    
  })
  
}











// combinding all the filter 
const eurToUsd=1.1
const totalDepositUsd=movements
.filter(mov=>mov>0)
.map(mov=>mov* eurToUsd)
.reduce((arr,cur)=>arr+cur)
console.log(totalDepositUsd)






const getMax=function(movements){
  let max=movements[0]
  for (const value of movements) if (value>=max) max=value
  return max
}

// reduce fungerer slik: Første settes arr til movements[0]. Deretter loppes current_value (cur) hver verdi. arr settes da lik cur der arr er større enn cur
const getMaxreduce=movements.reduce((arr,cur)=>{
  console.log(arr,cur)
  if (arr>=cur) return arr
  else return cur
},movements[0])

console.log(getMax(account1.movements),getMaxreduce)









// #challeng
const dogsJulia=[3, 5, 2, 12, 7]
const dogsKate=[4, 1, 15, 8, 3]

 const removeCats=(array)=> {
  return array.slice(1,array.length-2)
}

function checkAdultOrPuppy(dog) {
  console.log(dog>=3 ? `Dog nr ${i} is adult`:`Dog nr ${i} is a puppy`)
}

function checkDogsSingel(array,removecat=true) {
  const copy_array=removecat ? [...removeCats(array)] : [...array]
  copy_array.forEach((dog,i)=>{console.log(dog>=3 ? `Dog nr ${i+1} is adult`:`Dog nr ${i+1} is a puppy`)})
  return copy_array
}
function checkDogs(array1,array2) {
  const [JuliaDogsNew,kateDogsNew]=[checkDogsSingel(array1,true),checkDogsSingel(array2,false)]
  const results=[...JuliaDogsNew,...kateDogsNew]
  results.forEach((dog,i)=>{console.log(dog>=3 ? `Dog nr ${i+1} is still adult`:`Dog nr ${i+1} is still a puppy`)})
}

// const results=checkDogs(dogsKate,dogsJulia)
// console.log(results)

// function checkDogs(array1,array2) {
//   const [copy_array1,copy_array2]=[removeCats(array1),array2]
//   copy_array1.forEach((dog,i)=>{console.log(dog>=3 ? `Dog nr ${i+1} is adult`:`Dog nr ${i+1} is a puppy`)})
//   copy_array2.forEach((dog,i)=>{console.log(dog>=3 ? `Dog nr ${i+1} is adult`:`Dog nr ${i+1} is a puppy`)})
// }



// --MAP-- FILTER--REDUCE-- 

// Alle metodene er callback functions med input som en function (variabel, indeks, array)

const mapDogs=dogsKate.map((mov,indeks)=>{
  return mov*2
})

const freshMap=dogsKate.map(mov=>mov*2)


// FILTER // elemetens som pass test kommer i ny array.  condition is true legges til arary 


const filterDogs=dogsKate.filter(dog=>dog>=3)
const withdrews=movements.filter(mov=>mov<0)
console.log(filterDogs,withdrews)
// console.log(filterDogs)

// REDUCE Sum av verdiene. 

const sumMov=movements.reduce((acc,cur,i,arr)=>{
  // console.log(acc,cur)
  return acc + cur
},0)


// const Sum=sumMov
// console.log(Sum)





