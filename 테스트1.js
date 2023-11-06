let inputTag = document.getElementsByTagName("input");
let buttonArray = document.getElementsByTagName("button");

let inputId = inputTag[0]; // 아이디 입력창(input 태그의 0번째)
let inputPassword = inputTag[1]; // 비밀번호 입력창

let ordinaryButton = buttonArray[0];

inputPassword.addEventListener("keyup", () => {
    if (inputId.value && inputPassword.value) {
        ordinaryButton.classList.remove("unactivatedLoginColor");
        ordinaryButton.classList.add("activatedLoginColor");
    } else {
        ordinaryButton.classList.remove("activatedLoginColor");
        ordinaryButton.classList.add("unactivatedLoginColor");
    }
});

ordinaryButton.addEventListener('click', () => {
    if (!inputId.value) {
        alert("아이디를 입력하세요.");
    } else if (!inputPassword.value) {
        alert("비밀번호를 입력하세요.");
    } else if (inputId.value === "본인의아이디" && inputPassword.value === "비밀번호") {
        alert("로그인 성공");
    } else {
        alert("로그인 성공");
    }
});
