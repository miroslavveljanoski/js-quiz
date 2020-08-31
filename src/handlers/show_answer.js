function showAnswer(event) {
     debugger;

    const userTarget = event.target;
    if (userTarget.tagName !== 'BUTTON') {
        return;
    }
    const allQuestion = [...state.questions];
    const currentQuestion = document.getElementById('question_text').innerHTML;

    const scoreBoard = document.querySelector('#scoreUpdate');
    const answeredNumber = document.querySelector('#answeredUpdate')
    const inform = document.querySelector('#user_info')
    let score = 0;
    let answered = 0;

    const buttons = document.querySelectorAll('.choices');

    let correctAns = '';
    for (let i = 0; i < allQuestion.length; i++) {
       if(currentQuestion === allQuestion[i].text) {
            correctAns = allQuestion[i].answers[allQuestion[i].correct];
        } 
    }

    if (userTarget.innerText !== correctAns){
        userTarget.classList.add('incorrect');
        answered++;
        answeredNumber.innerHTML = answered;
        buttons.forEach(btn=>{
            if(btn.innerText == correctAns){
                btn.classList.add('correct');
            }
            btn.setAttribute("disabled", true);
        });
        inform.innerHTML = 'YOU ARE WRONG, IF YOU WANT TO LEARN YOU CAN CLICK SOURCE BUTTON';

    } else if (userTarget.innerText === correctAns) {
        userTarget.classList.add('correct');
        answered++;
        answeredNumber.innerHTML = answered;
        score++;
        scoreBoard.innerHTML = score;
        buttons.forEach(btn=>{
            btn.setAttribute("disabled", true);
        });
        inform.innerHTML = 'CORRECT!  😉 '
    }

    
}