#5. სია (List) და მისი ოპერაციები

# სიის შექმნა და ელემენტებზე წვდომა
fruits = ["ვაშლი", "ბანანი", "ფორთოხალი"]
print(fruits[0])  
print(fruits[1])  

# სიაში ახალი ელემენტის დამატება
fruits.append("მანგო")
print(fruits)  

# სიის ციკლით გამოტანა
for fruit in fruits:
    print(fruit)