from flask import Flask, request, make_response, jsonify
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

def preprocessData(inputData):
    #ENCODING THE CATEGORICAL inputData
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

    encoder = load_model('C:/Users/DELL/Downloads/Telegram Desktop/encoder+xgboost_gene_features.h5')
    test_gene_features = encoder.predict(inputData[gene_features])

    encoder = load_model('C:/Users/DELL/Downloads/Telegram Desktop/encoder+xgboost_cell_features.h5')
    test_cell_features = encoder.predict(inputData[cell_features])

    x_1_test = np.hstack((inputData['cp_type'].values.reshape(-1,1), inputData['cp_time'].values.reshape(-1, 1), inputData['cp_dose'].values.reshape(-1, 1),
                        test_gene_features, test_cell_features))

    return x_1_test


@app.route('/upload', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']

    if not file:
        print("No file 🚩🚩🚩🚩")
        return "No file"

    data  = pd.read_csv(file, delimiter = ',')

    start_time = time.time()

    new_data = preprocessData(data)
    
    model = pickle.load(open('C:/Users/DELL/Downloads/Telegram Desktop/xgboost+autoencoder.pkl', 'rb'))
    prediction = model.predict_proba(new_data)
    prediction = np.array(prediction)[:, :, 1].T

    print('FORMAT OF THE PREDICTED OUTPUT : ', type(prediction)) #<class 'scipy.sparse.lil.lil_matrix'>
    print('DONE PREDICTION')
    end_time = time.time()
    print('TIME TAKEN TO PREDICT IS : {}'.format(end_time - start_time))

    sub = pd.read_csv('C:/Users/DELL/Downloads/Telegram Desktop/sample_submission.csv')
    sub.iloc[:, 1:]  = prediction

    # Download results
    # response = make_response(sub.to_csv())
    # response.headers["Content-Disposition"] = "attachment; filename=prediction.csv"
    # return response

    # Show results on page
    prediction_data = sub.to_dict(orient='records')
    return jsonify(prediction_data)

if __name__ == '__main__': 
    app.run(debug=True)
# import csv
# from flask import Flask, request, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route('/upload', methods=['POST'])
# def upload_file():
#     if request.method == 'POST':
#         # Handle POST request
        
#         data = request.json.get('data')
#         first_row = data[0] # Access the first row of the data
#         print("First row of data:", first_row)
#         return jsonify({'message': 'Data received successfully', 'first_row': first_row}), 200
#     else:
#         return jsonify({'error': 'Method Not Allowed'}), 405

# if __name__ == '__main__': 
#     app.run(debug=True)