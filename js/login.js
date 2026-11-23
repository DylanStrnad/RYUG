function setBackground(e) {
    if (e.type == "focus") {
        e.target.style.backgroundColor = "#57B2E4";
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }
}

window.addEventListener("load", function(){
    var cssSelector = "input[type=email],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    for (i=0; i<fields.length; i++)
    {
        fields[i].addEventListener("focus", setBackground);
        fields[i].addEventListener("blur", setBackground);
    }
});

function wrong_pwd(){
    const wrong_pwd = "<div> Wrong Password. Try Again </div>";
    return wrong_pwd;
}
const login_button = document.querySelector("#login-button");
let wrong = false;
login_button.addEventListener("click", () => {
    const passwordInput = document.querySelector("#exampleInputPassword1");

    if (passwordInput.value === "password") {
        window.location.href = "welcome.html";
    } else if (wrong === false) {
        passwordInput.insertAdjacentHTML("afterend", wrong_pwd());
        wrong = true;
    }
});