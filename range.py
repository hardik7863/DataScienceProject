import pandas as pd

# Load dataset
df = pd.read_csv("/home/hardik/Desktop/18-DataScienceProject/DataScienceProject/artifacts/data_ingestion/winequality-red.csv")  # Update with the correct filename

# Get min and max for each column
ranges = df.describe().loc[["min", "max"]]

# Save to a text file
with open("ranges.txt", "w") as f:
    f.write(ranges.to_string())

print("Min-max values saved to ranges.txt")
