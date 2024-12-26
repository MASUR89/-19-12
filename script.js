//acync, await - 
setTimeout(() => {
async function fetchData() {
    try {
        const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
        const postId = await comments.json();
        // console.log(postId);
    } catch (error) {
        console.error(error);
    }
}
fetchData();
}, 3000);

//----------------------24/12/24
class Person {
    constructor(city, age) {
        this.city = city;
        this.age = age
    }

    greet() {
        console.log(`name is ${this.city} and age is ${this.age}`);
    }
}
const person1 = new Person("Tbilisi", 20);
person1.greet()

//---
class Animal {
    constructor(nick, color){
        this.nick = nick;
        this.color = color;
    }

    speak() {
        console.log(`This ${this.color} animal name is ${this.nick}`);
    }
}

// class Dog extends Animal {
//     speak(){
//         console.log(`this ${this.color} dog is ${this.nik}`);
//     }
// }

class Cat extends Animal {
    constructor (nick, color, size) {
        super(nick, color);
        this.size = size;
    }

    display(){
        console.log(`the ${this.color} cat is ${this.size} and it's name is ${this.nick}`);
    }
}


// const dog1 = new Dog("Charly", "black");
// dog1.speak();

const cat1 = new Cat( "mimi", "grey","big");
cat1.display();
cat1.speak();