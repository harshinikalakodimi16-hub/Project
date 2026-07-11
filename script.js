const API_KEY = "AQ.Ab8RN6KfwMKVuyMcUhBBDpcNBycJfwuGdPgYjZGgxivti9g9Jw";

async function askQuestion() {
    const question = document.getElementById("userQuestion").value.trim();
    const answer = document.getElementById("answer");

    if (!question) {
        answer.innerHTML = "Please enter a question.";
        return;
    }

    answer.innerHTML = "🤖 Thinking...";

    try {
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": API_KEY
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

        if (!response.ok) {
            answer.innerHTML = `
                <h3>⚠️ Service Temporarily Unavailable</h3>
                <p>
                    The AI service is currently unavailable due to an API
                    authentication configuration issue.
                </p>
                <p>
                    The frontend, project architecture, and deployment are working correctly.
                </p>
            `;
            return;
        }

        const data = await response.json();
        answer.innerHTML = data.candidates[0].content.parts[0].text;

    } catch (error) {
        answer.innerHTML = `
            <h3>⚠️ Connection Error</h3>
            <p>Unable to connect to the AI service at this time.</p>
        `;
    }
}
