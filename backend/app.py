from flask import Flask, jsonify, request
from db import init_db, db  
from models import OldSystem, NewSystem

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///migration.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

init_db(app)

@app.route('/api/migrate', methods=['POST'])
def migrate_data():
    old_data = OldSystem.query.all()
    for entry in old_data:
        new_entry = NewSystem(
            # Map fields from OldSystem to NewSystem
            field1=entry.field1,
            field2=entry.field2
        )
        db.session.add(new_entry)
    db.session.commit()
    return jsonify({"message": "Data migration complete!"})

if __name__ == '__main__':
    app.run(debug=True)
