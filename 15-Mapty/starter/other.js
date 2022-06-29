'use strict';

class Workout {
    constructor(position,distance, duration,type){
        this.position = position;
        this.distance = distance;
        this.duration = duration;
        this.type = type;
    }

    getCadence(){
        this.cadence=this.distance*1000/this.duration;
    }

}

class Running extends Workout{
    type= "running"
    constructor(position,distance, duration){
        super(position,distance, duration);
    }
}


class Cycling extends Workout{
    constructor(position,distance,duration){
        super(position,distance,duration);
        this.type="Cycling"
    }
}



