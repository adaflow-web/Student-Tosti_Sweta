
logic_loop = True

def chf(euros):
    return float(euros) * .98

def farenheit(celsius):
    return ((float(celsius)) * 9 / 5) + 32

def gallon(liter):
    return (float(liter) * .264) 

while (logic_loop != False) :

    message = input("Do you want to convert a value ? (yes or no) ")

    if message.lower() == "no":
        logic_loop = False 

    elif message.lower() == "yes":
        user_input = input("Which conversion ? (euros/celsius/gallon) ")
        output = 0
            
        if user_input == "euros":
            value = input("Value do you want to convert in chf.. ")
            output += chf(value)
            
        elif user_input == "celsius":
            temp = input("Value do you want to convert in celsius.. ")
            output += farenheit(temp)
            
        elif user_input == "gallon":
            amount = input("Value do you want to convert in litres.. ")
            output += gallon(amount)

        else:
            print("This is not correct converter.")
            break

        print("The result is " + str(output) + ".")

    else:
        print("Please give right input !")
        print("Please enter 'yes' or 'no' !")
        
