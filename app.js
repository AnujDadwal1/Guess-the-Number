let randomnumer= parseInt(Math.random() * 100+1);
const submit=document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p =document.createElement('p');
let prevguess =[];
let numGuesses = 1;
let playGame = true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    });
}  
function validateGuess(guess){
 if(isNaN(guess)){
    alert("Please enter a valid number");
 }
 else if(guess<1){
    alert("Please enter a number grater than 1");
 }
 else if(guess>100){
    alert("Please enter a number less than 100");
 }
 else{
    prevguess.push(guess);
    if(numGuesses === 11){
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomnumer} `);
        endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
 }
}
function checkGuess(guess){
 if(guess === randomnumer){
   displayMessage(`You guessed it right`);
   endGame();
  }
  else if(guess<randomnumer){
   displayMessage(`Number is TOOO Low`); 
  }
  else if(guess>randomnumer){
    displayMessage(`Number is TOOO High`);
  }
}
function displayGuess(guess){
    userInput.value='';
    guessslot.innerHTML +=`${guess} , `;
    numGuesses++;
    remaining.innerHTML =`${11-numGuesses}`;
}
function displayMessage(message){
   lowOrHi.innerHTML =`<h2>${message}</h2>`;
}
function newGame(){
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e){
    randomnumer = parseInt(Math.random() * 100+1);
    prevguess =[];
    numGuesses=1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11-numGuesses}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame = true;
});
}
function endGame(){
userInput.value=" ";
userInput.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
startOver.appendChild(p);
playGame = false;
newGame();
}