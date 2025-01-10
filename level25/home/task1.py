def guess_number(low, high, attempts):
    for attempt in range(attempts):
        guess = (low + high) // 2 
        print(f"\nAttempt {attempt + 1}: I guess the number is {guess}.")
        
        feedback = input("Please enter 'high', 'low', or 'correct': ").lower()

        if feedback == "high":
            high = guess - 1
        elif feedback == "low":
            low = guess + 1
        elif feedback == "correct":
            print(f"\nGreat! I guessed your number {guess}.")
            return True
        else:
            print("Please enter only 'high', 'low', or 'correct'.")
    return False
def start_game():
    print("Please think of a number between 1 and 100.")
    low = 1
    high = 100
    attempts = 3

    if not guess_number(low, high, attempts):
        print("\nUnfortunately, I couldn't guess your number. Better luck next time!")
start_game()
