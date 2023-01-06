# class definition
class Digitalcar:
    def __init__(self, model, brand, color, year):
        self.model = model
        self.brand = brand
        self.color = color
        self.year = year

    def drive(self, speed):
        print(self.model + "," + self.brand + " is driving at " + str(speed) + " km/h.")

    def suspension_brake(self, available_brake):
        print("In " + self.brand + "'s " + self.model + "car " + str(available_brake) + " breaks are availabe.")

    def pollution(self):
        print(self.brand + " makes pollution free car.")

#object
my_first_car = Digitalcar("RAV4 PHEV", "Toyota", "orange", 2001)
my_second_car = Digitalcar("Q3", "Audi", "white", 2021)

my_first_car.drive(88)
my_first_car.suspension_brake(1)

