class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  greeting(){
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

module.exports = Person;

/* const person = {
  name : "John Doe",
  age : 25
};

module.exports = person; */
