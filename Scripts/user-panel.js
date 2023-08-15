window.onload = function () {
    const STORED_QUESTIONS_KEY = 'questions';
    function GetStoredQuestions() {
        const storedQuestions = localStorage.getItem(STORED_QUESTIONS_KEY);
        return JSON.parse(storedQuestions) || [];
    }
    let allQuestions = GetStoredQuestions(); //Tüm sorular çekildi.
    let questionDiv = document.getElementById("question-div");
    let questionAnswer = document.getElementById("question-answer-div");
    let point=0;
    let raiseQuestion=0;

    ShowQuestion(raiseQuestion);

    function ShowQuestion(questionIndex) {
        if (questionIndex >= 0 && questionIndex < allQuestions.length) {// questionIndex var ise soruyu göster.
            questionDiv.innerHTML = "";
            questionAnswer.innerHTML = "";
            let question = allQuestions[questionIndex];
            console.log(question);
            let pointDOM=document.querySelector(".point");
            pointDOM.innerHTML= point;
            // Show Question
            let pDOM = document.createElement("p");
            let questionIndicator = document.querySelector(".question-index");
            questionIndicator.innerHTML = questionIndex + 1;
            pDOM.innerHTML = question.question;
            questionDiv.appendChild(pDOM);
            // Show Options
            let answersArray = Object.values(question.answers); //question.answers --> Dizi olarak aldı.
            console.log(answersArray);
            for (let i = 0; i < answersArray.length; i++) {
                let btnDOM = document.createElement("button");
                btnDOM.id = `answer${i}`;
                btnDOM.innerHTML = `<p>${answersArray[i]}</p>`;
                btnDOM.addEventListener("click", function (event) {
                    event.preventDefault();
                    Controller(this.id);
                });
                questionAnswer.appendChild(btnDOM);
            }
            function Controller(btnID) {
                trueAnswer = allQuestions[questionIndex].trueAnswer.toUpperCase();
                let buttonElement = document.getElementById(btnID);
                switch (btnID) {
                    case "answer0":
                        btnID = "A"
                        break;
                    case "answer1":
                        btnID = "B"
                        break;
                    case "answer2":
                        btnID = "C"
                        break;
                    case "answer3":
                        btnID = "D"
                        break;
                }
                if(btnID===trueAnswer){
                    point++;
                    raiseQuestion++;
                    ShowQuestion(raiseQuestion);
                }
                else{
                    if(point>0){
                        point--;                    
                    }
                    buttonElement.classList.add("false");
                    buttonElement.style.backgroundColor = "var(--yellow)";
                }
            pointDOM.innerHTML= point;
                console.log(trueAnswer);
                console.log(btnID);
            }
        }
    }

}