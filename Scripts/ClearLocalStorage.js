const DELETE_ALL_QUESTIONS = document.querySelector("#btn-delete-all");
DELETE_ALL_QUESTIONS.addEventListener("click", DeleteAllQuestions);
function DeleteAllQuestions() {
    localStorage.clear();
}