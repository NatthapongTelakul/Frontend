var person = [
    { firstname: "John", lastname: "Doe", age: 46},
    { firstname: "Jane", lastname: "Doe", age: 35},
    { firstname: "Natthapong", lastname: "Telakul", age: 20}
];
console.log("\n--Result 1--")
console.log(person);

console.log("\n--Result 2--")
console.log(person[0]);

console.log("\n--Result 3--")
console.log(person[0].firstname);

console.log("\n--Result 4--")
for (let i = 0; i < person.length ; i++){
    console.log(i);
    console.log(person[i].firstname + " " + person[i].lastname + " " + person[i].age) 
}

console.log("\n--Result 5--")
person.map((data)=>{console.log(data.firstname + " " + data.lastname + " " + data.age)})

