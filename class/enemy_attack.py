import random

class Player:
    def __init__(self, name, strength, healthpoints):
        self.name = name
        self.strength = strength
        self.healthpoints = healthpoints

    def call_for_help(self):
        print(self.name + " Calling for help.")

    def attack(self):
        game_lost = False 
        number_of_attack = 0
        
        while game_lost == False:
            number = random.randint(1, 100)
            differ = self.healthpoints - number
            # lost means healthpoints are 0...
            if differ <= 0 : 
                print("You lost !")
                game_lost = True

            elif differ > 0 :
                self.healthpoints = differ
                print("Rest strength of player is: " + str(self.healthpoints))
                number_of_attack += 1

        print(self.name + " lost game in " + str(number_of_attack) + " attempts of attack.")
                     
reena = Player("Renna", "low", 150)

reena.attack()