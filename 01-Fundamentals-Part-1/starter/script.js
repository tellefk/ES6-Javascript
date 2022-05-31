'use strict'

// const age = "19"
const birthYear = 1991;

let century
if (birthYear <= 2000) {

    century = 20
} else if (birthYear > 2000) {
    century = 21
}
// console.log(`${century}`)

// const markWeigt = 94
// const markHeigt = 1.91
// const johnWeigt = 94
// const johnHeight = 1.91

// const BMImark = markWeigt / (markHeigt ** 2)
// const BMIJohn = johnWeigt / (johnHeight ** 2)


// if (BMImark > BMIJohn) {
//     console.log(`Marks BMI ${BMImark} is higher than johns ${BMIJohn}!`)
// } else if (BMImark < BMIJohn) {
//     console.log(`John's BMI ${BMIJohn} is higher than mark's ${BMImark}!`)
// } else {
//     console.log("Equal BMI BROO!")
// }



// if (age >= 18) {
//     console.log(`Sarah is able to drive! she is ${age}`)
// } else if (age <= 18) {

// }

let inputYear = "1991"
inputYear = String(inputYear)
inputYear = Number(inputYear)
if (typeof inputYear === "string") {
    inputYear = Number(inputYear)
}
console.log((inputYear))

console.log("21" + "31" - 10)
console.log("23" * "2" - 10)
console.log("1" + 1 + "1" - 100)

let n = "1" + 1
n = n - 1
console.log(n)




const age = "19"
// const age = "18"
//strict
if (age === "19") {
    console.log("okdi")
}
//loose dont use 
if (age == 19) {
    console.log("okdioki1")
}


// const favorit = Number(prompt("Input number"))
const favorit = 23
if (favorit === 23) {
    console.log("23 is amazing number")
}

if (favorit !== 23) console.log("Why not 23")


const hasDriversLicense = true
const hasGoodVision = false

console.log(hasDriversLicense && !hasDriversLicense || hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)




// Coding challenge #3


// 1
const antallPoints = 3
const dolphinsPoints = 96 + 108 + 89
const koalas = 88 + 91 + 110


//bonus 1
// const antallPoints = 3
// const dolphinsPoints = 97 + 112 + 101
// const koalas = 109 + 95 + 123
// bonus 2
// const antallPoints = 3
// const dolphinsPoints = 97 + 112 + 101
// const koalas = 109 + 95 + 106

const avrDolphins = dolphinsPoints / antallPoints
const avrKoalas = koalas / antallPoints

if ((avrKoalas || avrDolphins) >= 100) {
    if (avrKoalas > avrDolphins) {
        console.log(`Koalas er vinnern med poeng på ${avrKoalas}`)
    } else if (avrKoalas < avrDolphins) {
        console.log(`Dolphines er vinnern med poeng på ${avrDolphins}`)
    } else {
        console.log("WE GOT A EQUAL, An ohter one")
    }
} else {
    console.log("Ingen vinnere pga lavere poengsum enn 100")
}


//array-metods

const friends = ["Pål", "Eirik", "David", "Daiel"]
//Append to list
friends.push("Tellef")
console.log(friends)
console.log(friends.length)

//append to begining of list
friends.unshift("Torjus", "Julie")
console.log(friends)
//remove last element, saves last element value
friends.pop()
console.log(friends)
//removes frist in list
friends.shift()
console.log(friends)


const nAme = friends.indexOf("Eirik")
console.log(nAme)

if (friends.includes("Pål")) {
    console.log("Pål er her vettdu")
}

friends.push(23)
console.log(friends)
// console.log(a)


const AgeBro = (Birthyear, Age) => (Birthyear + Age)
// function AgeBRo(Birthyear, Age) {
//     return Birthyear + Age
// }

//objects classer


const Tellef = {
    firstName: "Tellef",
    Age: 27,
    BirthYear: 1994,
    work: "Engineer",
    Friends: friends,
    hasDriversLicense: true,

    yearNow: function () {
        return (this.Age + this.BirthYear)
    },
    driverLicense: function () {
        if (this.hasDriversLicense) {
            console.log(`${this.firstName} is a ${this.Age} year old ${this.work} that has a drivers license`)
        } else {
            console.log(`${this.firstName} is a ${this.Age} year old ${this.work} that has not adrivers license`)
        }

    },
    summary: function () {
        return (`${this.firstName} is a ${this.Age} year old ${this.work} that has ${this.hasDriversLicense ? "a" : "no"} drivers license`)
    }

}

//const t = Tellef.hasDriversLicense ? "bRRRRo" : "no"

console.log(Tellef.summary())
console.log(Tellef.driverLicense())

console.log(Tellef["BirthYear"])
console.log(Tellef.Age)
console.log(Tellef.yearNow)

Tellef["Bro"] = "Yea bro"
console.log(Tellef.Bro)
console.log(`Tellef have ${Tellef.Friends.length} friends, and his best friend is ${Tellef.Friends[0]}`)
console.log(Tellef.yearNow())



//coding challeng

function getBMI(mass, height) {
    return mass / (height ** 2)
}


const Mark = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    Bmi: function () {
        this.bmi = (this.mass / (this.height ** 2))
        return this.bmi
    }
}

const Marky = {
    name: "Mark Miller",
    mass: 85,
    height: 1.85,
    Bmi: function () {
        return getBMI(this.mass, this.height)
    }
}

const John = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    Bmi: function () {
        this.bmi = (this.mass / (this.height ** 2))
        return this.bmi
    }
}

// (John.Bmi()>Mark.Bmi() ? 'John bro':"Mark bro")

console.log(`${(John.Bmi() > Mark.Bmi()) ? `${John.name} got a higher BMI than Mark with a bmi on ${John.bmi}` : `${Mark.name} got a higher BMI than Mark with a bmi on ${Mark.bmi}`}`)


// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}`)
// }


//to måter å appende liste på push er append
const a = []
const b = []
for (let i = 0; i < friends.length; i++) {
    a.push(friends[i])
    b[i] = friends[i]
}
const ages = []
const years = [2000, 2001, 2002, "2003", 2003, 2004, 2005, 2006, 2007, 2008]

//contiune exist current iterration of the loop, and break breaks the hole loop
for (let i = 0; i < years.length; i++) {
    if (typeof years[i] !== "number") continue; {
        ages.push(2037 - years[i]);
    }
}



const calCtip = tip => (tip >= 300) ? tip * 0.2 : tip * 0.15
const calCCtip = function (tip) {
    return (tip >= 300) ? tip * 0.2 : tip * 0.15
}

console.log(calCtip(200))

function calcTip(tip) {
    if (tip < 300 && tip >= 50) {
        const tip_value = tip * 0.15
        return tip_value
    } else {
        const tip_value = tip * 0.2
        return tip_value
    }
}

function getTips(bill_list) {
    const tip_list = []
    const total_list = []
    for (let i = 0; i < bill_list.length; i++) {
        tip_list.push(calcTip(bill_list[i]))
        total_list.push(tip_list[i] + bill_list[i])
    }
    return [tip_list, total_list]
}
const bills = [125, 555, 44]
const tip_list = getTips(bills)
const total = [tip_list, bills]

//task 1 

const calcAverage = function (arr) {
    let sumOfArray = 0
    for (let i = 0; i < arr.length; i++) {
        // sumOfArray = sumOfArray + arr[i]
        sumOfArray += arr[i]
    }
    return sumOfArray / arr.length
}
const test_bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
console.log(calcAverage(test_bills))
const total_test_bills = getTips(test_bills)
console.log(calcAverage(total_test_bills[1]))

