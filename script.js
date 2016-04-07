// A function to get the set of possible letters
function getLetters() {
  // Select the element with the id 'letters'
  var lettersContainer = document.querySelector('#letters');

  // Get the text content of the element
  var letters = lettersContainer.innerText;

  // Return the letters
  return letters;
}

// A function to get the user's guess
function getGuess() {
  // Select the input element where the user enters their guess
  var wordGuess = document.querySelector('input#word-guess');

  // Get the text content of the element
  var guess = wordGuess.value;

  // Return the guess
  return guess;
}

// A function to display a message on the screen
function showMessage(messageText) {
  // Select the element to display a message
  var messageElem = document.querySelector('#game-message');

  // Set the text value of the element to the provided text
  messageElem.innerText = messageText;
}