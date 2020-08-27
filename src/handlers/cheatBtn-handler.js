function buttonCheatHandler() {
    if (getCurrent() > -1) {
        window.alert("The correct answer is: " + getAnswer(getCurrent()));
    }
}