const skills = [

    "javascript",
    "react",
    "node",
    "mongodb",
    "express",
    "html",
    "css",
    "tailwind",
    "python",
    "java",
    "c++",
    "sql",
    "git",
    "github",
    "api",
    "docker"

];


const analyzeResume = (resumeText, jobDescription) => {

    const resume = resumeText.toLowerCase();

    const jd = jobDescription.toLowerCase();


    let matchedSkills = [];

    let missingSkills = [];


    skills.forEach((skill) => {

        if (
            resume.includes(skill) &&
            jd.includes(skill)
        ) {

            matchedSkills.push(skill);

        }

        else if (
            jd.includes(skill)
        ) {

            missingSkills.push(skill);

        }

    });


    // ATS Score
    const atsScore = Math.round(
        (matchedSkills.length / skills.length) * 100
    );


    // Suggestions
    let suggestions = [];

    if (missingSkills.length > 0) {

        suggestions.push(
            `Add these skills: ${missingSkills.join(", ")}`
        );

    }

    if (atsScore < 60) {

        suggestions.push(
            "Improve project descriptions and add measurable achievements."
        );

    }

    return {

        atsScore,

        matchedSkills,

        missingSkills,

        suggestions

    };

};


module.exports = analyzeResume;