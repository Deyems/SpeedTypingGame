
window.addEventListener("load",init);

// SCRIPTING THE GAME

//DOM ELEMENTS
let wordInput = document.querySelector("#word-input");
let currentWord = document.querySelector("#current-word");
let timeLeft = document.querySelector("#leftTime");
let scores = document.querySelector("#score");
let message = document.querySelector('#message');
let givenTime = document.querySelector('#timeAlloted');
var counter = 5;
var isPlaying;
var score = 0;

var words = [
    "River","Plantain","Banana","Formidable","Wonderful","Cocktail","Nutrition","Revolver"
];

// Initialize Game
function init(){
    RandomWord = Math.floor(Math.random()*words.length);
    currentWord.innerHTML = words[RandomWord];

    // Start Matching on word Input
    wordInput.addEventListener('input',startMatch);


    //Call Countdown every second
    setInterval(countdown, 1000);

    //CHeck Game Status
    setInterval(checkStatus,50);

    //let typedW = wordInput.value;
}


// Start Match function
function startMatch() {
    if(matchWords()){
        console.log('there is MATCH');
    }
}

function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!';
        return true;
    } else{
        message.innerHTML  = '';
        return false;
    }
}

//Countdown Function
function countdown(){
    if(counter > 0){
        counter--;
    timeLeft.innerHTML = counter;
    } else if(counter===0){
        isPlaying == false;
        clearInterval(countdown);
        //clearTimeout(countdown);
        timeLeft.innerHTML = '';
    }
    console.log(counter);
}

function checkStatus(){
    if(!isPlaying && counter === 0){
        message.style.color = 'red';
        message.innerHTML = 'Game Over!!!';
    }
}
