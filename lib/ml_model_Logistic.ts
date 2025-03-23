import { dot, transpose, zeros, add, multiply, subtract } from 'mathjs';
import { DateTime } from 'luxon';

interface User {
    userId: string;
    lastVisit: string;
    timeSpent: number;
    pagesViewed: number;
    interactionScore: number;
}

interface LogisticRegressionModelOptions {
    learningRate?: number;
    iterations?: number;
}

interface RiskSegment {
    highRisk: User[];
    mediumRisk: User[];
    lowRisk: User[];
}

class LogisticRegressionModel {
    private weights: number[] | null = null;
    private learningRate: number;
    private iterations: number;

    constructor(options: LogisticRegressionModelOptions = {}) {
        this.learningRate = options.learningRate || 0.01;
        this.iterations = options.iterations || 1000;
    }

    private sigmoid(z: number): number {
        return 1 / (1 + Math.exp(-z));
    }

    private predict(features: number[]): number {
        const z = dot(features, this.weights as number[]);
        return this.sigmoid(z);
    }

    public train(dataset: User[], target: number[]): void {
        const X: number[][] = [];
        const y = target;

        for (const user of dataset) {
            const lastVisitDate = DateTime.fromISO(user.lastVisit);
            const currentDate = DateTime.now();
            const daysSinceLastVisit = currentDate.diff(lastVisitDate, 'days').as('days');

            // Features: [1 (intercept), daysSinceLastVisit, timeSpent, pagesViewed, interactionScore]
            X.push([
                1,  // Intercept
                daysSinceLastVisit,
                user.timeSpent,
                user.pagesViewed,
                user.interactionScore
            ]);
        }

        const XArray = X;

        // Initialize weights
        this.weights = zeros(X[0].length) as number[];

        // Gradient descent
        for (let i = 0; i < this.iterations; i++) {
            const predictions = XArray.map(row => this.sigmoid(dot(row, this.weights as number[])));
            const errors = predictions.map((pred, i) => pred - y[i]);
            const gradient = transpose(XArray).map(row => dot(row, errors) / y.length);
            this.weights = this.weights!.map((w, index) => w - this.learningRate * gradient[index]);
        }
    }

    public predictChurnProbability(user: User): number {
        const lastVisitDate = DateTime.fromISO(user.lastVisit);
        const currentDate = DateTime.now();
        const daysSinceLastVisit = currentDate.diff(lastVisitDate, 'days').days;

        const features = [
            1,  // Intercept
            daysSinceLastVisit,
            user.timeSpent,
            user.pagesViewed,
            user.interactionScore
        ];

        return this.predict(features);
    }

    public segmentUsersByRisk(users: User[]): RiskSegment {
        const highRisk: User[] = [];
        const mediumRisk: User[] = [];
        const lowRisk: User[] = [];

        for (const user of users) {
            const churnProbability = this.predictChurnProbability(user);

            if (churnProbability > 0.7) {
                highRisk.push(user);
            } else if (churnProbability > 0.4) {
                mediumRisk.push(user);
            } else {
                lowRisk.push(user);
            }
        }

        return { highRisk, mediumRisk, lowRisk };
    }
}

// Example usage
const dataset: User[] = [
    { userId: "1", lastVisit: "2023-10-01", timeSpent: 120, pagesViewed: 10, interactionScore: 0.8 },
    { userId: "2", lastVisit: "2023-09-15", timeSpent: 30, pagesViewed: 5, interactionScore: 0.3 },
    { userId: "3", lastVisit: "2023-10-10", timeSpent: 200, pagesViewed: 20, interactionScore: 1.2 },
];

// Target labels (1 = churned, 0 = not churned)
const target: number[] = [1, 0, 0];

// Train the model
const model = new LogisticRegressionModel({ learningRate: 0.01, iterations: 1000 });
model.train(dataset, target);

// Predict churn probabilities
for (const user of dataset) {
    console.log(`User ${user.userId} churn probability: ${model.predictChurnProbability(user)}`);
}