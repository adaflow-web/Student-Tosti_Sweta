
from flask import Flask, render_template, url_for, request, redirect

app = Flask("webnote")

@app.route("/")
def home_page():
    return render_template("index.html")

@app.route("/username", methods=[ "GET", "POST" ])
def username():
    return render_template("username.html", user = request.args["user_name"])

@app.route("/addnote")
def add_note():
    return render_template("addnote.html",user = 1)

@app.route("/viewnotes")
def add_note():
    return render_template("addnote.html",user = 1)

@app.route("/search")
def add_note():
    return render_template("addnote.html",user = 1)    

if __name__ == "__main__":
    app.run(debug=True)




