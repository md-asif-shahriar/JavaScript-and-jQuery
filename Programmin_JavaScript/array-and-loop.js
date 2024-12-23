//declare empty array
let arr1 = [];
arr1.length = 5; //set array size to 5
arr1 = [1, 2, 3, 4, 5, 6, 7]; //fill with 5 or more than 5 elements manually
console.log(arr1); //print full array


//declare array with 10 elements using loop and index
let arr2 = [];
for (let i = 0; i < 10; i++) {
    arr2[i] = i;
}
//print array2 with loop
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
console.log(arr2.length); //print array length


//declare array with 10 elements using loop and push
let arr3 = [];
for (let i = 0; i < 10; i++) {
    arr3.push(i);
}

//------------------------------------------------------------------------------------------------------------

//declare array with 5 products
let products = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
//print all products with for each loop
for(let product of products){
    console.log(product);
}
//print all products with index for in loop
for(let index in products){
    console.log(index + " : " + products[index]);
}

//------------------------------------------------------------------------------------------------------------
let str = "Hello";

for (let char of str) {
  console.log(char);  // Output: H, e, l, l, o
}


