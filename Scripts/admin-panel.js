// Soru verileri alınacak. "Add" butonuna basıldığında, Obje'de tutulacak. Sonrasında map kullanılabilir.
// Soru ve cevaplar boş bırakılabilir (doğru - yanlış soruları için.)
// Doğru cevap boş bırakılamaz! Toast mesajı veya normal p etiketi kullanılabilir.
const QUESTIONS={}; //sorular buraya eklenecek.

const QUESTİON_FORM= document.querySelector("#question-form");

let questionID=0;

EventListeners();

function EventListeners(){
    QUESTİON_FORM.addEventListener("submit", GetData);
}
function GetData(e){
    e.preventDefault();
    questionID++;
    let question = QUESTİON_FORM.querySelector("#question").value;
    let answerA = QUESTİON_FORM.querySelector("#answer-A").value;
    let answerB = QUESTİON_FORM.querySelector("#answer-B").value;
    let answerC = QUESTİON_FORM.querySelector("#answer-C").value;
    let answerD = QUESTİON_FORM.querySelector("#answer-D").value;
    let answerTrue = QUESTİON_FORM.querySelector("#answer-true").value;
    let btnAdd = QUESTİON_FORM.querySelector("#btn-add");
    addQuestion();
    function addQuestion(){
        const addQuestion = {
            questionID,
            question,
            answers:{
                A: answerA,
                B: answerB,
                C: answerC,
                D: answerD,
            } ,
            trueAnswer:answerTrue
          };
          QUESTIONS.addQuestion;
          console.log("New question added:", addQuestion);
    }
}
