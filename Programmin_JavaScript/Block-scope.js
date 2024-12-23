//2.1 - Block Scope
let age1 = 22;
if(age1 > 18){
    let isAdult = true;
}
//console.log(isAdult); // Error: isAdult is not defined

//2.2 - Block Scope
let age2 = 22;
if(age2 > 18){
    var isAdult = true;
}
console.log(isAdult); // true

//2.3 - Block Scope
let age3 = 22;
if(age3 > 18){
    const isAdult = true;
}
//console.log(isAdult); // Error: isAdult is not defined

//2.4 - Block Scope
let age4 = 22;
if(age4 > 18){
    const isAdult = true;
    console.log(isAdult); // true
}
