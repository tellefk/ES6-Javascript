'use strict';

class Workout {
    constructor(position,distance, duration,type){
        this.position = position;
        this.distance = distance;
        this.duration = duration;
        this.type = type;
        this.date=new Date()
        this.id=Math.random().toString().replace("0.", "")
    }

   _setDescription(){
    const months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'august',"September","Oktober","November","December"]
    this.description= `${this.type[0].toUpperCase()} ${this.type[1].slice(1)} on 
    ${ months[this.date.getMonth()]}`   


    }

}

export class Running extends Workout{
    type= "running"
    constructor(position,distance, duration, cadence){
        super(position,distance, duration);
        this.cadence=cadence;
        this._setDescription()
        
    }
}


export class Cycling extends Workout{
    constructor(position,distance,duration,elevation){
        super(position,distance,duration);
        this.elevation=elevation;
        this.type="cycling"
        this._setDescription()
    }
}



