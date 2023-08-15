// Soru verileri alınacak. "Add" butonuna basıldığında, Obje'de tutulacak. Sonrasında map kullanılabilir.
// Soru ve cevaplar boş bırakılabilir (doğru - yanlış soruları için.)
// Doğru cevap boş bırakılamaz! Toast mesajı veya normal p etiketi kullanılabilir.
const QUESTIONS = {}; //sorular buraya eklenecek.

const QUESTION_FORM = document.querySelector("#question-form");

EventListeners();

function EventListeners() {
    QUESTION_FORM.addEventListener("submit", GetData);
}
function GetData(e) {
    e.preventDefault();
    let question = QUESTION_FORM.querySelector("#question").value;
    let answerA = QUESTION_FORM.querySelector("#answer-A").value;
    let answerB = QUESTION_FORM.querySelector("#answer-B").value;
    let answerC = QUESTION_FORM.querySelector("#answer-C").value;
    let answerD = QUESTION_FORM.querySelector("#answer-D").value;
    let answerTrue = QUESTION_FORM.querySelector("#answer-true").value;

    ClearValues();
    AddQuestion();
    function AddQuestion() {
        const addQuestion = {
            question,
            answers: {
                0: answerA,
                1: answerB,
                2: answerC,
                3: answerD,
            },
            trueAnswer: answerTrue
        };
        QUESTIONS.addQuestion;
        console.log("New question added:", addQuestion);
        LocalStorage();
        function LocalStorage(){
            if (localStorage.getItem("questions")) {
                const storedQuestions = JSON.parse(localStorage.getItem("questions"));
                storedQuestions.push(addQuestion);
                localStorage.setItem("questions", JSON.stringify(storedQuestions));
            } else {
                const initialQuestions = [addQuestion];
                localStorage.setItem("questions", JSON.stringify(initialQuestions));
            }
        }
    }
    function ClearValues() {
        QUESTION_FORM.querySelector("#question").value = '';
        QUESTION_FORM.querySelector("#answer-A").value = '';
        QUESTION_FORM.querySelector("#answer-B").value = '';
        QUESTION_FORM.querySelector("#answer-C").value = '';
        QUESTION_FORM.querySelector("#answer-D").value = '';
        QUESTION_FORM.querySelector("#answer-true").value = '';
    }
}
