
#class Weapon:
# #     type = ""
# #     strength = 0
#class definition
class Ennemy :
    name = ""
    healthpoints = 0
    weapon = "0"

    def call_for_help(self):
        print(self.name + " Calling for help.")

    def attack(self, strength):
        print(self.name + " is attacking for " + str(strength) + " points.")    

miny = Ennemy()
miny.name = "Miny"
miny.healthpoints = 150
miny.weapon = "Toothbrush"

niny = Ennemy()
niny.name = "Niny"
niny.healthpoints = 250
niny.weapon = "hands"

miny.call_for_help()
niny.attack(23)

# print(miny.name + " healthpoints is " + str(miny.healthpoints) + ".")
# print(niny.name + " healthpoints is " + str(niny.healthpoints)+ ".")


# class Cat:
#     name = ""
#     spices = ""

#     def sleep(self):
#         print(self.name +" is sleeping")

#     def show(self):
#         print(self.spices + " is the spice of the " + self.name)

#     def eat(self, food):
#         print(self.name + " is love to eat " + food)

# mini = Cat()
# mini.name = "Mini"
# mini.spices = "Tabby"

# mini.eat("a mouse")







