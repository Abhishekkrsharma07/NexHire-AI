const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    fileName: String,

    filePath: String,

    extractedText: String,

    atsScore: Number,

    matchedSkills: [String],

    missingSkills: [String],

    suggestions: [String],

    aiFeedback: String

}, { timestamps: true });


module.exports = mongoose.model("Resume", resumeSchema);