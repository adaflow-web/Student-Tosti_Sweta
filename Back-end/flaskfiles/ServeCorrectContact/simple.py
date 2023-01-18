def contacts_list():
    list_contact = open("contactdb.txt")
    contacts = list_contact.read()
    list_contact.close()
    names = contacts.split("\n")
    print(names)
    return names

name = contacts_list()

for fullname in name:
    for x in fullname.split(" "):
        print(x)