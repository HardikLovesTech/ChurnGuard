# ChurnGuard - Churn Risk-Based Customer Engagement System  

## 🚀 Overview  
ChurnGuard is an automated notification-based system that **detects inactive users** and sends **personalized engagement messages** (Email, SMS, or Push). It helps businesses **retain users** by analyzing engagement metrics and recommending **personalized retention strategies**.  

### 🔹 Example Inspiration:  
- **Zomato** – Push notifications for inactive users.  
- **Spotify** – Personalized emails to re-engage users.  
- **Amazon** – Cart reminders to boost conversions.  

## 📌 Features  
✅ **Tracks user activity** – Clicks, time spent, last visit, pages viewed, and interaction score.  
✅ **Identifies at-risk users** – Users with **Interaction Score < 0.5** and inactive for **3+ days**.  
✅ **Sends personalized notifications** – Automated retention messages via **Email, SMS, or Push**.  
✅ **Machine Learning Integration** – Predicts **interaction scores** based on past user behavior.  
✅ **Admin Dashboard** – Visual representation of user engagement using **charts and tables**.  

## 📂 Project Structure  
```bash
hardiklovestech-churnguard/
├── app/
│   ├── api/  # API routes for user engagement & notifications
│   │   ├── send-notification/route.ts  # Handles notification sending
│   │   ├── users/route.ts  # Fetches all users
│   │   ├── users/at-risk/route.ts  # Fetches at-risk users
│   ├── notifications/page.tsx  # Displays notification history
│   ├── settings/page.tsx  # User engagement settings page
│   ├── users/
│   │   ├── page.tsx  # Displays all users
│   │   ├── at-risk/page.tsx  # Displays at-risk users
│   ├── layout.tsx  # Main layout component
│   ├── page.tsx  # Dashboard homepage
├── components/
│   ├── overview.tsx  # User engagement dashboard
│   ├── churn-risk-chart.tsx  # Churn prediction visualization
│   ├── at-risk-users.tsx  # Displays at-risk users in dashboard
│   ├── notification-settings.tsx  # Notification settings UI
│   ├── user-table.tsx  # User data table
│   ├── theme-provider.tsx  # Manages dark/light mode
├── lib/
│   ├── MOCK_DATA.csv  # Sample user engagement dataset
│   ├── churn-detection.ts  # Churn risk analysis logic
│   ├── ml-churn-prediction.ts  # ML model for interaction score
│   ├── ml_model_Logistic.ts  # Logistic regression ML model
│   ├── ml_model_logistic_python_code.py  # Python ML model
├── styles/globals.css  # Global CSS styles
├── next.config.mjs  # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS setup
├── tsconfig.json  # TypeScript configuration
├── package.json  # Project dependencies
└── README.md  # Project documentation
```

## 🛠️ Installation & Setup  
### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/hardiklovestech/churnguard.git
cd churnguard
```

### **2️⃣ Install Dependencies**  
```bash
pnpm install  # Or use npm install
```

### **3️⃣ Setup Environment Variables**  
Create a `.env` file and add your MongoDB, SMTP, and other credentials:  
```env
MONGODB_URI="your-mongodb-connection-string"
SMTP_SERVER="your-email-server"
TWILIO_SID="your-twilio-sid"
TWILIO_AUTH_TOKEN="your-twilio-auth-token"
```

### **4️⃣ Start the Development Server**  
```bash
pnpm dev  # Or npm run dev
```

## 🚀 API Endpoints  
| **Method** | **Endpoint** | **Description** |
|-----------|-------------|----------------|
| `GET` | `/api/users` | Fetch all users |
| `GET` | `/api/users/at-risk` | Fetch at-risk users |
| `POST` | `/api/send-notification` | Send personalized notifications |

## 📊 Dashboard Features  
- **User Engagement Overview** – Visualize user activity trends.  
- **Churn Prediction Graphs** – Predict and display churn risk.  
- **Notification History** – View sent engagement messages.  
- **At-Risk User Table** – See users who are likely to leave.  

## 🧠 Machine Learning  
The project includes a **Logistic Regression ML model** to predict **user interaction scores** and classify at-risk users. The model is implemented in:  
- `ml_model_logistic_python_code.py` (Python)  
- `ml_model_Logistic.ts` (TypeScript for Next.js)  

## 🔥 Future Improvements  
✅ Add support for **WhatsApp notifications**  
✅ Implement **A/B Testing** for message effectiveness  
✅ Improve **ML model with deep learning**  
✅ Deploy on **Vercel or AWS**  

## 💡 Contributing  
1. Fork the repository 🍴  
2. Create a new branch (`git checkout -b feature-branch`)  
3. Commit changes (`git commit -m "Added feature"`)  
4. Push to the branch (`git push origin feature-branch`)  
5. Open a pull request 🔥  

## 📄 License  
This project is licensed under the **MIT License**.  

---  
🔥 Built with ❤️ by Hardik & Team  
```


