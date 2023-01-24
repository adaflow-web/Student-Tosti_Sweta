
from flask import Flask, render_template, url_for

app = Flask("webnote")



@app.route("/")
def home_page():
    return render_template("index.html")


