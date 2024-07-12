let name = "khari";
let age = 21;
console.log(age);
const cars = ["mercedes", "toyota", 2, 6];
cars[4]="jeremy"
console.log(cars.length);
console.log("paper");

//function greeting my mom
function greeting(name, lastName){
    console.log("hello "+name+ ' ' + lastName);   
}
greeting("mom","love");
//an array of a list of all different datatypes
let profile= ["khari",
     10,
      true,
       {country:"uganda",city:"kampala"},
       {skills:["basketball", "IT", "social skills"]}]
       console.log("here is a profile:",profile);
       let firstName = "william";
       let lastName = "khari";
       let fullName = (firstName+ " "+lastName);
       console.log(fullName);
       
       
       // function calculating area of a circle
       function areaOfCircle(radius){ 
         let areaOfCircle = Math.PI*radius*radius
         console.log(areaOfCircle);
       }
       areaOfCircle(100);
       //function to add two numbers
       const sum = (x,y)=> x+y;
       console.log(sum(5,5));
       //function to multiply two numbers
       const product = (a,b)=> a*b;
       console.log(product(5,5));
       //function to calculate gravity F = GMm r2

       const gravity = (g=6.673*10**11,M=9.8,m,r)=> g*M*m*r*r;
       console.log(gravity(g=6.673*10**11,M=9.8,5,5));
      
       //function to calculate force of a 



