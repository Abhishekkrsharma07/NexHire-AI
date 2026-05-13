const OpenAI = require("openai");

const openai = new OpenAI({

    apiKey: process.env.OPENAI_API_KEY

});



const generateAIResponse = async (prompt) => {

    try {

        const completion =
            await openai.chat.completions.create({

                model: "gpt-4o-mini",

                messages: [

                    {
                        role: "user",
                        content: prompt
                    }

                ],

                temperature: 0.7

            });

        return completion
            .choices[0]
            .message
            .content;

    } catch (error) {

        console.log(error);

        return "AI Error";

    }

};

module.exports = generateAIResponse;