let randomNumber=parseInt(Math.random()*100+1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainig = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p=document.createElement('p')


let prevGuess=[];
let numGuess=1

let playGame=true
if (playGame){
    submit.addEventListener('click',function (endgame) {
        endgame.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}


function validateGuess(guess){
    // it function chek value of guess
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if ( guess<1){
        alert('please enter a  number more than 1')
    }
    else if ( guess>100){
        alert('please enter a  number less then 100')
    }else{
        prevGuess.push(guess);
        if(numGuess===10){
            displayguess(guess);
            displayMessage(`Game over Random Number was ${randomNumber}`)
            endgame()
        }else{
            displayguess(guess);
            chekGuess(guess)
        }
    }
}

function chekGuess(guess) {
    //chek value and send message low high 
    if (guess===randomNumber){
        displayMessage(`You guss right `);
        endgame();
    }else if (guess<randomNumber){
        displayMessage(`number is too low`);
    }else if (guess>randomNumber){
        displayMessage(`number is too high`);
    }
}

function displayguess(guess) {
    //all dom manupilation
    userInput.value=''
    guessSlot.innerHTML+=`${guess},`
    numGuess++
    remainig.innerHTML=`${11-numGuess}`
}

function displayMessage(message) {
    // 
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endgame() {
    //
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<button id='newGame'>Start new Game</button>`;
    startOver.appendChild(p);
    playGame=false
    newGame()
}

function newGame() {
    //
    const newGameButton= document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remainig.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame=true
    })
}