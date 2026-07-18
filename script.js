const API_KEY = "AQ.Ab8RN6KWhIaplf_7ljOR9kYk5bvHetxfxRtAPtIljmob1YJZvg";

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
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
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

        const data = await response.json();

        // Show full response in browser console
        console.log("Gemini Response:", data);

        if (!response.ok) {
            answer.innerHTML =
                "<h3>❌ API Error</h3><pre>" +
                JSON.stringify(data, null, 2) +
                "</pre>";
            return;
        }

        answer.innerHTML = data.candidates[0].content.parts[0].text;

    } catch (err) {
        console.error("Connection Error:", err);

        answer.innerHTML = `
            <h3>⚠️ Connection Error</h3>
            <p>${err.message}</p>
        `;
    }
}
