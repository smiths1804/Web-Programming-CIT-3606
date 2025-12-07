const words = [
    "python", "programs", "react", "variable", "functions", "object", "fullstack", "interface"
];

let CurrentWord = "";
let Scrambled = "";
let Timer = "";
let Score = "";
let TimeLeft = 60;

function ScrambleWord(word){
    return word
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
}

function StartTimer(){
    clearInterval(timer);
    timeLeft = 60;
    document.getElementById("timer").textContent = 'Time Left: ${timeLeft}';
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = 'Time Left: ${timeLeft}';
        if (timeLeft <= 0){
            clearInterval(timer);
            document.getElementById("message").textContent = "Time's up! The word was ${CurrentWord}.";
            document.getElementById("message").style.color = "red";
        }
    }, 1000);
}

function UpdateScore(){
   score++;
   document.getElementById("score").textContent = 'Score: ${score}'; 
}

function NewWord(){
    document.getElementById("message").textContent = "";
    CurrentWord = words[Math.floor(Math.random() * words.length)];
    Scrambled = ScrambleWord(CurrentWord);
    document.getElementById("scrambled-word").textContent = Scrambled;
    document.getElementById("guess").value = "";
}

function CheckWord(){
    const guess = document.getElementById("guess").value.toLowerCase();
    const message = document.getElementById("message");
}

if (!guess){
    message.textContent = "Enter your guess!";
    message.style.color = "purple";
    return;
}

if (guess === CurrentWord){
    message.textContent = "Correct! You guessed the word!";
    message.style.color = "green";
    UpdateScore();
    clearInterval(timer);
    NewWord();
} else {
    message.textContent = "Incorrect! Please try again.";
    message.style.color = "red";
    }

document.getElementById("submit-btn").addEventListener("click", CheckWord);
document.getElementById("new-btn").addEventListener("click", NewWord);
document.getElementById("hint-btn").addEventListener("click", () => {
    document.getElementById("message").textContent = 'The word starts with ${CurrentWord[0]}';
});

NewWord();