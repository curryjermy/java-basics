
let addition = a + b;

//declaration function
function addNumbers(a, b) {
    return addition;
}

//arrow function
const addNumbers = (a, b) => {
    return addition;
}

// expression function
const addNumbers = function (a, b) {
    return addition;
}

//anonymous function(no name used inside eventListeners and other functions)
setTimeout(function (a, b) {
    return addition;
}, 400)
    //immediately evoked function
    (function (a, b) {
        return addition;
    })()

//callback function(passed as a peremeter in another function)
//example
let callback = function (n) {
    return n ** 2;
};
function cubed(callback, n) {
    return callback(n) * n;
};
console.log(cubed(callback, 4));



//example
function greet (name,callback){
    console.log("hello " + name);
    callback ();
}
function sayGoodBye(){
console.log("goodbye")
}
greet("Khari",sayGoodBye);



//example
function fetchData(callback) {
    setTimeout(function () {
        console.log("Data fetched successfully");
        callback("Data");
    }, 20000);
};
function displayData(data) {
    console.log("processing data..." + data);
}
fetchData(displayData);



// inbuilt high order function (for each)
let sum = 0;
let numbersplain = [1, 2, 3, 4, 5];
numbersplain.forEach(function(n){
return(sum=sum+n);
})
console.log(sum);


let grains=["maize","gnuts","rice","beans"];
grains.forEach(function(grain){
    console.log(grain.toUpperCase());
})

//map function (also takes in a callback)

let numbers = [1, 2, 3, 4, 5];
let numberSquares=numbers.map(function(n){
return(n*n);
})
console.log(numberSquares);

// function for filtering out search data
let landCountries= ["finland", "France", "Germany", "Poland", "Ireland","Iceland", "Greenland", "Italy"];
let filteredCountries=landCountries.filter(function(country){
return country.length
})







