const DELETE_ALL_QUESTIONS = document.querySelector("#btn-delete-all");
DELETE_ALL_QUESTIONS.addEventListener("click", DeleteAllQuestions);
function DeleteAllQuestions() {
    localStorage.clear();
    DangerToast("All questions have been deleted.");
}
function DangerToast(text) {
    Toastify({
        text: `${text}`,
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "white",
            color: "black",
        },
        stopOnFocus: true,
    }).showToast();
}