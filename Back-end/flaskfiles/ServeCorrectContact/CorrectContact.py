import flask

app = flask.Flask("CorrectContact")

def get_html(file_name):
    html_file = open(file_name + ".html")
    content = html_file.read()
    html_file.close()
    return content

def contacts_list():
    list_contact = open("contactdb.txt")
    contacts = list_contact.read()
    list_contact.close()
    names = contacts.split("\n")
    return names
    
    
@app.route("/")
def home_page():
    return get_html("index")

@app.route("/contacts")
def all_contacts():
    html_page = get_html("contacts")
    people_name = contacts_list()

    name_para = ""
    for name in people_name :
        name_para += "<p>" + name.title() + "</p>"

    return html_page.replace("$$contactlist$$", name_para)

@app.route("/search")
def search():
    html_page = get_html("contacts")
    clientname = flask.request.args.get("clientname")
    clients_list = contacts_list()
    
    output = ""
    for client in clients_list:
        if client.lower().find(clientname.lower()) != -1:
            output += "<p>" + client.title() + "</p>"

    if output == "":
        output = "<p>No result found !</p>"
    return html_page.replace("$$contactlist$$", output)






 
