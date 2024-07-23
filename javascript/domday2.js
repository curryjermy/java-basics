let heading = document.createElement("h1");
heading.className = "title";
heading.style.fontSize = "150px";
heading.textContent="Khari";
let big= document.querySelector(".big");
big.appendChild(heading);
console.log(heading);

//document.createElement(); for creating elemnets, goes hand in hand with append child and append and best with containers.
//getelement for reading html
//document.addElement we use innerHtml(add text into already existant tags) then textContent used to add text into none existant tags 
