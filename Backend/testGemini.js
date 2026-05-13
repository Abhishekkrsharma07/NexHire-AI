const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv").config();

const genAI = new GoogleGenerativeAI(
    process.env.OPENAI_API_KEY
);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash"
});


async function test() {

    try {

        const result = await model.generateContent(
            "Hello Gemini"
        );

        const response = result.response;

        const text = response.text();

        console.log(text);

    } catch (error) {

        console.log(error);

    }

}

test();