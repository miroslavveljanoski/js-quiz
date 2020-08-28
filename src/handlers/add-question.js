/* Add question log*/


const array = [];
console.log(array);

const state1 = {
    addQuestion: [],
    addAnswer: [],
    yourAnswer: [],
    cheating: [],
    deleting: []
  };
const stateLog = [{...state1}];
 console.log(stateLog);

 const log = {
       action: 'user action',
       event: []
      };
stateLog.push(log);

function add(e){
    e.preventDefault();
    // take important document
    const input3 = document.getElementById('input1');
    const input1 = document.getElementById('input1').value;
    const input4 = document.getElementById('input2');
    const input2 = document.getElementById('input2').value;
    const input = input2.toLowerCase();
    
    
    //loggong
    
    const question = {
      action: 'add question',
      input: input1
    }
    state1.addQuestion.push(input1);
    stateLog.push(question);
    question.state1 = [{...state1}];
    
    
    const answer = {
      action: 'add answer',
      input: input
    };
    state1.addAnswer.push(input);
    stateLog.push(answer);
    answer.state1 = [{...state1}];
    
            
    // if your input is empty  
    if(input1 == "" || input2 == ""){
        alert('Please fill the input !');
    }else{
        
        // store value of input value
        const store =  input;
       
        
        // list
        const list = document.createElement('li');
        list.classList = ('li');

         // make a line in among the list
         var hr = document.createElement('hr');
         hr.classList = 'hr';
         list.appendChild(hr);
        
        // question place
        const container = document.createElement('p');
        container.classList = ('container1');
        container.appendChild(document.createTextNode(input1));
        list.appendChild(container);
        input3.value = "";
        
        // input and submit btn container
        const box = document.createElement('div');
        box.classList = ('box');
        list.appendChild(box);
        
        // input for your answer
        const exp = document.createElement('input');
        exp.classList = ('exp');
        box.appendChild(exp);
        
        // your answer submit btm
        const sub = document.createElement('input');
        sub.type = 'submit';
        sub.innerHTML = 'submit';
        sub.classList = ('sub');
        box.appendChild(sub);
        sub.addEventListener('click', submition);
       
        // answer check place
        const finalAnswer = document.createElement('p');
        finalAnswer.appendChild(document.createTextNode(input2));
        finalAnswer.classList = ('answer');
        list.appendChild(finalAnswer);
        input4.value = "";
        finalAnswer.innerHTML = "";

        // create cheat btn
        const cheat = document.createElement('button');
        cheat.classList = ('cheat');
        cheat.innerHTML = "Cheat";
        box.appendChild(cheat);
        
        
        // create delete btn
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.classList = 'delete';
        box.appendChild(deleteBtn);
        
        
       // add the list in the div which is created in the index.html
        ul.appendChild(list);     
      
        // check answer btn function
          function submition(){ 
              const score = document.getElementById('score1');
               const sound1 = document.getElementById('sound1');
               const sound2 = document.getElementById('sound2');
                const exp1 = exp.value;
                const exp2 = exp1.toLowerCase();
                const yourAnswer = {
                  action: 'give answer',
                  input: exp2
                }
                state1.yourAnswer.push(exp2);
                stateLog.push(yourAnswer);
                yourAnswer.state1 = [{...state1}];

                if(exp2 === store){
                    sound1.play();
                     list.style.backgroundColor = 'rgba(111, 233, 111, 0.801)';
                     finalAnswer.innerHTML = `You got the answer`
                     array.push(5);
                     const sum = array.reduce((total, amount) => +total + +amount); 
                     score.innerHTML = `${sum}`;
                }else{
                      sound2.play();
                      sound1.play();
                      finalAnswer.innerHTML = `Incorrect ! the answer is ${store}`;
                      list.style.backgroundColor = 'red';
                      array.push(0);
                }
                // logging
                
              }
              
        
        // add event listener of delete btn and cheat btn
        const item = document.querySelectorAll('ul li');
        item.forEach(()=>{


          // delete btn function
          deleteBtn.addEventListener('click', function (){
          const deleteMessage = confirm(`Are you sure you want to delete?`);
           
          if(deleteMessage == true){
              event.target.parentElement.parentElement.remove()     
          }else{ 
              alert(`The question does not delete!`)
            }
          // logging
          const deleting = {
            action: 'ask delete',
            alertComfirm: deleteMessage
          }
          state1.deleting.push(deleteMessage);
            stateLog.push(deleting); 
            deleting.state1 = [{...state1}];
          })
           
        // cheat btn function
        cheat.addEventListener('click', function (){
           const message = confirm(`Are you sure you want to cheat? \n NOTE: if you cheat, you will not get the point.`);
           
           if(message == true){
                    finalAnswer.innerHTML = `The answer is ${store}`;
                    list.style.backgroundColor = 'rgba(238, 189, 98, 0.808)';
                    
           }else{ 
               alert(`Continue !`)
                }
          // logging      
          const cheating = {
            action: 'ask cheat',
            alertComfirm: message
          }
            state1.cheating.push(message);
            stateLog.push(cheating); 
            cheating.state1 = [{...state1}];
        
     })
    })
}}
console.log(stateLog);