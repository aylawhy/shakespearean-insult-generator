// *-- Shakespearean Insult Generator --*
// by Ayla Y.
// A program that generates random Shakespearean insults by concatenating elements from three arrays.
// (Created as a way to help me learn CSS and JavaScript)

// Insult lists from No Sweat Shakespeare: https://www.nosweatshakespeare.com/resources/shakespeare-insults/

document.addEventListener('DOMContentLoaded', () => {
// Create JS object for button
const getInsultButton = document.querySelector(".get");

// Create first array (this contains the first piece of the insult)
const adjectiveList1 = ["Artless", "Bawdy", "Beslubbering", "Bootless", "Churlish", "Cockered", "Clouted", "Craven", "Currish", "Dankish", "Dissembling", "Droning", "Errant", "Fawning", "Impertinent", "Infectious", "Loggerheaded", "Lumpish", "Mammering", "Pribbling", "Qualling", "Roguish", "Saucy", "Spleeny", "Spongy", "Surly", "Tottering", "Unmuzzled", "Vain", "Venomed", "Villainous", "Warped", "Weedy", "Yeasty"];

// Create second array (this contains the second part of the insult)
const adjectiveList2 = ["bat-fowling", "beetle-headed", "common-kissing", "dizzy-eyed", "fly-bitten", "fool-born", "full-gorged", "half-faced", "hasty-witted", "hedge-born", "idle-headed", "knotty-pated", "onion-eyed", "reeling-ripe", "swag-bellied", "toad-spotted", "weather-bitten"];

// Create third array (this contains the final part of the insult)
const nounList = ["apple-john", "canker-blossom", "codpiece", "dewberry", "flirt-gill", "hedge-pig", "hugger-mugger", "jolthead", "maggot-pie", "minnow", "moldwarp", "mumble-news", "puttock", "ratsbane", "scut", "strumpet", "vassal", "wagtail"];

// Get random elements from each list using Math.random and concatenate them into a string
getInsultButton.onclick = function newInsult() {
  
  // Generate random number and use that as the index to get a random element from each list
  let indexNumber1 = Math.floor(Math.random() * adjectiveList1.length);
  let indexNumber2 = Math.floor(Math.random() * adjectiveList2.length);
  let indexNumber3 = Math.floor(Math.random() * nounList.length);
  
  // Display final result
  getInsultButton.textContent = `${adjectiveList1[indexNumber1]} ${adjectiveList2[indexNumber2]} ${nounList[indexNumber3]}!`;
}};
