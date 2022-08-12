const  quizData = [
    { 
        question : 'How old is Tomiwa?',
        a : '10',
        b : '50',
        c : '23',
        d : '30',
        correct : 'c'
        
    },
    { 
        question : 'What is the most used programming languages in 2019?',
        a : 'Java',
        b : 'C',
        c : 'Python',
        d : 'Javascript',
        correct : 'd'
        
    },
    { 
        question : 'Who is the president of USA ?',
        a : 'Tomiwa Ojo',
        b : 'Joe Biden',
        c : 'Young Po',
        d : 'Dembe Zouma',
        correct : 'b'
        
    },
    { 
        question : 'What does HTML stands for?',
        a : 'Hypertext Markup Language',
        b : 'Cascading Styling Sheet',
        c : 'JSON Object Notation',
        d : 'Hypertext Marketting Language',
        correct : 'a'
        
    },
    { 
        question : 'What year was Javascript launched?',
        a : '1998',
        b : '1997',
        c : '1995',
        d : 'none of the above',
        correct : 'c'
        
    }
]

const answerEls   = document.querySelectorAll('.answer');
const quiz  = document.querySelector('.container');
    
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.querySelector('button');

 let currentQuiz = 0;
 let score = 0;
   loadQuiz();
function loadQuiz() {
    deselect();
    const currentQuizData = quizData[currentQuiz];
   questionEl.innerHTML = currentQuizData.question ;
   
    
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;

     
}

function getSelected() {
    
    let answer = undefined;
    answerEls.forEach( (answerEl) => {
        if(answerEl.checked){
        answer =  answerEl.id;
        }
    });
    return answer;
     
}

 function deselect() {
    answerEls.forEach( (answerEl) => {
    
        answerEl.checked = false;
    });
 }
     
   submitBtn.addEventListener('click', () => {
      
       const answer = getSelected();    
       if(answer) {

         if(answer===quizData[currentQuiz].correct) {
             score++;
         }
        currentQuiz++;

       if(currentQuiz < quizData.length) {
        loadQuiz();
       }else {
           quiz.innerHTML = `<h2> You answered ${score}/${quizData.length} questions correctly.</h2>
           <button onclick="location.reload()">Reload</button>`

       }
    }
   });


