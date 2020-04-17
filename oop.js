class Person {
    constructor(name, age , gender, interests) {
        this.name = name
        this.age = age 
        this.gender = gender
        this.interests = interests
    }

    information(){
        console.log(`name:\t${this.name}\n age:\t${this.age}\n gender:\t${this.gender}\n interests:\t${this.interests}`)
    }
}

let obj = new Person('Anttonert',20,'Female',['coding','agile','learning new things','reading'] )
obj.information()