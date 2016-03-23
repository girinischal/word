# Make a Word

In this challenge, you'll build a word-guessing game like Scrabble or Boggle.

The idea for this game is simple: players have to make words out of a set of letters shown on the screen.

There are only two rules:

- Words must use only the letters shown in the set
- Words must be real dictionary words

For example, if the letters shown are `N A I P L R A`, then the following words are _correct_: `PLAN`, `AIR`, `RAIN`.

The following words are _incorrect_: `APE` (`E` is not one of the provided letters) and `NARL` (not a word).

**Your task is to build a working version of this game with HTML, CSS, and JavaScript.**

## Getting Started

1. Fork this gist
1. Open your fork in JS Bin
  - You can use this shortcut link 
1. Start working on the first objective

[open gist in JS Bin]("javascript:(function() { window.location='http://jsbin.com/gist'+window.location.pathname})()")

## Challenge Objectives

Complete each of the challenge objectives in order.

### 1: Complete the Logic in checkGuess()

Review the existing code in `index.html`, `main.css`, and `script.js`.

The incomplete logic in the `checkGuess()` function needs to be finished in order for the basic version of this game to work.

Tasks:

- Write the body code of the `checkGuess()` function so that it satisfies its description (provided in a comment just above the function declaration).
- Make sure that `checkGuess()` notifies the user of correct and incorrect guesses.

**GOOD NEWS!** This step has already been completed for you. The developer who solved it even recorded [this video for you to watch](TODO: need link) so you can get up-to-speed.

As you watch the video, note things like:

- How they go about learning about the existing code
- What steps they go through to solve the problem
- How they debug their code

### 2: Change the Letters from JavaScript

Having a single, static set of letters is not that interesting. Eventually, we'll need to change the letter set so that players can make different words.

The first step is to create a function in JavaScript that can change the letters displayed in HTML.

Tasks:

- Create a new function in your JavaScript file called `updateLetters()`.
- Inside this function, define a variable `newLetters` and set it to the string `"ABCD"`.
- This function should update the contents of the `<div>` with id `letters` with the string in `newLetters`.

For example, running `updateLetters()` should change the content of the letters `<div>` tag to `ABCD`.

Once you write your function, test it out in the Console.

### 3: Make a "Random Generate" Feature

To make the game more interesting, a player should be able to generate a new random set of letters.

Tasks:

- Create a new function called `randomLetters()` that returns a string of 7 random letters from `A` to `Z`.
- Change the `updateLetters()` function from the last objective so that it generates a new set of random letters and updates the HTML to display them.
- Make a `<button>` that, when clicked, runs the function `updateLetters()`.

If you're not sure how to generate random letters from JavaScript, the internet has many answers! Use your Google skills to find examples, but be sure to read and test them before pasting them into your code.

### 4: Improve User Interface

The current user interface (or UI, for short) is not very pretty. There is very little styling added to make it look better than the default.

Tasks:

- Write CSS (and HTML, if necessary) to make your page look nicer.

If you want inspiration, you can start by trying to re-create this style:

![example improved ui](http://f.cl.ly/items/173J1T413r0o3c1e3028/example-improved-ui.png)

### 5: Make a "Shuffle" Feature

Another common feature of word games is the "shuffle" button, which shuffles the order of the letters to make it easier to spot words that may be hidden within.

Tasks:

- Implement a "shuffle" feature for your game.

This objective is a bit harder. You'll have to figure out what it means to "shuffle" a set of characters in a string.

Make sure to work out the _logic_ for your procedure before coding it, and test your code as you go along.

### 6: Get Creative

What else can you do to improve the game? What other features would you like to build?

Some ideas:

- Make a scorecard that tracks correct and incorrect guesses.
- Make the number of letters adjustable (i.e. can choose from more or fewer than 7 letters).
- Assign number values to letters (like in Scrabble) and calculate a player's score using them.

This objective is intentionally open-ended. Have fun with it!
