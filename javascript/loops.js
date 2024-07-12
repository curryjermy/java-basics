//for loop (best for when number of loops is known)
//first we have a start point
let m = 0;
for (let m = 0; m <= 5; m++) {
    console.log(m);
}
//for loop 5-0
let b = 5;
for (let b = 5; b >= 0; b--) {
    console.log(b);
}


//initialisation, condition, increment or decrement
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}
console.log(sum);

//loop that prints hello 5 times in the teminal
for (let f = 0; f < 5; f++) {
    console.log("hello");
}
for (let i = 0; i < 100; i++) {
    console.log("im sorry");
}


//while loop (best for when the number of loops is unknown)
let s = 0;
while (s <= 5) {
    console.log(s);
    s++
}
//do while loop
let r = 0;
do {
    console.log(r);
    r++
}
while (r < 5)

//for of loop
let numbers1 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}
console.log(sum);

for (const digit of numbers1) {
    console.log(digit);
}

let cereals = ["maize", "gnuts", "rice"]
for (const grains of cereals) {
    console.log(grains);
}


const produceList = [{ name: "beans", type: "legume", weight: 1000, cost:500000 },
{ name: "maize", type: "grain", weight: 2000, cost:700000},
{ name: "gnut", type: "grain", weight: 1500, cost:600000 },
{name: "rice", type:"grain", weight: 3000, cost:800000}]
for(const produce of produceList){
    console.log(`name:${produce.name},type:${produce.type},weight:${produce.weight}kg,cost:${produce.cost}ugx`);
}