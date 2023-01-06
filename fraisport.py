
country = ["CH", "FR", "DE", "AT"]

def ask_count():
    return input("Please enter your country code: ")

def ask_amount():
    return int(input("Please enter your order ammount: "))

countryname = ask_count()
orderamount = ask_amount()
amount_pay = 0


if countryname == country[0] :
    if orderamount <= 100:
        amount_pay += 1.05 * orderamount
    elif (orderamount > 100) and (orderamount <= 1000):
        amount_pay += 1.02 * orderamount
    else:
        amount_pay += 1.0 * orderamount
        

elif (countryname == country[1] or countryname == country[2]) :
    
    if orderamount <= 100:
        amount_pay += 1.1 * orderamount

    elif (1000 >= orderamount > 100):
        amount_pay += 1.05 * orderamount    
    else:
        amount_pay += 1.01 * orderamount


elif countryname == country[3] :
    if orderamount <= 100:
        amount_pay += 1.08 * orderamount
    elif (orderamount > 100) and (orderamount <= 1000):
        amount_pay += 1.06 * orderamount
    else:
        amount_pay += 1.04 * orderamount

else :
    if orderamount <= 100:
        amount_pay += 1.1 * orderamount
    elif (orderamount > 100) and (orderamount <= 1000):
        amount_pay += 1.08 * orderamount
    else:
        amount_pay += 1.06 * orderamount

print("For delevery of " + str(orderamount) + " chf in country " + countryname + ", it will cost " + str(amount_pay) + "chf. ")
         