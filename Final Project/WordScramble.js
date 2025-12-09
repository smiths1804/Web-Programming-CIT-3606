const words = [
    "python", "programs", "react", "variable", "functions", "object", "fullstack", "interface", "devices", "software", "debugging"
];

let currentWord = "";
let scrambled = "";
let timer = null;
let score = 0;
let timeLeft = 60;

function scrambleWord(word) {
    if (!word) return "";
    if (word.length < 2) return word;

    const arr = word.split("");
    // if all characters are the same, just return the word
    if (arr.every((c) => c === arr[0])) return word;

    let shuffled = word;
    // Fisher-Yates shuffle
    while (shuffled === word) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        shuffled = arr.join("");
    }
    return shuffled;
}

function $(id) { return document.getElementById(id); }

function updateScoreUi() {
    const el = $("score");
    if (el) el.textContent = `Score: ${score}`;
}

function updateTimerUi() {
    const el = $("timer");
    if (el) el.textContent = `Time: ${timeLeft}`;
}

function startTimer(seconds = 60) {
    if (timer) clearInterval(timer);
    timeLeft = seconds;
    updateTimerUi();

    timer = setInterval(() => {
        timeLeft--;
        updateTimerUi();

        if (timeLeft <= 0) {
            clearInterval(timer);
            timer = null;
            const msg = $("message");
            if (msg) {
                msg.textContent = `Time's up! The word was "${currentWord}".`;
                msg.style.color = "red";
            }
            // automatically load next word after a short pause
            setTimeout(newWord, 1500);
        }
    }, 1000);
}

function newWord() {
    const msg = $("message");
    if (msg) msg.textContent = "";

    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambled = scrambleWord(currentWord);

    const scrEl = $("scrambled-word");
    if (scrEl) scrEl.textContent = scrambled;

    const guessEl = $("guess-word");
    if (guessEl) {
        guessEl.value = "";
        guessEl.focus();
    }

    updateScoreUi();
    startTimer(60);
}

function updateScore() {
    score++;
    updateScoreUi();
}

function checkWord() {
    const guessInput = $("guess-word");
    const message = $("message");
    if (!guessInput || !message) return;

    const guess = guessInput.value.trim().toLowerCase();
    if (!guess) {
        message.textContent = "Enter your guess!";
        message.style.color = "purple";
        return;
    }

    if (guess === currentWord) {
        message.textContent = "Correct! You guessed the word!";
        message.style.color = "green";
        updateScore();
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        setTimeout(newWord, 800);
    } else {
        message.textContent = "Incorrect! Please try again.";
        message.style.color = "red";
    }
}

function showHint() {
    const message = $("message");
    if (!message) return;
    if (!currentWord) {
        message.textContent = "No word yet!";
        return;
    }
    message.textContent = `Hint: starts with "${currentWord[0]}" and is ${currentWord.length} letters.`;
    message.style.color = "black";
}

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = $("submit-btn");
    const newBtn = $("new-btn");
    const hintBtn = $("hint-btn");
    const guessInputEl = $("guess-word");

    if (submitBtn) submitBtn.addEventListener("click", checkWord);
    if (newBtn) newBtn.addEventListener("click", newWord);
    if (hintBtn) hintBtn.addEventListener("click", showHint);

    if (guessInputEl) {
        guessInputEl.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                checkWord();
            }
        });
    }

    // initialize game
    score = 0;
    updateScoreUi();
    newWord();
});