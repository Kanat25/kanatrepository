import random
def some():
    gues = 0
    count = 0
    number = random.randaint(1, 11)
    while gues != number:
        print(number)
        gues = int(input('Введите число!'))
        count += 1

        if gues > number:
            print('Загаданное число меньше')
        elif gues < number:
            print('Загаданное число больше')
        else:
            again = input(f'Угадали! Кол-во попыток = {count} \n Хотите еще?')
            if again.lower() == 'да':
                some()
            else:
                print('ОК, пока')
