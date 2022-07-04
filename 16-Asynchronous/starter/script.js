'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


const getCountryData=function(country){
    const request =new XMLHttpRequest();
    const url =`https://restcountries.com/v2/name/${country.toLowerCase()}`
    request.open("GET",url)
    request.send()

    request.addEventListener("load",function(){
        const [data]=JSON.parse(request.responseText)
        const html=`<article class="country">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${data.population}</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                </div>
                </article>`
        countriesContainer.insertAdjacentHTML("beforeend",html)
        countriesContainer.style.opacity=1
    })


    // To simulate async
}


const getCountryAndNeighbour=function(country){
    const request =new XMLHttpRequest();
    const url =`https://restcountries.com/v2/name/${country.toLowerCase()}`
    request.open("GET",url)
    request.send()

    request.addEventListener("load",function(){
        const [data]=JSON.parse(request.responseText)
        const html=`<article class="country">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${data.population}</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                </div>
                </article>`
        countriesContainer.insertAdjacentHTML("beforeend",html)
        countriesContainer.style.opacity=1
        
        const [neighbour]=data.borders?.[0]


        if (!neighbour) return
        console.log(neighbour)




    })


    // To simulate async
}


const renderCountry=function(data){
    // const [data]=JSON.parse(request.responseText)
    const html=`<article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
            </article>`
    countriesContainer.insertAdjacentHTML("beforeend",html)
    countriesContainer.style.opacity=1

}
    






// Will return random caus of diffrent ajax times
// getCountryData("norway")
// getCountryData("USA")
// getCountryData("Danmark")

// const request = fetch(`https://restcountries.com/v2/name/norway`)
// request.then((response) =>
//     response.json()).then(data =>getCountryData(data[0].name))




//chaning promises witout callack hell
// const getCountryDataFetch=function(country) {
//     const url =`https://restcountries.com/v2/name/${country.toLowerCase()}`
//     const response =fetch(url).
//     then(response=>{
//         if (!response.ok) throw new Error(`Country notfound ${response.status}`)
//         return  response.json()})
//     .then(data=>{
//         renderCountry(data[0])
//         const neighbour=data[0]?.borders[0]
//         if (!neighbour) return
//         return fetch(`https://restcountries.com/v2/name/${neighbour}`)

//     }).then(response=>response.json()
//         .then(data=>renderCountry(data[0])))
//         .catch(error =>alert(error))
//         .finally(() =>console.log("run without problmes"))
        
// }






const getJson=function(url){
    return fetch(url).then((response) =>{
        if (!response.ok) throw new Error(`Country notfound ${response.status}`)
        return response.json()
        
    })
}






const getCountryDataFetch=function(country) {
    const url =`https://restcountries.com/v2/name/${country.toLowerCase()}`
    getJson(url)
    .then(data=>{
        renderCountry(data[0])
        const neighbour=data[0]?.borders[0]
        if (!neighbour) throw new Error(`No neighbour found!`)
        return getJson(`https://restcountries.com/v2/name/${neighbour}`)

    })
    .then(data=>renderCountry(data[0]))
    .catch(error =>alert(error))
    .finally(() =>console.log("run without problmes"))

}




getCountryDataFetch("Norway")  


// console.log("Test start")
// setTimeout(() =>console.log("0 sec timer ",0))
// Promise.resolve("Resolved primise 1").then(res=>console.log(res))

// Promise.resolve("Resolved primise 2").then(res=>{
//     for (let i=0; i<1000000000; i++){}
//     console.log(res)})
// console.log("Test end")



const lotteryPromise=new Promise(function(resolve,reject){
    console.log("Starting lottery")
    setTimeout(function(){
    if (Math.random()>0.5){
        resolve("You win")
    } else {
        reject(new Error("Lost"))
    }
},2000)
}).then(res => console.log(res)).catch(error =>alert(error)).finally(()=>console.log("WINNER!"))


const wait=function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve,seconds*1000)
    })
}


wait(2).then(() =>{
    console.log("waited 2 seconds")
    return wait(1)
}).then(()=>{
    console.log("waited 3 seconds")
})




//Challing 2


// PART 1
// 1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

// If this part is too tricky for you, just watch the first part of the solution.

// PART 2
// 2. Comsume the promise using .then and also add an error handler;
// 3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
// 4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
// 5. After the second image has loaded, pause execution for 2 seconds again;
// 6. After the 2 seconds have passed, hide the current image.


const img=document.createElement('img')
const imageContainer=document.querySelector(".images")
console.log(imageContainer)

const createImage = function(imgPath){
    img.style.display="flex"
    img.src=imgPath
    img.addEventListener("load",function(){
        imageContainer.appendChild(img)
    })
    return wait(2).then(function(){
        img.style.display="none"
    })

}


const createImagE = function(imgPath){
    return new Promise(function(resolve, reject){
        img.style.display="flex"
        img.src=imgPath
        img.addEventListener("load",function(){
        imageContainer.appendChild(img)
        resolve(img)
        })
        img.addEventListener("error",function (){
            reject(new Error("Error"))
        })
    })
}

createImagE(`https://a-mobler.no/~/pir/products/ptl912026/PTL912026-TL912026.jpg`)
.then(()=>wait(2))
.then(()=>{
    img.style.display="none"
    return createImagE(`https://www.guru-utvikling.no/wp-content/uploads/2017/05/Bilde-til-sak-om-bilder.jpg`)
})
.then(()=>{
    return wait(2)
})
.then(()=>img.style.display="none")








