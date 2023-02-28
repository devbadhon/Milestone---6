class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thanks for your feedback`);
    }
}


class Instructor extends TeamMember{
    name;
    designation = 'Web Course Instructor'
    team = 'Web team'
    constructor(name, location){
        super(name, location);
    }
    startSupportSession(item){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz fr module ${module}`)
    }
    
}

class Developer extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'Web team'
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developerFeature(feature){
        console.log(`Please develope the ${feature}`)
    }
    createQuiz(version){
        console.log(`Please release the ${version}`)
    }
}

class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos'
    team = 'Job Placement'
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(feature){
        console.log(`Please develope the ${feature}`)
    }
    prepareStudent(version){
        console.log(`Please release the ${version}`)
    }
}


const alia = new  Developer('Alia Bhat', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();

const badhon = new JobPlacement('Badhon', 'Usa', 'Uk')
console.log(badhon);