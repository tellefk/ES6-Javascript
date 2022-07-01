'use strict';
// prettier-ignore
import { Running, Cycling } from "./other.js";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


const obj={"coords":{"lat":59,"lon":10}}


// let map,mapEvent


class App {
    constructor(){
        this.map=null
        this.mapEvent
        this.workouts=[]
        this._getPosition()
        form.addEventListener("submit",this._newWorkout.bind(this))
        inputType.addEventListener("change",this._toggleElevationField)
        containerWorkouts.addEventListener("click",this.moveToPopup.bind(this))
        

        //get data from localstorage
        this.getLocalStorage()                    
        
        
    }

    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this)
            , ()=>{this.map = L.map('map').setView([59, 11], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);
        
            L.marker([60, 11]).addTo(this.map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
            this.map.on("click",this._showForm.bind(this));
            }
            )
        }
    }

    _loadMap(position) {
        const {latitude:lat, longitude:lon} = position.coords
        // console.log(position.coords.latitude, position.coords.longitude)
        this.map = L.map('map').setView([lat, lon], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    
        L.marker([lat, lon]).addTo(this.map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();

        // handling clicks on map
        this.map.on("click",this._showForm.bind(this));
        //need to set workout on the loadmap, because the map ned to gt loaded before we add the point
        this.workouts.forEach(workout=>this.addPopupMarker(workout))
    }
    
    _showForm(mapE) {
        this.mapEvent=mapE
        form.classList.remove("hidden")
        inputDistance.focus();
    }

    _toggleElevationField(e){
        inputElevation.closest(".form__row").classList.toggle("form__row--hidden")
        inputCadence.closest(".form__row").classList.toggle("form__row--hidden")
    }


    addPopupMarker(workout){
        L.marker(workout.position).addTo(this.map).bindPopup(L.popup({
            maxWidth:250, 
            maxHeight:150,
            autoClose:false,
            closeOnClick:false,
            className:`${workout.type}-popup`})).setPopupContent(workout.description).openPopup()  
    }


    _newWorkout(e) {
        e.preventDefault()
        inputDistance.value=inputElevation.value=inputCadence.value=inputDuration.value=""
        const {lat:Lat, lng:Lon}=this.mapEvent.latlng
        form.classList.add("hidden")
        // L.marker([Lat, Lon]).addTo(this.map).bindPopup(L.popup({
        //         maxWidth:250, 
        //         maxHeight:150,
        //         autoClose:false,
        //         closeOnClick:false,
        //         className:"running-popup"})).setPopupContent("OK").openPopup()
            
        

        let workout
        if (inputType.value=="running"){
            workout=new Running([Lat,Lon],inputDistance.value,inputDuration.value,inputCadence)
        }

        if (inputType.value=="cycling"){
            workout=new Cycling([Lat,Lon],inputDistance.value,inputDuration.value,inputElevation)
        } 
        this.addPopupMarker(workout)
        this.workouts.push(workout)
        console.log(this.workouts)
        this.renderWorkout(workout)

        this.setLocalStorage()
    }


    renderWorkout(workout){
        let html=``
        html+=`<li class="workout workout--${workout.type}" data-id=${workout.id}>
        <h2 class="workout__title">Running on ${workout.date}</h2>
        <div class="workout__details">
            <span class="workout__icon">${workout.type=="running" ? '🏃‍♂️':'🚴‍♀️'}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
        </div>
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">178</span>
            <span class="workout__unit">spm</span>
        </div>
        </li> `
            
        // containerWorkouts.insertAdjacentHTML("after",html)
        form.insertAdjacentHTML("afterend",html)

        // containerWorkout.insertAdjacentHTML(
       
        // )
        
    }

    moveToPopup(e){
        const workEl=e.target.closest(".workout")
        console.log(workEl)
        if (!workEl) return
        
        const workout=this.workouts.find(work=>work.id==workEl.dataset.id)
        console.log(workout)
        this.map.setView(workout.position)
    }


    setLocalStorage() {
        localStorage.setItem("workouts",JSON.stringify(this.workouts))
    }

    getLocalStorage() {
        const data= JSON.parse(localStorage.getItem("workouts"))
        if (!data) return
        this.workouts=data
        // (forEach vs map) wont create a new array
        this.workouts.forEach(workout=>{
            this.renderWorkout(workout)
            // this.addPopupMarker(workout)
        })
        console.log(data)
    }

    reset() {
        localStorage.removeItem("workouts")
        location.reload()
    }

}



// class Running extends App{
//     constructor(){
//         super.
//     }
// }


const app=new App()


// mapEvent is created from mapE which is the event when we click on map, we use this in submit form




// inputType.addEventListener("change",function(){
//     inputElevation.closest(".form__row").classList.toggle("form__row--hidden")
//     inputCadence.closest(".form__row").classList.toggle("form__row--hidden")
// })