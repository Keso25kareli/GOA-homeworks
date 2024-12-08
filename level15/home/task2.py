year=int(input("years"))
if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
    print('ნაკიანი წელი')
else:
    print('არ არის ნაკიანი წელი')