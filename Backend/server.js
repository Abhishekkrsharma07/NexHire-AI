const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");


// Load ENV
dotenv.config();


// Routes
const authRoutes = require("./routes/authRoutes");

const resumeRoutes = require("./routes/resumeRoutes");

const coverLetterRoutes = require("./routes/coverLetterRoutes");



const app = express();



// Middleware
app.use(cors({

    origin: "http://localhost:5173",

    credentials: true

}));


app.use(express.json());

app.use(cookieParser());



// Debug API Key
console.log(process.env.OPENAI_API_KEY);



// Routes
app.use("/api/auth", authRoutes);

app.use("/api/resume", resumeRoutes);

app.use("/api/cover-letter", coverLetterRoutes);



// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log("MongoDB Connected"))

.catch((err) => console.log(err));



// Test Route
app.get("/", (req, res) => {

    res.send("API Running");

});



const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {

    console.log(`Server running on ${PORT}`);

}); 