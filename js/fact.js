var factPlaceholder = document.getElementById("random-fact");
var showFact = document.getElementById("show-fact");

/* Facts from this API: https://fact.birb.pw/api/v1/cat */

var RandomFacts = ["No number from 1 to 999 includes the letter 'a' in its word form.",
               "Polar bear fur is actually clear, and their skin is black.",
               "Cats are asleep for 70% of their lives.",
               "Baby flamingos are born grey, not pink.",
               "A woodpecker’s tongue actually wraps all the way around its brain, protecting it from damage when it’s hammering into a tree.",
              "A shrimp’s heart is located in its head.", "Anteaters have no teeth.","Wombat poop is cube-shaped.",
              "There are 32 muscles in a cat’s ear.","The average person living in Sweden eats about 22 pounds of chocolate a year.",
              "Finland has more saunas than cars.","Ninety percent of Libya is desert.",
              "Happy Birthday” was the first song ever played on Mars. Mars Rover Curiosity played the song to itself on its first anniversary on the planet.",
              "While listening to music, your heart can sync to the rhythm.",
              "Tennis was originally played with bare hands.","We’re the only species known to blush",
              "Stomach acid is strong enough to dissolve metal.",
            ]

var factNumber;

function randomFact(){
  return RandomFacts[factNumber];
}

showFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*17);
  factPlaceholder.textContent = randomFact();
});