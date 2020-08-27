function getAnswer(nr) {
    if ((nr > -1) && (nr < getNrOfQuestions())) {
        return state.questions[nr].answers[state.questions[nr].correct];
    } else {
        return '';
    }
}