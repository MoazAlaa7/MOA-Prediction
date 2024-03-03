
import csv
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        # Handle POST request
        
        data = request.json.get('data')
        first_row = data[0] # Access the first row of the data
        print("First row of data:", first_row)
        return jsonify({'message': 'Data received successfully', 'first_row': first_row}), 200
    else:
        return jsonify({'error': 'Method Not Allowed'}), 405

if __name__ == '__main__': 
    app.run(debug=True)
