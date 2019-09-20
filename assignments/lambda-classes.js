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
            return `Today we are learning about ${subject}`
        };
        grade(student,subject){
            return `${student} receives a perfect score on ${subject} project.`
        }
}


class Student extends Person{
    constructor(StudentAttributes){
    super(StudentAttributes);
    this.previousBackground = StudentAttributes.previousBackground,
    this.className = StudentAttributes.className,
    this.favSubjects = StudentAttributes.favSubjects
    }

    listsSubjects(){
        for(let i=0; i<StudentObj.favSubjects.length; i++){
            console.log(StudentObj.favSubjects[i])
        }
        }         
}   
      

class ProjectManager extends Instructor{
    constructor(ProjectManagerAttributes){
        super(ProjectManagerAttributes)
        this.gradClassName = ProjectManagerAttributes.gradClassName,
        this.favInstructor = ProjectManagerAttributes.favInstructor
    }
    standUp(channelName){
        return `${this.name} announces to ${channelName}, @channel standy times!`
    };
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
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
console.log(InstructorObj.demo("HTML"));
console.log(InstructorObj.grade())
console.log(ProjectManagerObj.standUp("Web246"))
console.log(ProjectManagerObj.debugsCode(StudentObj,"CSS"))
StudentObj.listsSubjects()

