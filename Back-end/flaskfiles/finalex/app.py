from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class Addnote(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), primary_key=False)
    desc = db.Column(db.String(500), primary_key=True)
    date_created = db.Column(db.DateTime, default = datetime.utcnow)

    def __repr__(self) -> str:
        return str(self.sno) + self.title
    
@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/addnote", methods=["GET", "POST"])
def addnote():
    if request.method=="POST":
        title = request.form["title"]
        desc = request.form["desc"]

        note = Addnote(title=title, desc=desc )
        db.session.add(note)
        db.session.commit()
    allnotes = Addnote.query.all()
    return render_template("notes.html", allnotes=allnotes)

@app.route("/notes")
def notes():
    
    return render_template("notes.html")

@app.route("/update/<int:sno>", methods=["GET", "POST"])
def update(sno):
    if request.method == "POST":
        title = request.form["title"]
        desc = request.form["desc"]
        date_created = datetime.today()

        note = Addnote.query.filter_by(sno=sno).first()
        note.title = title
        note.desc = desc
        db.session.add(note)
        db.session.commit()
        return redirect("/notes")
    note = Addnote.query.filter_by(sno=sno).first()
    return render_template("update.html", note=note)

@app.route("/delete/<int:sno>")
def delete(sno): 
    note = Addnote.query.filter_by(sno=sno).first()
    db.session.delete(note)
    db.session.commit()
    return redirect("/notes")

if __name__ == "__main__":
    app.run(debug = True)