
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
    return render_template("addnote.html")

@app.route("/viewnotes")
def viewnotes():
    return render_template("viewnotes.html")

@app.route("/search")
def search():
    return render_template("search.html")
    
@app.route("/modifynote")
def modifynote():
    return render_template("modifynote.html")    

if __name__ == "__main__":
    app.run(debug=True)




