from flask import Flask, request, Response, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import time
import pickle
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.models import load_model
from io import StringIO

import matplotlib.pyplot as plt
import seaborn as sns
from io import BytesIO
import base64
from flask import send_file

app = Flask(__name__)
CORS(app)

encoderGene = None
encoderCell = None
sub = None
preview_data = None

def generate_top_20(pred_results):
    global sub

    x_axis = list(sub.columns.values)
    sig_id_values = x_axis[1:]
    count_of_target = sub.iloc[:, 1:].sum().values
    dct = dict(zip(sig_id_values, count_of_target))
    sorted_dict = dict(sorted(dct.items(), key=lambda i: i[1], reverse=True))

    plt.figure(figsize=(15, 10))
    sns.barplot(x=list(sorted_dict.values())[:20], y=list(sorted_dict.keys())[:20], palette="viridis")

    plt.title('COUNT OF TARGET VS TARGET FEATURES', fontsize=20)
    plt.xlabel('COUNT OF TARGET', fontsize=15)
    plt.ylabel('TARGET FEATURES', fontsize=15)

    img = BytesIO()
    plt.savefig(img, format='svg')
    img.seek(0)
    plt.close()
    
    return base64.b64encode(img.getvalue()).decode('utf-8')

def generate_lowest_20(pred_results):
    global sub

    x_axis = list(sub.columns.values)
    sig_id_values = x_axis[1:]
    count_of_target = sub.iloc[:, 1:].sum().values
    dct = dict(zip(sig_id_values, count_of_target))
    sorted_dict = dict(sorted(dct.items(), key=lambda i: i[1], reverse=True))

    plt.figure(figsize=(15, 10))
    sns.barplot(x=list(sorted_dict.values())[-20:], y=list(sorted_dict.keys())[-20:], palette="coolwarm")
    
    plt.title('COUNT OF TARGET VS TARGET FEATURES', fontsize=20)
    plt.xlabel('COUNT OF TARGET', fontsize=15)
    plt.ylabel('TARGET FEATURES', fontsize=15)
    
    img = BytesIO()
    plt.savefig(img, format='svg')
    img.seek(0)
    plt.close()

    return base64.b64encode(img.getvalue()).decode('utf-8')

def load_models():
    global encoderGene, encoderCell, sub
    if encoderGene is None:
        encoderGene = load_model('./models/encoder+xgboost_gene_features.h5')
    if encoderCell is None:
        encoderCell = load_model('./models/encoder+xgboost_cell_features.h5')
    if sub is None:
        sub = pd.read_csv('./models/sample_submission.csv')

def preprocessData(inputData):
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

    model = pickle.load(open('./models/xgboost+autoencoder.pkl', 'rb'))
    prediction = model.predict_proba(new_data)
    prediction = np.array(prediction)[:, :, 1].T

    print('FORMAT OF THE PREDICTED OUTPUT : ', type(prediction)) 
    print('DONE PREDICTION')
    end_time = time.time()
    print('TIME TAKEN TO PREDICT IS : {}'.format(end_time - start_time))

    sub.iloc[:, 1:]  = prediction

    # generate_top_20(sub);
    # generate_lowest_20(sub);

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

@app.route('/top_20_svg', methods=['GET'])
def get_top_20_svg():
    global sub
    svg_data = generate_top_20(sub)
    return jsonify({"svg": svg_data})

@app.route('/lowest_20_svg', methods=['GET'])
def get_lowest_20_svg():
    global sub
    svg_data = generate_lowest_20(sub)
    return jsonify({"svg": svg_data})

if __name__ == '__main__': 
    app.run(debug=True)
