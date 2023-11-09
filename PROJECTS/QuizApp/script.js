const questions = [
    {
        question: "Which is largets animal?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraf", correct: false}
        ]
    },
    {
        question: "Which language dont use OOPs concept?",
        answers: [
            {text: "C", correct: true},
            { text: "C++", correct:false},
            { text: "Java", correct: false},
            { text: "Python", correct: false}
        ]
    },
    {
        question: "Which is largets animal?",
        answers: [
            
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraf", correct: false}
        
        ]
    },
    {
        question: "Which is largets animal?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraf", correct: false}
        ]
    }

];

const questionElement=document.getElementById("questions");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQueIndex=0;
let score=0;

function startQuize(){
    currentQueIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentquestion=questions[currentQueIndex];
    let quetionNo=currentQueIndex+1;
    questionElement.innerHTML=quetionNo+". "+ currentquestion.question;

    currentquestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play again"
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQueIndex++;
    if(currentQueIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQueIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuize();
    }
})

startQuize();