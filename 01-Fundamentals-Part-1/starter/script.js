let firstName="tellef";

console.log(firstName);
// alert("broo");

let country="Norway"
let contient="Europe"
let population=5000000
console.log(country, contient, population)

let javaScriptFun=true
console.log(typeof javaScriptFun)

javaScriptFun=100
console.log(typeof javaScriptFun)

let tellef_bro=null

console.log(tellef_bro)

let tellef
console.log(tellef)

//const kan ikke endres. Standard å bruke const til alt. let kun til de verdiene som man vet skal endres
//kan være lurt å definere alle variablene i starten ved kun const firstName. 
const birthday=1994
console.log(birthday)

//assigment operatiors
let x=10
x+=10
x*=2
x/=2
console.log(x)



const name=10>x
console.log(name)

//change variables based on left to right standard, but since + etc is higher ranked than = it calc values first then aply = 
let X,Y
X=Y=10-20+20




const markWeight=78
const markHeight=1.69
const johnWeight=92
const johnHeight=1.95

const markBMI=markWeight/(markHeight**2)
const johnBMI=johnWeight/(johnHeight**2)

const markHigherBMI=markBMI>johnBMI
console.log("Mark got a higher BMI",markHigherBMI)

//samme som print(f"")
const tellefNew =`hella jeg er ${johnHeight}
eller hva sa du a`  
console.log(tellefNew)
// birthday=birthday+10





// if javascriptIsFun:
//     console.log(javaScriptFun)
//variable name bro



const day ="Monday"

if (day==="Monday"){
    console.log("mandag ")
}else if (day==="Tuesday"){
    console.log("Tirsdag")
}else if (day==="Wensday" || day==="Thursday"){
    console.log("Write code reviews")
} else if (day==="Friday"){
    console.log("FRIDAY")
}else if (day==="Saturday" || day==="Sunday"){
    console.log("HELG!")
}


switch (day) {
    case "Monday":
        console.log("bro")
    case "Tuesday":
        console.log("something")
    case "wednesday":
        console.log("Onsdag")
}


