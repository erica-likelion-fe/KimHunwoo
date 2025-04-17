 
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const attemptsLeftSpan = document.getElementById('attemptsLeft');
const feedbackParagraph = document.getElementById('feedback');
const historyParagraph = document.getElementById('history');
const newGameButton = document.getElementById('newGameButton');

let targetNumber;  
let attempts;      
let guessHistory;  

 
function initGame() {
     
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;  
    guessHistory = [];  

     
    attemptsLeftSpan.textContent = attempts;
    feedbackParagraph.textContent = '';  
    historyParagraph.textContent = '기록: ';  
    guessInput.value = '';  
    guessInput.disabled = false;  
    guessButton.disabled = false;  
    newGameButton.style.display = 'none';  
}

 
function handleGuess() {
    const userGuess = parseInt(guessInput.value);  

    if (userGuess < 1 || userGuess > 100) {
        feedbackParagraph.textContent = '1부터 100 사이의 숫자를 입력해주세요.';
        feedbackParagraph.style.color = 'orange';
        guessInput.value = '';  
        return;  
    }

    attempts--;
    attemptsLeftSpan.textContent = attempts;

     
    guessHistory.push(userGuess);
    historyParagraph.textContent = `추측 기록: ${guessHistory.join(', ')}`;

     
    if (userGuess === targetNumber) {
        feedbackParagraph.textContent = `정답입니다! 숫자는 ${targetNumber} 였습니다.`;
        feedbackParagraph.style.color = 'green';
        endGame();  
    } else if (userGuess < targetNumber) {
        feedbackParagraph.textContent = 'UP! 더 높은 숫자입니다.';
        feedbackParagraph.style.color = 'blue';
    } else {  
        feedbackParagraph.textContent = 'DOWN! 더 낮은 숫자입니다.';
        feedbackParagraph.style.color = 'red';
    }

     
    if (attempts === 0 && userGuess !== targetNumber) {
        feedbackParagraph.textContent = `실패! 정답은 ${targetNumber} 였습니다.`;
        feedbackParagraph.style.color = 'purple';
        endGame();  
    }
    guessInput.value = '';
    guessInput.focus();
}

function endGame() {
    guessInput.disabled = true;   
    guessButton.disabled = true;  
    newGameButton.style.display = 'inline-block';  
}

guessButton.addEventListener('click', handleGuess);
newGameButton.addEventListener('click', initGame);  

initGame();

guessInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
         
        if (!guessButton.disabled) {
            handleGuess();
        }
    }
});