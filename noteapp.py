
def notecreate(note):
    file = open("new.txt", "a")
    file.write("*" * 100 + "\n")
    file.write(note + "\n") 
    file.close()


def search_note(search):
    file = open("new.txt")
    content = file.read()
    file.close()
    
    contents = content.replace("*", "").split("\n")

    for x in range(len(contents)):
        if contents[x].find(search) >= 0 :
            print(contents[x] + "\n")       
   

print("What do you want to do?")
print("Press 1 for adding a note.")
print("Press 2 for searching your notes:")

message = input()

if message == "1":
    content = input("Enter your note:\n")
    notecreate(content)


elif message == "2":
    search = input("Enter the text to search: ")
    search_note(search)

else:
    print("Not correct input !") 
