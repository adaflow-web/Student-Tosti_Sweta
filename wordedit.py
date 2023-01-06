
fcontent = open("new.txt", "r")

content = fcontent.read()

fcontent.close()


changed = content.replace(".","").replace(",","").replace("-","").replace("*","").replace("'","").replace("  ","").replace("\n"," ").replace("!","")

changes_made = changed.strip()
count_word = changes_made.split(" ")

print(len(count_word))

newword = content.replace("is", "should be")

upperword = newword.upper()

print(upperword)