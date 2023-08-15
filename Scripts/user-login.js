const USER_FORM = document.querySelector("#user-form");
const USER_NAME = "user";
const USER_PASS = "1234";
EventListeners();

function EventListeners() {
    USER_FORM.addEventListener("submit", UserForm);
}
function UserForm(e) {
    e.preventDefault();
    let userName = USER_FORM.querySelector("#user-name");
    let userPass = USER_FORM.querySelector("#user-password");
    let trimmedUserName = userName.value.trim();
    let trimmedUserPass = userPass.value.trim();

    userName.value = "";
    userPass.value = "";

    UserData(trimmedUserName, trimmedUserPass);

    function UserData(name, pass) {
        if (name === USER_NAME && pass === USER_PASS) {
            window.location.href = "./user-panel.html"; //User paneline yönlendirilecek.
        }
        else if (name == "" && pass == "") {
            DangerToast("null value");
        }
        else {
            DangerToast("wrong value");
        }
    }
}
function DangerToast(text) {
    Toastify({
        text: `${text}`,
        duration: 2000,
        gravity: "top",
        position: "right",
        style: {
            background: "white",
            color: "black",
        },
        stopOnFocus: true,
    }).showToast();
}