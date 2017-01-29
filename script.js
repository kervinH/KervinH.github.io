var myName= "Kervin";

function sayHello(myName){
  alert("Hello" + myName)
}
sayHello(myName);
var myName = "Kervin"
var perfectSquare = 9;
var isSunday = true;

function sayHello(){
  alert("Hello" + myName)
}

var animals = document.getElementsByClassName("animal")
var bestAnimal= document.getElementById("best-animal")

function getBestAnimal(){
// get the user's favorite animal
// store the favorite animal
var fave = prompt("What is your favorite animal?")
console.log(fave)
  // change the best-animal to match the user's input
  var bestAnimal= document.getElementById("best-animal")
  bestAnimal.textContent = fave; 
}
getBestAnimal()
console.log("animals")
