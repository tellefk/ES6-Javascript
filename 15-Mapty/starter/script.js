'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');



// let map,mapEvent


class App {
    constructor(){
        this.map=null
        this.mapEvent
        this._getPosition()
        form.addEventListener("submit",this._newWorkout.bind(this))
        inputType.addEventListener("change",this._toggleElevationField)
    }

    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this)
            , function() {alert("Cant find position, set to standard location")}
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

    _newWorkout(e) {
        e.preventDefault()
        inputDistance.value=inputElevation.value=inputCadence.value=inputDuration.value=""
        const {lat:Lat, lng:Lon}=this.mapEvent.latlng
        form.classList.add("hidden")
        L.marker([Lat, Lon]).addTo(this.map).bindPopup(L.popup({
            maxWidth:250, 
            maxHeight:150,
            autoClose:false,
            closeOnClick:false,
            className:"running-popup"})).setPopupContent("OK").openPopup()
        
    }
}



// class Running extends App{
//     constructor(){
//         super.
//     }
// }





const app=new App()
app._getPosition()


// mapEvent is created from mapE which is the event when we click on map, we use this in submit form




// inputType.addEventListener("change",function(){
//     inputElevation.closest(".form__row").classList.toggle("form__row--hidden")
//     inputCadence.closest(".form__row").classList.toggle("form__row--hidden")
// })