def search(text, word):
    if word in text:
        return "Word found"
    else:
        return "Word not found"
text = input("Enter the text: ")
word = input("Enter the word to search: ")
print(search(text, word))
