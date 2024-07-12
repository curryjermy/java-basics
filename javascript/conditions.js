//condition operators
// == equal to something
//!= not equal to
// >something
// <something
//   >=
//  ===
// !==



console.log(4 == "4");
console.log(4 === "4");
console.log(4 !== "4");


let grade = 75;
if (grade > 85) {
    console.log("A");
}
else if (grade < 85 && grade >= 75) {
    console.log("B");
}
else if (grade < 75 && grade > 65) {
    console.log("C");
}
else if (grade < 65 && grade > 55) {
    console.log(D);
}
else {
    console.log("F");
}
//switch
let weather = "cloudy";
switch (weather) {
    case "cloudy": console.log("you need a sweater");
        break
    case "sunny": console.log("you need a shirt");
        break
    case "rainy": console.log("you need a raincoat");
        break
    default: console.log("you dont need a raincoat");
}



let dayOfTheWeekByUser = prompt("whats the date today");
let day = dayOfTheWeekByUser.toLowerCase()
switch (day) {
    case "monday": console.log("todays monday");
        break
    case "Tuesday": console.log("todays tuesday");
        break
    case "Wednesday": console.log("todays wednesday");
        break
    case "Thursday": console.log("todays thursday");
        break
    case "Friday": console.log("todays friday");
        break
    case "Saturday": console.log("todays saturday");
        break
    case "Sunday": console.log("todays sunday");
        break
    default: console.log("not a day of the week");
}

///condition for number negative or positive
let newNumber = prompt("enter a number");
let number= Number(newNumber)
switch (true) {
    case (number > 0): console.log("number is positive");
        break;
    case (number < 0): console.log("number is negative");
        break;
    default: console.log("not a number");
}


