score= int(input('enter your score: '))

if score > 90:
    print(' A score')
elif score > 80 and score < 89:
    print(' B score')
elif score > 70 and score < 79:
    print(' C score')
elif score > 60 and score < 69:
    print(' D score')
elif score < 60:
    print('F score')