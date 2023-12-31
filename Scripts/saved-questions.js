const STORED_QUESTIONS_KEY = 'questions';

function GetStoredQuestions() {
    const storedQuestions = localStorage.getItem(STORED_QUESTIONS_KEY);
    return JSON.parse(storedQuestions) || [];
}
function DeleteQuestion(index) {
    let allQuestions = GetStoredQuestions();
    allQuestions.splice(index, 1);
    localStorage.setItem(STORED_QUESTIONS_KEY, JSON.stringify(allQuestions));
    location.reload(); 
}
let allQuestions = GetStoredQuestions();

let questionForm = document.querySelector(".question-container");
allQuestions.forEach((question, index) => {
    let answersArray = Object.values(question.answers);
    // <section class="question-div flex-column"></section>
    let questionDiv = document.createElement("section");
    questionDiv.classList.add("question-div", "flex-column");
    let questionHTML = `<p>${index + 1}. ${question.question}</p>`;
    let answersHTML = '<ul>';
    answersArray.forEach((answer, answerIndex) => {
        answersHTML += `<li>${String.fromCharCode(65 + answerIndex)}) ${answer}</li>`;
    });
    answersHTML += '</ul>';
    let trueAnswerHTML = `<p>True Answer: ${question.trueAnswer.toUpperCase()}</p>`;
    let deleteButtonHTML = `<button class="delete-button" type="button" data-question-index="${index}">Delete</button>`;
    let questionContent = questionHTML + answersHTML + trueAnswerHTML + deleteButtonHTML;

    questionDiv.innerHTML = questionContent;
    questionForm.appendChild(questionDiv);

    let deleteButton = questionDiv.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        DeleteQuestion(index);
    });
});