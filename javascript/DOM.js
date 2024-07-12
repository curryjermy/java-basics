// let allHeadings = document.getElementsByTagName("h1")
// console.log(allHeadings);
// console.log(allHeadings.length);
// for (let i=0; i<allHeadings.length; i++){
//     console.log(allHeadings[i]);
// }

// let allHeadings = document.getElementsByClassName("head");
// console.log(allHeadings);
// console.log(allHeadings.length);

// let firstHeadings= document.getElementById("first");
// console.log(firstHeadings);

// let lists = `
// <li>car</li>
// <li>bike</li>
// `
// let ul = document.querySelector("ul");
// ul.innerHTML = lists

let biggestHeading = document.createElement("h1");
biggestHeading.className = "title"
biggestHeading.style.fontSize= "50px"
biggestHeading.textContent= "khari"
let container = document.querySelector(".container");
container.appendChild(biggestHeading);
console.log(biggestHeading);

