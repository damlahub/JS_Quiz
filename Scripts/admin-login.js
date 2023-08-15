const ADMIN_FORM = document.querySelector("#admin-form");
const ADMIN_NAME = "admin";
const ADMIN_PASS = "1234";

EventListeners();

function EventListeners() {
    ADMIN_FORM.addEventListener("submit", AdminForm);
}
function AdminForm(e) {
    e.preventDefault();

    let adminName = ADMIN_FORM.querySelector("#admin-name");
    let adminPass = ADMIN_FORM.querySelector("#admin-password");
    let trimmedAdminName = adminName.value.trim();
    let trimmedAdminPass = adminPass.value.trim();

    adminName.value = "";
    adminPass.value = "";

    AdminData(trimmedAdminName, trimmedAdminPass);
    
    function AdminData(name, pass) {
        if (name === ADMIN_NAME && pass === ADMIN_PASS) {
            window.location.href = "./admin-panel.html"; //Admin paneline yönlendirilecek.
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

