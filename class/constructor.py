
class Cafémachine :    
    def __init__(self, name, weigth, color, type, brand,start):
        self.weight = weigth
        self.color = color
        self.type = type
        self.start = start
        self.name = name
        self.brand = brand

    def starttime(self):
        print(self.name + " starts after " + str(self.start) + " seconds.")
        print("it takes some seconds.")

    def broyer(self):
        print( self.name + " can grind the coffee grains.")

    def stop(self, stop):
        print(self.name + " stops after " + str(stop) + " milliseconds.")
    
machine1 = Cafémachine("Saeco-XP", 2, "Yellow", "Capsule", "Nespresso", 20)
machine2 = Cafémachine("EP3241/54", 3, "Red", "No capsule", "Philips", 10)



print("My first coffee machine's was from " +  machine1.brand + " company & it was " + machine1.color + ".")
print("Now my coffee machine's is from " +  machine2.brand + " company & it is " + machine2.color + ".")