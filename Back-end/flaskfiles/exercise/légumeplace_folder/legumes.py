
import flask

# app = flask.Flask("legumes")

# def get_index(page_name):
#     html_file = open(page_name + ".html")
#     content = html_file.read()
#     html_file.close()
#     return content

# @app.route("/")
# def homepage():
#     return get_index("index")
    
# @app.route("/about")
# def about():
#     return get_index("about")

app = flask.Flask("legumes")

def get_html(file_name):
    html_file = open(file_name + ".html")
    content = html_file.read()
    html_file.close()
    return content


def get_vegetables():
    vegetable_db = open("légumesdb.txt")
    content = vegetable_db.read()
    vegetable_db.close()
    vegetables = content.split("\n")
    return vegetables

@app.route("/")
def index():
    html_page = get_html("index")
    vegetables = get_vegetables()
    actual_value = ""
    for vegetable in vegetables:
        actual_value += "<p>" + vegetable + "</p>"

    return html_page.replace("$$vegetables$$", actual_value)

@app.route("/about")
def about_page():
    return get_html("about")
