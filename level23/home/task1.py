def simple_calculator(num1,num2,operation):
    if operation =="addition":
        return num1+num2
    elif operation =="subraction":
        return num1-num2
    elif operation =="multiplication":
        return num1 * num2
    elif operation == "division":
        if num2 !=0:
            return num1/num2
        else:
            return "division by zero is not allowed"
    else:
        return"lnvalid operation"
num1 =float(input("enter first number: "))
num2 =float(input("enter second number: "))
operation = input("Enter operation (addition, subtraction, multiplication, division): ")

result = simple_calculator((num1, num2, operation)) 
print("result:", result)


    
 
  
    


