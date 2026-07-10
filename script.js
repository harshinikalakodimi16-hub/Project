const API_KEY = "AQ.Ab8RN6I5RGJMNYj5ZhswKU9vqGLxGXlEEO_DZy8dxw_2jCZpvQ";

async function askQuestion() {
    const question = document.getElementById("userQuestion").value;
    const answer = document.getElementById("answer");

    if (!question.trim()) {
        answer.innerHTML = "Please enter a question.";
        return;
    }

    answer.innerHTML = "🤖 Thinking...";

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: question
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        answer.innerHTML =
            data.candidates[0].content.parts[0].text;

    } catch (error) {
        answer.innerHTML =
            "Error connecting to Gemini API.";
    }
}
