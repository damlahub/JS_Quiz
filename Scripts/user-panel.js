window.onload = function () {
    const STORED_QUESTIONS_KEY = 'questions';
    function GetStoredQuestions() {
        const storedQuestions = localStorage.getItem(STORED_QUESTIONS_KEY);
        return JSON.parse(storedQuestions) || [];
    }
    let allQuestions = GetStoredQuestions(); //Tüm sorular çekildi.

    let questionDiv = document.getElementById("question-div");
    let questionAnswer = document.getElementById("question-answer-div");
    ShowQuestion(0);

    function ShowQuestion(questionIndex) {
        if (questionIndex >= 0 && questionIndex < allQuestions.length) {// questionIndex var ise soruyu göster.
            let question = allQuestions[questionIndex];
            console.log(question);
            // Show Question
            let pDOM=document.createElement("p");
            pDOM.innerHTML=question.question;
            questionDiv.appendChild(pDOM);
            // Show Options
            let answersArray = Object.values(question.answers); //question.answers --> Dizi olarak aldı.
            console.log(answersArray);
            for (let i = 0; i < answersArray.length; i++) {
                let btnDOM = document.createElement("button");
                btnDOM.id = `answer${i}`;
                btnDOM.innerHTML = `<p>${answersArray[i]}</p>`;
                btnDOM.addEventListener("click", function(event) {
                    event.preventDefault();
                    Controller(this.id);
                });
                questionAnswer.appendChild(btnDOM);
            }
        }
    }
    function Controller(btnID) {
        console.log(btnID);
    }
}