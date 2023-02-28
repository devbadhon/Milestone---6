// syntactic sugar

 class Instructor{
    name;
    designation = 'Web Course Instructor'
    team = 'Web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(item){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz fr module ${module}`)
    }
}



const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);
aamir.startSupportSession('09:00');
aamir.createQuiz(60);

const solaiman = new Instructor('Solaiman Khan', 'Dhaka')
console.log(solaiman);
solaiman.startSupportSession('12:00');
solaiman.createQuiz(60);

//==============================================================================


class Vehicle{
    constructor(make, model, color){
        this.make = make;
        this.model = model;
        this.color = color;
    }
    getName(){
        return this.make + " " + this.model;
    }
}
const car  = new Vehicle("Toyota", "Corola", "Honda", "Marsidis")
console.log(car);