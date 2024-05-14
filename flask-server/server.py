from flask import Flask, request, Response, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import time
import pickle
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.models import load_model
from io import StringIO

app = Flask(__name__)
CORS(app)   

encoderGene = None
encoderCell = None
sub = None
preview_data = None

def load_models():
    global encoderGene, encoderCell, sub
    if encoderGene is None:
        encoderGene = load_model('F:/final-proj/flask-server/encoder+xgboost_gene_features.h5')
    if encoderCell is None:
        encoderCell = load_model('F:/final-proj/flask-server/encoder+xgboost_cell_features.h5')
    if sub is None:
        sub = pd.read_csv('F:/final-proj/flask-server/sample_submission.csv')

def preprocessData(inputData):
    load_models()

    load_models()

    le = LabelEncoder()
    inputData['cp_type'] = le.fit_transform(inputData['cp_type'])
    inputData['cp_time'] = le.fit_transform(inputData['cp_time'])
    inputData['cp_dose'] = le.fit_transform(inputData['cp_dose'])

    gene_features = []
    cell_features = []
    for i in inputData.columns:
        if i.startswith('g-'):
            gene_features.append(i)
        if i.startswith('c-'):
            cell_features.append(i)

    test_gene_features = encoderGene.predict(inputData[gene_features])
    test_cell_features = encoderCell.predict(inputData[cell_features])
    test_gene_features = encoderGene.predict(inputData[gene_features])
    test_cell_features = encoderCell.predict(inputData[cell_features])

    x_1_test = np.hstack((inputData['cp_type'].values.reshape(-1,1), inputData['cp_time'].values.reshape(-1, 1), inputData['cp_dose'].values.reshape(-1, 1),
                        test_gene_features, test_cell_features))

    return x_1_test

@app.route('/upload', methods=['POST'])
def upload_file():
    global preview_data
    if request.method == 'POST':
        file = request.files['file']

    if not file:
        print("No file 🚩🚩🚩🚩")
        return "No file"

    data  = pd.read_csv(file, delimiter = ',')

    start_time = time.time()

    new_data = preprocessData(data)

    model = pickle.load(open('F:/final-proj/flask-server/xgboost+autoencoder.pkl', 'rb'))
    prediction = model.predict_proba(new_data)
    prediction = np.array(prediction)[:, :, 1].T

    print('FORMAT OF THE PREDICTED OUTPUT : ', type(prediction)) 
    print('FORMAT OF THE PREDICTED OUTPUT : ', type(prediction)) 
    print('DONE PREDICTION')
    end_time = time.time()
    print('TIME TAKEN TO PREDICT IS : {}'.format(end_time - start_time))

    sub.iloc[:, 1:]  = prediction

    # Storing preview data temporarily
    preview_data = sub.to_dict(orient='records')

    return jsonify({"file_ready": True})

@app.route('/download', methods=['GET'])
def download_file():
    csv_output = StringIO()
    sub.to_csv(csv_output, index=False)
    csv_output.seek(0)

    return Response(
        csv_output.getvalue(),  
        mimetype="text/csv",
        headers={"Content-disposition": "attachment; filename=prediction.csv"}
    )

@app.route('/preview', methods=['GET'])
def get_preview_data():
    global preview_data
    if preview_data is None:
        return jsonify({"message": "No preview data available"})
    else:
        return jsonify(preview_data)

if __name__ == '__main__': 
    app.run(debug=True)
