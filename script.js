document.addEventListener('DOMContentLoaded', () => {
    // Game variables
    const words = ["python", "hangman", "computer", "programming", "keyboard"];
    let selectedWord = "";
    let guessedLetters = [];
    let incorrectGuesses = 0;
    const maxIncorrect = 6;
    
    // DOM elements
    const wordDisplay = document.getElementById('word-display');
    const incorrectCountDisplay = document.getElementById('incorrect-count');
    const guessedLettersDisplay = document.getElementById('guessed-letters');
    const messageDisplay = document.getElementById('message');
    const keyboardContainer = document.getElementById('keyboard');
    const restartButton = document.getElementById('restart-btn');
    const hangmanParts = document.querySelectorAll('.hangman-part');
    
    // Initialize the game
    function initGame() {
        // Reset game state
        selectedWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
        guessedLetters = [];
        incorrectGuesses = 0;
        
        // Reset UI
        incorrectCountDisplay.textContent = '0';
        guessedLettersDisplay.textContent = '';
        messageDisplay.textContent = '';
        messageDisplay.className = 'message';
        
        // Hide all hangman parts
        hangmanParts.forEach(part => part.classList.add('hidden'));
        
        // Create keyboard
        createKeyboard();
        
        // Display word placeholders
        displayWord();
    }
    
    // Create the keyboard buttons
    function createKeyboard() {
        keyboardContainer.innerHTML = '';
        
        for (let i = 97; i <= 122; i++) {
            const letter = String.fromCharCode(i);
            const button = document.createElement('button');
            button.textContent = letter;
            button.className = 'key';
            button.id = `key-${letter}`;
            button.addEventListener('click', () => handleGuess(letter));
            keyboardContainer.appendChild(button);
        }
    }
    
    // Display the word with placeholders for unguessed letters
    function displayWord() {
        wordDisplay.innerHTML = '';
        
        selectedWord.split('').forEach(letter => {
            const letterBox = document.createElement('div');
            letterBox.className = 'letter-box';
            
            if (guessedLetters.includes(letter)) {
                letterBox.textContent = letter;
            }
            
            wordDisplay.appendChild(letterBox);
        });
    }
    
    // Handle a letter guess
    function handleGuess(letter) {
        // Ignore if letter already guessed or game over
        if (guessedLetters.includes(letter) || incorrectGuesses >= maxIncorrect || !messageDisplay.textContent === '') {
            return;
        }
        
        // Add to guessed letters
        guessedLetters.push(letter);
        guessedLettersDisplay.textContent = guessedLetters.join(', ');
        
        // Update keyboard UI
        const keyButton = document.getElementById(`key-${letter}`);
        keyButton.classList.add('used');
        
        // Check if letter is in the word
        if (selectedWord.includes(letter)) {
            keyButton.classList.add('correct');
            displayWord();
            checkWin();
        } else {
            keyButton.classList.add('incorrect');
            incorrectGuesses++;
            incorrectCountDisplay.textContent = incorrectGuesses;
            
            // Show the corresponding hangman part
            if (incorrectGuesses <= maxIncorrect) {
                hangmanParts[incorrectGuesses - 1].classList.remove('hidden');
            }
            
            // Check if game is lost
            if (incorrectGuesses >= maxIncorrect) {
                endGame(false);
            }
        }
    }
    
    // Check if player has won
    function checkWin() {
        const isWin = selectedWord.split('').every(letter => guessedLetters.includes(letter));
        
        if (isWin) {
            endGame(true);
        }
    }
    
    // End the game
    function endGame(isWin) {
        if (isWin) {
            messageDisplay.textContent = 'Congratulations! You guessed the word!';
            messageDisplay.classList.add('win-message');
        } else {
            messageDisplay.textContent = `Sorry, you ran out of guesses. The word was "${selectedWord}".`;
            messageDisplay.classList.add('lose-message');
            
            // Reveal the word
            wordDisplay.innerHTML = '';
            selectedWord.split('').forEach(letter => {
                const letterBox = document.createElement('div');
                letterBox.className = 'letter-box';
                letterBox.textContent = letter;
                wordDisplay.appendChild(letterBox);
            });
        }
        
        // Disable keyboard
        document.querySelectorAll('.key').forEach(key => {
            key.disabled = true;
            if (!key.classList.contains('used')) {
                key.classList.add('used');
            }
        });
    }
    
    // Restart game button
    restartButton.addEventListener('click', initGame);
    
    // Start the game
    initGame();
});