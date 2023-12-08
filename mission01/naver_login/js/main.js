const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

// 규식이행님

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 아이디(이메일) 입력란 체크

const userEmailInput = document.querySelector("#userEmail");

function HandleIdInput(e) {
  e.preventDefault();
  if (emailReg(userEmailInput.value)) {
    userEmailInput.classList.remove("is--invalid");
  } else {
    userEmailInput.classList.add("is--invalid");
  }
}

userEmailInput.addEventListener("input", HandleIdInput);

// 비밀번호 입력란 체크

const userPasswordInput = document.querySelector("#userPassword");

function HandlePwInput(e) {
  e.preventDefault();
  if (pwReg(userPasswordInput.value)) {
    userPasswordInput.classList.remove("is--invalid");
  } else {
    userPasswordInput.classList.add("is--invalid");
  }
}

userPasswordInput.addEventListener("input", HandlePwInput);

// 로그인 버튼 클릭 시 user.id의 값과 input의 값을 비교 및 user.pw의 값과 input의 값을 비교

const loginButton = document.querySelector(".btn-login");

function handleLogin(e) {
  e.preventDefault();
  if (userEmailInput.value === user.id && userPasswordInput.value === user.pw) {
    window.location.href = "welcome.html";
  } else {
    loginButton.classList.add("is--invalid");
  }
}

loginButton.addEventListener("click", handleLogin);

// IP 보안 클릭 시 찐 네이버 IP 보안 창 뜨게 하기

const aTag = document.querySelector(".ip-security-link");

function openPopup(e) {
  e.preventDefault();
  window.open(aTag.href, "PopupWindow", "width=520,height=747");
}

aTag.addEventListener("click", openPopup);
