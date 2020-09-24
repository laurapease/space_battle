//-------------------GREETING-----------------

$(".play").on("click", function () {
  let name = prompt("What is your name?");
  let species = prompt("What is your species?");
  alert(`OK ${name} of Species ${species}! Let us play!`);
});

const hitResponse = [
  "You got 'em! Could they BE losing any more?",
  "You got 'em! Paper! Snow! A ghost!",
  "You got 'em! Do you think that they know that we know that they know?",
  "You got 'em! It was a lesson in the importance of unagi...",
];

const randomHit = Math.floor(Math.random() * hitResponse.length);

const missResponse = [
  "You missed! Tell me you've got an exit strategy!",
  "You missed! You just made a fool of yourself in front of T-bone.",
  "You missed...but there's always money in the banana stand.",
];

const randomMiss = Math.floor(Math.random() * missResponse.length);

class Human {
  constructor(name, hull, accuracy, firepower) {
    this.name = name;
    this.hull = hull;
    this.accuracy = accuracy;
    this.firepower = firepower;
    this.isAlive = true;
  }
  attack(target) {
    target.hull -= this.firepower;
    return this.firepower;
  }
}

const USSAssembly = new Human(
  (name = "USS Assembly"),
  (hull = 20),
  (accuracy = 0.7),
  (firepower = 5),
  (isAlive = true)
);

console.log(USSAssembly);

class Alien {
  constructor(name) {
    this.name = name;
    this.hull = Math.floor(Math.random() * 5) + 3;
    this.firepower = Math.floor(Math.random() * 2) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }
}

const Alien1 = new Alien((name = "Spaceship Chandler Bing"));
console.log(Alien1);

const Alien2 = new Alien((name = "Spaceship Monica Gellar"));
console.log(Alien2);

const Alien3 = new Alien((name = "Spaceship Rachel Green"));
console.log(Alien3);

const Alien4 = new Alien((name = "Spaceship Joey Tribbiani"));
console.log(Alien4);

const Alien5 = new Alien((name = "Spaceship Ross Gellar"));
console.log(Alien5);

const Alien6 = new Alien((name = "Spaceship Phoebe Buffay"));
console.log(Alien6);

const alienArmy = [Alien1, Alien2, Alien3, Alien4, Alien5, Alien6];

/// Attack Method

function attack() {
  for (let i = 0; i < alienArmy.length; i++) {
    let alienAttacker = alienArmy[i];
    console.log(alienAttacker);

    // if (Math.random() <= this.accuracy) {
    //   alienattacker.hull -= this.firepower;
    //   if (alienattacker.hull > 0) {
    //   }
    //   console.log(randomHit);
    // } else {
    //   console.log(missResponse);
    // }

    