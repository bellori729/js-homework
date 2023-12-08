# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

---

## email 정규표현식을 사용한 validation

![](https://github.com/bellori729/js-homework/tree/main/mission01/explain/EmailCheck.png?raw=true)

### 이메일 형식에 맞지 않는 내용으로 입력 시 class에 is--invalid 추가되어 에러문구 출력

![](https://github.com/bellori729/js-homework/tree/main/mission01/explain/EmailCheck2.png?raw=true)

### 올바른 형식으로 입력 시 class에 is--invalid 삭제

![](https://github.com/bellori729/js-homework/tree/main/mission01/explain/EmailCheck3.png?raw=true)

---

## pw 정규표현식을 사용한 validation

![](https://github.com/bellori729/js-homework/tree/main/mission01/explain/PwCheck.png?raw=true)

### 특수문자 포함 6자리 이상 형식에 맞지 않는 내용으로 입력 시 class에 is--invalid 추가되어 에러문구 출력

![](https://github.com/bellori729/js-homework/tree/main/mission01/explain/PwCheck2.png?raw=true)

### 올바른 형식으로 입력 시 class에 is--invalid 삭제

![](https://github.com/bellori729/js-homework/tree/main/mission01/explain/PwCheck3.png?raw=true)

---

## 로그인 버튼을 클릭 시 user.id의 값 및 user.pw의 값과 input의 값을 비교
## 두 값이 일치한다면 다음 페이지(welcome.html)로 이동

![](https://github.com/bellori729/js-homework/tree/main/mission01/explain/LoginCheck.png?raw=true)

### user.id와 user.pw의 값을 input 값과 비교하여 일치하지 않다면 에러 문구 출력
![](https://github.com/bellori729/js-homework/tree/main/mission01/explain/LoginCheck2.png?raw=true)

---

## IP 보안 클릭 시 찐 네이버 IP 보안 창 뜨게 하기(이건 그냥 해보았음)

![](https://github.com/bellori729/js-homework/tree/main/mission01/explain/ipSecurity.png?raw=true)