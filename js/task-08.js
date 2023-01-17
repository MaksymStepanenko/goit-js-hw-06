const formEl = document.querySelector('.login-form')
formEl.addEventListener("submit", handleSubmit)
const formObj = {}

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені");
    }
    formObj.email = email.value
    formObj.password = password.value
    console.log(formObj);
    event.currentTarget.reset();
}
