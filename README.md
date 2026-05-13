🚀 ResumeAI — AI Powered ATS Resume Analyzer & Cover Letter Generator

ResumeAI is a full-stack AI-powered MERN application that helps users analyze resumes, generate ATS-friendly resumes, rewrite resumes using AI, and create company-specific professional cover letters.

The platform uses AI to compare resumes with job descriptions, calculate ATS scores, suggest improvements, and optimize resumes for recruiters and MNC companies.

✨ Features
🔐 Authentication System
User Registration
User Login
JWT Authentication
Protected Routes
Logout Functionality
📄 ATS Resume Analyzer
Upload Resume (PDF)
Extract Resume Text
ATS Score Calculation
Skill Matching
Missing Skills Detection
Resume Suggestions
Job Description Matching
🤖 AI Resume Rewriter
Rewrite Resume Professionally
ATS-Friendly Improvements
Better Project Descriptions
Action Verbs Optimization
Recruiter-Friendly Wording
📝 AI Cover Letter Generator
Company-Specific Cover Letters
Role-Specific Generation
MNC Style Templates
User Custom Instructions
Rectification Requests
Professional Formatting
🎨 Modern UI/UX
Glassmorphism Design
Gradient Backgrounds
Responsive Layout
Premium Navbar
Modern Dashboard
Smooth Hover Effects
🛠️ Tech Stack
Frontend
React.js
Vite
Tailwind CSS
React Router DOM
Axios
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
bcryptjs
Multer
AI Integration
OpenAI API
Resume Parsing
pdf-parse
📂 Folder Structure
ResumeAI/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── page/
│   │   ├── services/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── utils/
│   ├── server.js
│   └── .env
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/resumeai.git
📦 Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
📦 Backend Setup
cd backend
npm install
npm run dev

Backend runs on:

http://localhost:5000
🔑 Environment Variables

Create a .env file inside backend folder.

PORT=5000


MONGO_URI=your_mongodb_connection_string


JWT_SECRET=your_jwt_secret


OPENAI_API_KEY=your_openai_api_key
📚 Installed Packages
Frontend
npm install react-router-dom axios
npm install -D tailwindcss @tailwindcss/vite
Backend
npm install express mongoose cors dotenv bcryptjs jsonwebtoken multer cookie-parser
npm install openai
npm install pdf-parse@1.1.1
🤖 AI Functionalities
ATS Resume Analysis
Skill Matching
ATS Score Generation
Missing Keyword Detection
Improvement Suggestions
AI Resume Rewriter
Rewrite Experience
Improve Projects
ATS Optimization
Professional Tone
AI Cover Letter Generator
Company Specific
Role Specific
MNC Standard Templates
Personalized Requests
📌 API Routes
Authentication Routes
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/logout
Resume Routes
POST /api/resume/upload
POST /api/resume/rewrite
Cover Letter Routes
POST /api/cover-letter/generate
🧠 ATS Workflow
Upload Resume
      ↓
Extract Resume Text
      ↓
Compare With Job Description
      ↓
Calculate ATS Score
      ↓
Generate Suggestions
      ↓
AI Feedback & Optimization
🔥 Future Enhancements
Resume PDF Download
Multiple Resume Templates
AI Resume Builder
AI Interview Questions
Job Recommendation System
Resume History
Dark Mode
LinkedIn Profile Analyzer
📸 Screenshots

Add screenshots here:

screenshots/home.png
screenshots/dashboard.png
screenshots/cover-letter.png
🚀 Deployment
Frontend
Vercel
Backend
Render
Database
MongoDB Atlas
🛡️ Security
JWT Authentication
Protected Routes
Password Hashing using bcryptjs
Environment Variables
Secure API Architecture
👨‍💻 Author
Abhishek Sharma

B.Tech CSE Student

AI & Full Stack Developer

⭐ If You Like This Project

Give this repository a star ⭐ on GitHub.

📄 License

This project is licensed under the MIT License.

I created a complete professional GitHub README for your ResumeAI project including:

Features
Tech Stack
Installation
API Routes
Folder Structure

AI Features
Deployment
Future Enhancements
Security
Screenshots section
Professional formatting
