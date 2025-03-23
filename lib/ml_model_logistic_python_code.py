import numpy as np
import pandas as pd
from datetime import datetime
from typing import List, Dict

class LogisticRegressionModel:
    def __init__(self, learning_rate: float = 0.01, iterations: int = 1000):
        self.weights = None
        self.learning_rate = learning_rate
        self.iterations = iterations

    def sigmoid(self, z: float) -> float:
        return 1 / (1 + np.exp(-z))

    def predict(self, features: np.ndarray) -> float:
        z = np.dot(features, self.weights)
        return self.sigmoid(z)

    def train(self, dataset: List[Dict[str, any]], target: List[int]):
        # Prepare the feature matrix and target vector
        X = []
        y = np.array(target)

        for user in dataset:
            last_visit_date = datetime.strptime(user["lastVisit"], "%Y-%m-%d")
            current_date = datetime.now()
            days_since_last_visit = (current_date - last_visit_date).days

            # Features: [1 (intercept), daysSinceLastVisit, timeSpent, pagesViewed, interactionScore]
            X.append([
                1,  # Intercept
                days_since_last_visit,
                user["timeSpent"],
                user["pagesViewed"],
                user["interactionScore"]
            ])

        X = np.array(X)

        # Initialize weights
        self.weights = np.zeros(X.shape[1])

        # Gradient descent
        for _ in range(self.iterations):
            predictions = self.sigmoid(np.dot(X, self.weights))
            errors = predictions - y
            gradient = np.dot(X.T, errors) / len(y)
            self.weights -= self.learning_rate * gradient

    def predict_churn_probability(self, user: Dict[str, any]) -> float:
        last_visit_date = datetime.strptime(user["lastVisit"], "%Y-%m-%d")
        current_date = datetime.now()
        days_since_last_visit = (current_date - last_visit_date).days

        features = np.array([
            1,  # Intercept
            days_since_last_visit,
            user["timeSpent"],
            user["pagesViewed"],
            user["interactionScore"]
        ])

        return self.predict(features)

    def segment_users_by_risk(self, users: List[Dict[str, any]]) -> Dict[str, List[Dict[str, any]]]:
        high_risk = []
        medium_risk = []
        low_risk = []

        for user in users:
            churn_probability = self.predict_churn_probability(user)

            if churn_probability > 0.7:
                high_risk.append(user)
            elif churn_probability > 0.4:
                medium_risk.append(user)
            else:
                low_risk.append(user)

        return {"highRisk": high_risk, "mediumRisk": medium_risk, "lowRisk": low_risk}


# Example usage
if __name__ == "__main__":
    # Load dataset from CSV
    df = pd.read_csv("MOCK_DATA.csv")

    # Convert the DataFrame into a list of dictionaries
    dataset = df[["userId", "lastVisit", "timeSpent", "pagesViewed", "interactionScore"]].to_dict(orient="records")

    # Extract the target labels
    target = df["churned"].tolist()

    # Initialize the model
    model = LogisticRegressionModel(learning_rate=0.01, iterations=1000)

    # Train the model
    model.train(dataset, target)

    # Predict churn probabilities
    for user in dataset:
        churn_probability = model.predict_churn_probability(user)
        print(f"User {user['userId']} churn probability: {churn_probability:.2f}")