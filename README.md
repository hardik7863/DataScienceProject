# 🍷 Wine Quality Prediction  
*An End-to-End Data Science & ML Pipeline Project*

This project demonstrates a complete ML pipeline to predict wine quality using the [Wine Quality Dataset](https://github.com/krishnaik06/datasets/raw/refs/heads/main/winequality-data.zip). It covers all stages—from data ingestion to model deployment—along with a Flask web app for real-time predictions.

---

## 📁 Project Structure

```bash
DataScienceProject/
├── app.py                  # Flask app for prediction
├── main.py                 # Runs the full ML pipeline
├── config/
│   └── config.yaml         # All pipeline configuration
├── params.yaml             # Model hyperparameters
├── schema.yaml             # Data schema for validation
├── requirements.txt        # Python dependencies
├── Dockerfile              # For containerization
├── README.md               # Project documentation
├── src/
│   └── datascience/
│       ├── components/     # Pipeline components (ingestion, validation, etc.)
│       ├── config/         # Configuration manager
│       ├── constants/      # Path and config constants
│       ├── entity/         # Data classes for configs
│       ├── pipeline/       # Pipeline stage scripts
│       └── utils/          # Utility functions
├── templates/              # HTML templates for Flask app
├── static/                 # CSS/JS for frontend
├── artifacts/              # Generated artifacts (data, models, logs)
├── research/               # Jupyter notebooks for EDA and prototyping
└── logs/                   # Log files
```

---

## 🧱 Setup Instructions

### 🔹 1. Clone the repository

```bash
git clone https://github.com/hardik7863/DataScienceProject.git
cd wine-quality-prediction
```

### 🔹 2. Create and activate a virtual environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 🔹 3. Install dependencies

```bash
pip install -r requirements.txt
```

---

## ⚙️ Configuration Files

| File | Description |
|------|-------------|
| `config/config.yaml` | Paths and pipeline settings |
| `params.yaml` | Model hyperparameters (ElasticNet) |
| `schema.yaml` | Schema for input data validation |

> 💡 You can update these files as per your experiments or environment.

---

## 🏗️ Running the ML Pipeline

To run the entire pipeline:

```bash
python main.py
```

- This executes:  
  ➡ Data Ingestion → Validation → Transformation → Model Training → Evaluation  
- Artifacts like trained model, metrics, and datasets will be saved in the `artifacts/` directory.

---

## 🌐 Running the Flask Web App

```bash
python app.py
```

- Access at: [http://localhost:8000](http://localhost:8000)  
- Input wine feature values and get predicted wine quality!

---

## 📝 Project Workflow

1. **Data Ingestion** – Downloads and prepares the dataset  
2. **Data Validation** – Ensures data schema compliance  
3. **Data Transformation** – Splits and preps data  
4. **Model Training** – Trains ElasticNet regression model  
5. **Model Evaluation** – Evaluates and logs results with MLflow  
6. **Prediction API** – Flask web app for predictions

---

## 📊 Experiment Tracking

Model performance and parameters are logged using **MLflow** (also integrated with DagsHub).

- Code: [`src/datascience/components/model_evaluation.py`](src/datascience/components/model_evaluation.py)

---

## 🧪 Jupyter Notebooks for Prototyping

Located in the `research/` directory:

- `1_data_ingestion.ipynb`  
- `2_data_validation.ipynb`  
- `3_data_transformation.ipynb`  
- `4_model_trainer.ipynb`  
- `5_model_evaluation.ipynb`  

---

## 🐳 Docker Support

To build and run using Docker:

```bash
docker build -t wine-quality-app .
docker run -p 8000:8000 wine-quality-app
```

---

## 🛠️ Customization Tips

- Modify ML pipeline logic in: `src/datascience/components/`  
- Customize frontend in: `templates/` and `static/`

---

## 📚 References

- [Wine Quality Dataset](https://archive.ics.uci.edu/ml/datasets/Wine+Quality)  
- [MLflow Tracking](https://mlflow.org/)  
- [Scikit-learn: ElasticNet](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ElasticNet.html)

---


## 👤 Author

**Hardik Batwal**  
📧 [hardikbatwal@example.com](mailto:hardikbatwal@gmail.com)  
🔗 [LinkedIn](www.linkedin.com/in/hardik-batwal-888427239) | [GitHub](https://github.com/hardik7863)

---

## 📄 License

This project is for educational and research purposes.
