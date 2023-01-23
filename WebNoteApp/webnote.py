
import flask

app = flask.Flask("webnote")


# def unload_fun():
#     localst

@app.route("/")
def home_page():
    user_name = input("Please give your name... ")
    return user_name


