const words = [

];

let CurrentWord = "";
let Scrambled = "";

function ScrambleWord(word){
    return word
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
}

function NewWord(){

}

function CheckWord(){

}

if (!guess){
    message.textContent = "Enter your guess!";
    message.style.color = "purple";
    return;
}

if (guess === CurrentWord){


    } else {

    }

document.getElementById("submit-btn").addEventListener("click", CheckWord);
document.getElementById("new-btn").addEventListener("click", NewWord);