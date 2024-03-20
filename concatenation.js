let submitButton = document.querySelector(".submit");
let results = document.querySelector(".results");

submitButton.addEventListener("click", function() {
  results.style.display = "block";
  let myName = document.querySelector(".my-name").value;
  let mood = document.querySelector(".mood").value;
  let food = document.querySelector(".food-name").value;
  let birthYear = document.querySelector(".year").value;
  let age = 2023 - birthYear; // update to 2024, if necessary
  // 1. Declare a variable to save the value of the city the user is from.
  let city = document.querySelector(".city").value
  // 2. Below write your sentences! 
  // - Have them show up in the div with class "results".
  // - Example paragraph: "My name is (myName). I'm feeling (mood) and I absolutely lovveeee eating (food) 😍..."
  // - Try placing your sentences into <p> or <li> tags.

results.innerHTML = "Hi " + myName + ", how are you? I see you're " + mood + " today, that's unexpected from you. " + food + " is my favorite food too! I see you're a " + birthYear + " baby, honestly you're really old... You live in " + city + ", that's not far from where I live..." ;
});