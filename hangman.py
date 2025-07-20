import random

def main():
    # List of words to choose from
    words = ["python", "hangman", "computer", "programming", "keyboard"]
    
    # Randomly select a word
    word = random.choice(words).lower()
    
    # Set up the game
    guessed_letters = []
    incorrect_guesses = 0
    max_incorrect = 6
    word_completion = "_" * len(word)
    
    print("Welcome to Hangman!")
    print(display_hangman(incorrect_guesses))
    print(f"Current word: {' '.join(word_completion)}")
    
    # Main game loop
    while incorrect_guesses < max_incorrect and "_" in word_completion:
        # Get player's guess
        guess = input("\nGuess a letter: ").lower()
        
        # Validate input
        if len(guess) != 1 or not guess.isalpha():
            print("Please enter a single letter.")
            continue
        
        # Check if letter was already guessed
        if guess in guessed_letters:
            print(f"You already guessed the letter {guess}")
            continue
            
        # Add the guess to guessed letters
        guessed_letters.append(guess)
        
        # Check if guess is in the word
        if guess in word:
            print(f"Good job! {guess} is in the word.")
            
            # Update word completion
            word_as_list = list(word_completion)
            for i, letter in enumerate(word):
                if letter == guess:
                    word_as_list[i] = guess
            word_completion = "".join(word_as_list)
        else:
            incorrect_guesses += 1
            print(f"Sorry, {guess} is not in the word.")
        
        # Display current game state
        print(display_hangman(incorrect_guesses))
        print(f"Current word: {' '.join(word_completion)}")
        print(f"Letters guessed: {', '.join(guessed_letters)}")
        print(f"Incorrect guesses: {incorrect_guesses}/{max_incorrect}")
    
    # Game over - check if player won or lost
    if "_" not in word_completion:
        print("\nCongratulations! You guessed the word!")
    else:
        print(f"\nSorry, you ran out of guesses. The word was {word}.")

def display_hangman(incorrect):
    """Returns the hangman ASCII art based on number of incorrect guesses"""
    stages = [
        # Initial empty state
        """
        --------
        |      |
        |      
        |    
        |      
        |     
        |     
        ---------
        """,
        # Head
        """
        --------
        |      |
        |      O
        |    
        |      
        |     
        |     
        ---------
        """,
        # Head and torso
        """
        --------
        |      |
        |      O
        |      |
        |      |
        |     
        |     
        ---------
        """,
        # Head, torso, and one arm
        """
        --------
        |      |
        |      O
        |     \|
        |      |
        |     
        |     
        ---------
        """,
        # Head, torso, and both arms
        """
        --------
        |      |
        |      O
        |     \|/
        |      |
        |     
        |     
        ---------
        """,
        # Head, torso, both arms, and one leg
        """
        --------
        |      |
        |      O
        |     \|/
        |      |
        |     / 
        |     
        ---------
        """,
        # Full body (game over)
        """
        --------
        |      |
        |      O
        |     \|/
        |      |
        |     / \
        |     
        ---------
        """
    ]
    return stages[incorrect]

if __name__ == "__main__":
    main()