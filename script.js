function askQuestion() {

    const question = document.getElementById("userQuestion").value;
    const answer = document.getElementById("answer");

    if (question.trim() === "") {
        answer.innerHTML = "⚠️ Please enter a question.";
        return;
    }

    answer.innerHTML = "🤖 Thinking...";

    // Temporary demo response
    setTimeout(() => {

        answer.innerHTML =
        "You asked: " + question +
        "<br><br>" +
        "This is a demo version of EduGenie. In the final version, Google Gemini AI will generate an intelligent response to your question.";

    }, 1500);

}
