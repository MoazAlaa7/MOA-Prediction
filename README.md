# 🧬 MOA-Prediction

**Website featuring drug mechanism-of-action prediction tool, results/dataset analysis, and topic research.**

## 🎬 Preview

Checkout our [MOA-Prediction Website](https://mechanism-of-action-frontend.vercel.app/) live on Vercel
> [!NOTE]
> This is a frontend deployment of only the website's static pages, but to use the prediction tool and perform analysis, you need to install and run the project locally.

You can also checkout some [Screenshots of the prediction tool](https://imgur.com/a/moa-prediction-vAuuHOH) on Imgur

## ⚙️ Installation
1. Clone the repository:

   ```
   git clone https://github.com/MoazAlaa7/MOA-Prediction.git
   ```

2. Download our ML models from:

   ```
   https://www.kaggle.com/code/abdelmoneimrehab/autoencoder-neural-network/output?scriptVersionId=178811408
   ```
> [!IMPORTANT]  
> Adjust the paths of the models in your flask server code

4. Navigate to project directory
   
5. Install dependencies:

   ```
   # Nextjs dependencies
   npm install

   # Flask server dependencies
   pip install <library_name>
   ```

6. Run the servers
   ```
   # Run the Nextjs develpoment server
   npm run dev
  
   # Run the flask server
   python server.py
   ```

Open [http://localhost:3000](http://localhost:3000) on your browser to view the app.

## 💡 App Workflow

![Sequence Diagram8](https://github.com/user-attachments/assets/c7963151-8d28-49ff-8b65-5813eba95a6c)

