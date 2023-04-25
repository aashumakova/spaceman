/*----- constants -----*/

const words = {
    arm: ['humerus', 'ulna', 'radius'],
    leg: ['femur', 'tibia', 'fibula'],
    skull: ['frontal', 'occipital', 'temporal'],

}
/*----- app's state (variables) -----*/
let secretWord = '';
let count = 0;
let inputSection = '';
let winCount = 0;



/*----- cached element references -----*/
const wordsContainer = document.getElementById('words-container');
const letterContainer = document.getElementById('letter-container');
const userInputSection = document.getElementById('user-input-section');
const canvas = document.getElementById('canvas');
const resultText = document.getElementById('result-text');
const playAgainButton = document.getElementById('play-again-button');
const letterButtonsEl = document.querySelector('#letter-container');


/*----- event listeners -----*/
playAgainButton.addEventListener('click', init)
// document.querySelector('letter-container').addEventListener('click', checkLetter)
// letter.addEventListener('click', )
// letterButtonsEl.addEventListener('click',function() {
//     console.log('letters')
// })//checkLetter)
letterButtonsEl.addEventListener('click', function(event) {
    const buttonValue = event.target.textContent;
  
    console.log('Button clicked:', buttonValue);
  });



// /*----- functions -----*/
init()

function init(){
// 4.1) Initialize the stated variables
// - Secret word board is empty
// - Skeleton picture is all ready
// - Alphabet board is greyed out
// - The turn variable should be set to null since the player hasn't made any clicks yet 

// computer generates a random word
    const wordArray = words.arm;
    secretWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(secretWord)
//update the input section to show empty slots for each letter
    let displayWord = [];
    for ( let i = 0; i < secretWord.length; i++) {
        displayWord[i] = 'x';
    }
    console.log(displayWord)
}
    //update the input section to show empty slots for each letter
    // let displayWord = secretWord.split('').map(function(char) {
    //     return '<span class="dashes"></span>';
    //   }).join('');
    //   userInputSection.innerHTML = displayItem;
    //   console.log(displayItem)
// let displayWord = secretWord.split('').map(function(char) {
//     return '';
//     }).join('');
//     userInputSection.innerHTML = displayItem;

// player only has 5 tries 
//if letter clicked is present in the word (e.target) from the clicked letter
function checkLetter () {
    while (count < 5) {
        // update display word array with player's move if the letter word is correct
        // let letter = key.target;
        for ( var j = 0; j < secretWord.length; j++ ) {
            // if the letter is in the word
            if (secretWord[j] === letter) {
                // update the displayWord
                displayWord[j] = letter;
                winCount +=1;
                if (winCount === secretWord.length) {
                    resultText.innerHTML = `Good job! We have a future healthcare professional here!!!`;
                }
            } else {
                // add a strike
                count += 1;
            }
        }
        }
}

// Re-render the alphabet board with the player move (grey out the letter)
