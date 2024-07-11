from db import db

class OldSystem(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    field1 = db.Column(db.String(100))
    field2 = db.Column(db.String(100))

class NewSystem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filed1 = db.Column(db.String(100))
    field2 = db.Column(db.String(100))

