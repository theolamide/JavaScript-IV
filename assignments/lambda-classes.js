// CODE here for your Lambda Classes
class Person{
    constructor (PersonAttributes){
    this.name = PersonAttributes.name,
    this.age = PersonAttributes.age,
    this.location = PersonAttributes.location
    }
        speak(){
            return `Hello my name is ${this.name}, I am from ${this.location}`
        }    
}



class Instructor extends Person{
    constructor (InstructorAttributes){
    super(InstructorAttributes);
    this.specialty = InstructorAttributes.specialty,
    this.favLanguage = InstructorAttributes.favLanguage,
    this.catchPhrase = InstructorAttributes.catchPhrase
    }
        demo(subject){
            return `Today we are learning about ${this.favLanguage}`
        };
        grade(Student,subject){
            return `${StudentObj.name} receives a perfect score on ${StudentObj.favSubjects}`
        }
}



class Student extends Person{
    constructor(StudentAttributes){
    super(StudentAttributes);
    this.previousBackground = StudentAttributes.previousBackground,
    this.className = StudentAttributes.className,
    this.favSubjects = StudentAttributes.favSubjects
    }
        // listsSubjects(){
        //     favSubjects.forEach(function(items){
        //         return 
        //     })            
        // }
}

class ProjectManager extends Instructor{
    constructor(ProjectManagerAttributes){
        super(ProjectManagerAttributes)
        this.gradClassName = ProjectManagerAttributes.gradClassName,
        this.favInstructor = ProjectManagerAttributes.favInstructor
    }
    standUp(channelName){
        return `${this.name} announces to ${StudentObj.className}, @channel standy times!`
    };
    debugsCode(Student, subject){
        return `${this.name} debugs ${StudentObj.name}'s code on ${StudentObj.favSubjects[2]}`
    }
}


const PersonObj = new Person({
    name: 'Sarah',
    age: 56,
    location: 'Seattle, USA'
})


const InstructorObj = new Instructor({
    name: 'Tiler',
    age: 32,
    location: 'Little Rock, USA',
    specialty: 'Frontend UI/UX',
    favLanguage: 'CSS',
    catchPhrase: 'Valar Morghulis'
})

const StudentObj = new Student({
    name: 'Antoinette',
    age: 19,
    location: 'Charllote, USA', 
    previousBackground: 'High School',
    className: 'WEB24',
    favSubjects: ['HTML', 'CSS', 'Javascript']
})

const ProjectManagerObj = new ProjectManager({
    name: 'Wilder',
    age: 28,
    location: 'Cleveland, USA',
    specialty: 'Full Stack',
    favLanguage: 'React',
    catchPhrase: 'What will be will be',
    gradClassName: 'CS1',
    favInstructor: 'Sean White'
})

console.log(PersonObj.speak());
console.log(InstructorObj.demo());
console.log(InstructorObj.grade())
console.log(ProjectManagerObj.standUp())
console.log(ProjectManagerObj.debugsCode())
