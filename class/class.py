
class Koffeemachine :
    weight= 0
    color = ""
    brand = ""
    start = 0
    name = ""

    def starttime(self):
        print(self.name + " starts after " + str(self.start) + " seconds.")
        print("it takes some seconds.")

    def broyer(self):
        print( self.name + " can grind the coffee grains.")

    def stop(self, stop):
        print(self.name + " stops after " + str(stop) + " milliseconds.")
    
machine1 = Koffeemachine()
machine2 = Koffeemachine()

machine1.color = "Yellow"
machine1.brand ="Nestlé"
machine1.weight = 2
machine1.start = 20
machine1.name = "Saeco-XP"

machine1.stop(20)
machine1.starttime()

machine2.color = "Red"
machine2.brand = "Godrege"
machine2.weight = 2.3
machine2.start = 10
machine2.name = "Jura x-10"
machine2.starttime()
machine2.stop(40)



# print("My first coffee machine's was from " +  machine1.brand + " company & it was " + machine1.color + ".")
# print("Now my coffee machine's is from " +  machine2.brand + " company & it is " + machine2.color + ".")