def simple_calculator(x,y,operation):
    if operation =="addition":
        return x+y
    elif operation =="subraction":
        return x-y
    elif operation =="multiplication":
        return x * y
    elif operation == "division":
        if y !=0:
            return x/y
        else:
            return "division by zero is not allowed"
    else:
        return"lnvalid operation"
x =float(input("enter first number: "))
y =float(input("enter second number: "))
operation = input("Enter operation (addition, subtraction, multiplication, division): ")

result = simple_calculator(x, y, operation)
print("result:", result)