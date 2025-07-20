# Hangman Game

A classic Hangman word guessing game implemented in two versions: a web-based version using HTML, CSS, and JavaScript, and a command-line version using Python.

## Game Description

Hangman is a word guessing game where the player tries to guess a hidden word by suggesting letters. For each incorrect guess, a part of a hangman figure is drawn. The player wins by guessing all the letters in the word before the complete hangman figure is drawn (6 incorrect guesses).

## Web Version

### Features

- Interactive keyboard for letter selection
- Visual hangman figure that builds with each incorrect guess
- Word display with placeholders for unguessed letters
- Game status information (incorrect guesses, guessed letters)
- Win/lose messages
- Responsive design that works on different screen sizes

### How to Play

1. Open the `index.html` file in a web browser
2. A random word will be selected, and placeholders will be displayed
3. Click on letter buttons to make guesses
4. For each correct guess, the letter will appear in the word
5. For each incorrect guess, a part of the hangman figure will appear
6. Win by guessing all letters before the hangman is complete
7. Click the "Restart Game" button to play again

## Python Version

### Features

- Command-line interface
- ASCII art hangman figure
- Word display with placeholders
- Game status information (incorrect guesses, guessed letters)

### How to Play

1. Make sure you have Python installed on your computer
2. Open a terminal/command prompt
3. Navigate to the game directory
4. Run the game with the command: `python hangman.py`
5. Follow the on-screen instructions to play
6. Enter one letter at a time to guess
7. The game will end when you either guess the word or run out of attempts

## Project Structure

- `index.html` - The main HTML file for the web version
- `styles.css` - CSS styling for the web version
- `script.js` - JavaScript code for the web version's game logic
- `hangman.py` - Python script for the command-line version
- `README.md` - This file with game instructions

## Customization

You can customize the game by modifying the word list in either version:

- In the web version: Edit the `words` array in `script.js`
- In the Python version: Edit the `words` list in `hangman.py`

## Requirements

### Web Version
- Any modern web browser (Chrome, Firefox, Safari, Edge)

### Python Version
- Python 3.x

## License

This project is open source and available for personal and educational use.

## Acknowledgements

This game was created as a programming exercise to demonstrate basic programming concepts in both web development and Python programming.