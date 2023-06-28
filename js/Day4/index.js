console.log('This is the index script.');

// let name = "John";
// let age = 22;
// let isEmployed = true;

// console.log(typeof isEmployed);

let john = {
    name: 'John',
    age: 22,
    isEmployed: false
}
var personType = typeof person;
console.log('I just created a person object. Its type is ', personType);

let jim = {
    name: 'James',
    age: 23,
    isEmployed: true
}
let personArray = [john, jim];
console.log(personArray);

function displayEmployementStatus(personArray,number){
    console.log(personArray[number].isEmployed);
}
console.log(displayEmployementStatus(personArray,1));

let mixedArray = ["John", 21, true]
console.log("The type of mixedArray is ", typeof mixedArray);
console.log(mixedArray.findIndex(x=> x==21));

//Arrays
let numbers = [1,3,4,66,12,71,23,98,9,32,66]
console.log(numbers);
console.log(numbers.lastIndexOf(66));

function findLargest(numbers){
    let temp = numbers[0];
    for(let i = 0; i <numbers.length; i++){
        if(numbers[i] > temp){
            temp = numbers[i];
        }
    }
    console.log(temp);
}

function findAverage(numbers){
    let average = 0;
    let sum = findSum(numbers);
    average = sum/numbers.length;
    console.log("The average is ", average);
}

function findSum (numbers){
    sum = 0;

    for(let i = 0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return "The sum of all the numbers: "+ sum;
}
numbers.push(22);
numbers.pop(66);
numbers.filter(x => x !== 66);

let a = []
a = numbers.sort();
console.log(a)


