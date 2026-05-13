const generateAIResponse = require(
  "../services/openaiService.js"
);


exports.generateCoverLetter = async (
  req,
  res
) => {

  try {

    const {

      companyName,

      jobRole,

      skills,

      customRequest,

      selectedTemplate

    } = req.body;


    const prompt = `

You are a professional cover letter writer.

Generate a professional cover letter.

Company:
${companyName}

Role:
${jobRole}

Skills:
${skills}

Template Style:
${selectedTemplate}

Additional Requests:
${customRequest}

Instructions:

1. Make it professional
2. ATS friendly
3. Concise and impactful
4. Match MNC standards
5. Highlight skills effectively
6. Use strong professional wording

`;


    const coverLetter =
      await generateAIResponse(prompt);


    res.status(200).json({

      message:
        "Cover Letter Generated",

      coverLetter

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }

};