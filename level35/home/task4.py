#4. ფუნქციები (def)

# ორი რიცხვის შეკრების ფუნქცია
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 7)
print(result) 

# ფუნქცია, რომელიც ამოწმებს, რიცხვი ლუწია თუ კენტი
def check_even_odd(number):
    if number % 2 == 0:
        return "ლუწია"
    else:
        return "კენტია"

print(check_even_odd(10))  
print(check_even_odd(7))   

# ფუნქცია, რომელიც აბრუნებს მისალმებას
def greet(name):
    return f"გამარჯობა, {name}!"

print(greet("კესო")) 
