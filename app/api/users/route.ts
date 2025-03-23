import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { predictChurnProbability } from "@/lib/ml_model_Logistic"; // Import your ML model

export async function GET() {
  const csvPath = path.join(process.cwd(), "lib", "MOCK_DATA (1).csv");
  const file = fs.readFileSync(csvPath, "utf8");

  // Parse CSV file
  const { data } = Papa.parse(file, { header: true, skipEmptyLines: true });

  // Process data and predict interaction score
  const users = data.map((user) => {
    const interactionScore = predictChurnProbability({
      userId: user.userId,
      lastVisit: user.lastVisit,
      timeSpent: parseFloat(user.timeSpent),
      pagesViewed: parseInt(user.pagesViewed, 10),
      interactionScore: 0, // Placeholder, will be calculated
    });

    return { ...user, interactionScore: interactionScore.toFixed(2) };
  });

  return new Response(JSON.stringify(users), { headers: { "Content-Type": "application/json" } });
}
