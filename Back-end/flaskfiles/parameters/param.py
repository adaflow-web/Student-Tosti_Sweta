import flask

app = flask.Flask("param")

def get_html(page_name):
    html_file = open(page_name + ".html")
    content = html_file.read()
    html_file.close()
    return content

@app.route("/")
def index():
    return get_html("index")

@app.route("/search")
def search():
    message = flask.request.args.get("message")
    return message 
    #request object, args properties,get method, message is key of argument