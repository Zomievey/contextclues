var accusationElements = [];
var friends = ["Hunter", "Lesly", "Finley", "Riley", "Jesus"];
var locations = ["Broom Closet", "Bathroom", "Backyard", "Pool House", "Theater", "Man Cave", "Hot Tub", "Bedroom", "Laundry Room", "Kitchen"];
var weapons = ["Knife", "Gun", "Sword", "Fork", "Soldering Iron", "Golf Club", "Hammer", "Garden Hose", "Rope", "Frying Pan", "Brick", "Rubik Cube", "Flame-thrower", "Bow and Arrow", "Screwdriver", "Saw", "Box Cutter", "Poison", "Car", "Fart"];

for (let index = 1; index < 101; index++) {
    var currentElement = document.createElement("h3");
    currentElement.innerText = "accusation " + index;
    accusationElements.push(currentElement);

    currentElement.addEventListener('click', ()=> {
      displayAccusation(index);

    });

    document.body.appendChild(currentElement);




}


function displayAccusation(accusationNumber) {
    var friend = friends[accusationNumber % 5]
    var location = locations[accusationNumber % 10]
    var weapon = weapons[accusationNumber % 20]
  
    alert(`I accuse ${friend}, with the ${weapon}, in the ${location}!`);
}