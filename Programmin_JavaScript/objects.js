//Declaring empty object
let obj1 = {};
//assign name, age and country property to obj1
obj1.name = "Asif";
obj1.age = 22;
obj1.country = "Bangladesh";
console.log(obj1["name"]); // print specific property value
console.log(obj1); // Output: { name: 'Asif', age: 22, country: 'Bangladesh' }
delete obj1.age; // delete age property from obj1
console.log(obj1); // Output: { name: 'Asif', country: 'Bangladesh' }

//------------------------------------------------------------------------------------------------------------

//declare object with name, age and country property in a single line
let obj2 = { name: "Asif", age: 22, country: "Bangladesh" };
console.log(obj2); // Output: { name: 'Asif', age: 22, country: 'Bangladesh' }  

//------------------------------------------------------------------------------------------------------------

//declare object with name, age and country property in a single line and print with loop
let obj3 = { name: "Asif", age: 22, country: "Bangladesh" };
for (let key in obj3) {
    console.log(key + ": " + obj3[key]); // Output: name: Asif, age: 22, country: Bangladesh
    console.log(`${key}: ${obj3[key]}`); // same thing using ES6 template string
}

//------------------------------------------------------------------------------------------------------------

//Dynamic property add in object
let obj4 = { name: "Asif", age: 22, country: "Bangladesh" };
obj4["gender"] = "Male";
obj4.city = "Dhaka";
console.log(obj4); // Output: { name: 'Asif', age: 22, country: 'Bangladesh', gender: 'Male', city: 'Dhaka' }

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

//Normal copy of object, if i change obj5 then obj6 will be changed. because obj6 just refer to obj5 memory location.
let obj5 = { name: "Asif", age: 22, country: "Bangladesh" };
let obj6 = obj5;

/*Shallow copy of object. if i change obj7 then obj8 will not be changed. because obj8 is a new object. 
However, if obj7 has nested object then obj8 will be changed. Because shallow copy only create difference in top level */
let obj7 = { name: "Asif", age: 22, country: "Bangladesh" };
let obj8 = {...obj7}; // using spread operator

//Deep copy of object. if i change obj9 then obj10 will not be changed. because obj10 is a new object. It also change nested objects.
let obj9 = { name: "Asif", age: 22, country: "Bangladesh", address: { city: "Dhaka", zip: 1207 } };
let obj10 = JSON.parse(JSON.stringify(obj9)); // using JSON

//Difference between shallow and deep copy
let obj11 = { name: "Asif", age: 22, country: "Bangladesh", address: { city: "Dhaka", zip: 1207 } };
let obj12 = {...obj11}; // using spread operator
obj12.address.city = "Comilla";
console.log(obj11); // Output: { name: 'Asif', age: 22, country: 'Bangladesh', address: { city: 'Comilla', zip: 1207 } }
let obj13 = JSON.parse(JSON.stringify(obj11)); // using JSON
obj13.address.zip = "1500";
console.log(obj11); // Output: { name: 'Asif', age: 22, country: 'Bangladesh', address: { city: 'Comilla', zip: 1207 } }

//------------------------------------------------------------------------------------------------------------

//Adding a new key to object and merge it with previous object
let person = { name: "Asif", age: 22, country: "Bangladesh" };
let additionalInfo = { gender: "Male" };
let updatedPerson = { ...person, ...additionalInfo };
console.log(updatedPerson); // Output: { name: 'Asif', age: 22, country: 'Bangladesh', gender: 'Male' }

//------------------------------------------------------------------------------------------------------------

/*Preventing object modification 
- using freeze: Eta shobcheye strict
1. Ekhane obj and obj er value update kora jabena
2. Ekhane new property add kora jabena
3. Kono property delete kora jabena */
let person2 = { name: "Asif", age: 22, country: "Bangladesh" };
Object.freeze(person2);
person2.name = "Mike"; // Error or ignored in strict mode

/*using seal: Eta shobcheye strict
1. Ekhane obj er value update kora jabe **
2. Ekhane new property add kora jabena
3. Kono property delete kora jabena */
let person3 = { name: "Asif", age: 22, country: "Bangladesh" };
Object.seal(person3);
delete person3.age; // Error or ignored in strict mode

/*using preventExtensions: Eta shobcheye strict
1. Ekhane obj er value update kora jabe **
2. kintu Ekhane new property add kora jabe na
3. Kono property delete kora jabe ** */
let person4 = { name: "Asif", age: 22, country: "Bangladesh" };
Object.preventExtensions(person4);
person4.city = "Dhaka"; // Error or ignored in strict mode

//------------------------------------------------------------------------------------------------------------
