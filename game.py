import random

secret_num = random.randint(1, 100)

game_over = True
attempt = 0
message = ""

while game_over :

    attempt += 1
    number = input("Enter a number: ")

    try:
        number(type) == int

    except:
        print("Please Enter a number between 1 to 100.")
        quit()
    

    if number < secret_num:
        print("Secret number is bigger than yours.")

    elif number > secret_num:
        print("Secret number is smaller than yours.")
    
    else:
        game_over = False

if attempt == 1 :
    message = "attempt"

else:
    message = "attempts"    

print("You guess the secret number in " + str(attempt) + " " + message + ".")


    

