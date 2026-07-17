async function askQuestion() {
    const question = document.getElementById("userQuestion").value.trim();
    const answer = document.getElementById("answer");

    if (question === "") {
        answer.innerHTML = "Please enter a question.";
        return;
    }

    answer.innerHTML = "🤖 Thinking...";

    setTimeout(() => {
        answer.innerHTML = `
        <h3>EduGenie AI Response</h3>
        <p><b>Your Question:</b> ${question}</p>
        <p><b>Answer:</b></p>
        <p>This is a demonstration of the EduGenie AI Learning Assistant developed as part of the APSCHE Internship Project. The application successfully accepts user questions and displays AI responses through the user interface.</p>
        `;
    }, 1000);
}
