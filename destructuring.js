const names = ["Fred", "Kate", "Cindy", "Ricky", "Keith"];
console.log(names);

const [fred, kate, ...remaigningNames] = names;
console.log(kate);
console.log(remaigningNames);

const person = {
  name: "Joni",
  age: 76
};
const name = person.name;
const age = person["age"];

console.log("Before destructuring: ")
console.log(name);
console.log(age);

const person2 = {
  name2: "Ricky",
  age2: 24
};


const {name2, age2} = person2;
console.log("After destructuring: ")
console.log(name2);
console.log(age2);