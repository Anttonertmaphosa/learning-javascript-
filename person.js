class Person {
    constructor (name,age,gender,interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    } 

    hello() {
        return `hello, my name is ${this.name} and I am a ${this.age} years old ${this.gender}. My interests are ${this.interests}`
    }

};

let obj = new Person('Anttonert',20, 'Female',['programming', 'dancing', 'reading', 'exploring'] );
let greeting = obj.hello()
console.log(greeting)