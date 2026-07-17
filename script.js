async function askQuestion() {
    const question = document.getElementById("userQuestion").value.trim();
    const answer = document.getElementById("answer");

    if (!question) {
        answer.innerHTML = "Please enter a question.";
        return;
    }

    answer.innerHTML = "🤖 Thinking...";

    setTimeout(() => {
        answer.innerHTML = `
        <h3>EduGenie AI Response</h3>
        <p><b>Your Question:</b> ${question}</p>
        <p><b>Answer:</b></p>
        <p>Thank you for your question. This is a demonstration version of EduGenie developed for the APSCHE Internship Project. The application interface, question input, and response display are working successfully.</p>
        `;
    }, 1000);
}
