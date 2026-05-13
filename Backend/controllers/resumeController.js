const fs = require("fs");

const pdf = require("pdf-parse");

const Resume = require("../models/Resume");

const analyzeResume = require("../utils/atsAnalyzer");

const generateAIResponse = require("../services/openaiService.js");



// Upload Resume
exports.uploadResume = async (req, res) => {

    try {

        const file = req.file;

        const { jobDescription } = req.body;

        if (!file) {

            return res.status(400).json({
                message: "No file uploaded"
            });

        }

        // Read PDF
        const dataBuffer = fs.readFileSync(file.path);

        const pdfData = await pdf(dataBuffer);

        const extractedText = pdfData.text;


        // Analyze ATS
        const analysis = analyzeResume(
            extractedText,
            jobDescription
        );

        const aiPrompt = `

You are an ATS resume expert.

Analyze this resume:

${extractedText}

Job Description:

${jobDescription}

Give:

1. Resume strengths
2. Weaknesses
3. Missing skills
4. ATS improvement suggestions
5. Better project wording
6. Professional recommendations

`;



const aiFeedback = await generateAIResponse(
    aiPrompt
);

        // Save to DB
        const resume = await Resume.create({

            fileName: file.filename,

            filePath: file.path,

            extractedText,

            atsScore: analysis.atsScore,

            matchedSkills: analysis.matchedSkills,

            missingSkills: analysis.missingSkills,

            suggestions: analysis.suggestions,

            aiFeedback

        });


        res.status(200).json({

            message: "Resume analyzed successfully",

            resume

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

};