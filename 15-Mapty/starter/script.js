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



if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const {latitude:lat, longitude:lon} = position.coords
        // console.log(position.coords.latitude, position.coords.longitude)
        const map = L.map('map').setView([lat, lon], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
        L.marker([lat, lon]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
        console.log(lat, lon)
        map.on("click",function(mapEvent){
            console.log(mapEvent)
            const {lat:Lat, lng:Lon}=mapEvent.latlng
            console.log(Lat,Lon)

        L.marker([Lat, Lon]).addTo(map).bindPopup(L.popup({
            maxWidth:250, 
            maxHeight:150,
            autoClose:false,
            closeOnClick:false,
            className:"running-popup"})).setPopupContent("OK").openPopup()
    
        })

















    }, function() {alert("Cant find position, set to standard location")}
    )
}

