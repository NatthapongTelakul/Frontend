function sayHi(username,lastname){
    console.log("Hello " + username +" " + lastname)
    console.log(`Hello ${username} ${lastname}`)
}

sayHi("Kasikrit", "Damkliang")

function squareA(n){
        return n*n;
}

let squareB = function(n){
    return n*n;
}

let a = squareA(10);
console.log(a);
let b = squareB(10);
console.log(b);


let area = function(width,height){
    return width*height;
}

let square_area = area(10,20);
console.log(square_area);