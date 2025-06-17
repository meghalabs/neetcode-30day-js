// Day 5 - Objects

const person = {
    name: "Megha",
    age: 35,
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

person.greet();