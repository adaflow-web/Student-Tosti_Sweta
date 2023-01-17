import flask

app = flask.Flask("guest_list")

def get_html(file_name):
    html_file = open(file_name + ".html")
    content = html_file.read()
    html_file.close()
    return content

def guest_list():
    guestslist = open("guest.txt")
    guests = guestslist.read()
    guestslist.close()
    guest = guests.split("\n")
    return guest


@app.route("/")
def home_page():
    return get_html("index")

@app.route("/guests")
def guest_page():
    htmlpage = get_html("guests")
    guests = guest_list()

    actual_value = ""
    for guest in guests:
        actual_value += "<p>" + guest.capitalize() + "</p>"
    return htmlpage.replace("$$guests$$", actual_value)



