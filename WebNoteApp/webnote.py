
from flask import Flask, render_template, url_for, request, redirect

app = Flask("webnote")

@app.route("/")
def home_page():
    return render_template("index.html")

@app.route("/username", methods=[ "GET", "POST" ])
def username():
    return render_template("username.html", user_name = request.args["user_name"])

if __name__ == "__main__":
    app.run(debug=True)




