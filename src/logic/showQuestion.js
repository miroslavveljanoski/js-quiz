
function showQuestion(nr) {
    // Hide the setup
    document.getElementById("explanation_div").style.display = "none";
    // Show the game
    document.getElementById("play_quiz_div").style.display = "block";
    // Get the data
    let q = getQuestion(0);
    document.getElementById("question").innerText = q.text;
    document.getElementById("first-answer").innerText = q.answers[0];
    document.getElementById("second-answer").innerText = q.answers[1];
    document.getElementById("third-answer").innerText = q.answers[2];
}
