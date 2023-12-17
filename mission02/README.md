# 엘리멘탈 썸네일 페이지 구현

썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성해주세요.

## 요구사항
1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.

    a. 이벤트 위임

    b. 반복문

2. 이미지와 색상의 데이터는 `data.js` 에서 불러와주세요.

3. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.

    a. 배경색 변경 ( colorB의 기본값은 `#000` 으로 한다 )
    
    ```jsx
    elem.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;
    ```
    
      b. 이미지 변경
    
    ```jsx
    target.src = `./assets/${data.name}.jpeg`;
    target.alt = data.alt;
    ```
    
4. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.
    
    ```jsx
    target.textContent = data.name;
    ```
    
5. 함수를 분리시켜주세요.

    a. `setBgColor` 함수

    b. `setImage` 함수

    c. `setNameText` 함수

6. 가독성이 좋은 코드로 리팩토링 해주세요.

## 진행 과정

### 변수 설정

```
const navigation = getNode(".navList");
const visualImage = getNode(".visual img");
const nickName = getNode(".nickName");
```
- 재활용성을 높이기 위해 getNode() 함수를 사용하여 각각 요소를 가져와 변수에 할당


### nav 클릭 시 배경 색상 변경 함수

```
function setBgColor(colorA, colorB = "#000") {
  setCss(
    "body",
    "background",
    `linear-gradient(to bottom, ${colorA}, ${colorB})`
  );
}
```
- 해당 함수 실행 시 body 요소의 배경색을 리니어 그라디언트로 변경
- 첫 번째 매개변수만 입력 시 두 번째 매개변수 검정(#000)이 되도록 기본값 설정

### 이미지 변경 함수
```
function setImage(index) {
  visualImage.src = `./assets/${data[index - 1].name}.jpeg`;
  visualImage.alt = data[index - 1].alt;
}
```
- 해당 함수 실행 시 주어진 index를 기반으로 visualImage의 src 속성과 alt 속성을 assets 폴더 안에 있는 data.js의 const data 객체에 접근하여 새로운 이미지로 설정

### 텍스트 변경 함수
```
function setNameText(index) {
  nickName.textContent = data[index - 1].name;
}
```
- 해당 함수 실행 시 주어진 index를 기반으로 nickName 요소의 텍스트 내용을 assets 폴더 안에 있는 data.js의 const data 객체에 접근하여 변경

### "is-active" 변경 함수
```
function setActiveClass(li) {
  const list = Array.from(navigation.children);
  list.forEach((li) => removeClass(li, "is-active"));
  addClass(li, "is-active");
}
```
- 해당 함수 실행 시 주어진 li 요소를 선택하고 .navigation의 자식 요소들 중 모든 li 태그에서 "is-active" 클래스를 제거 후 주어진 li 요소에 "is-active" 클래스를 추가

### 클릭 이벤트
```
function handleClick(e) {
  const li = e.target.closest("li");
  if (!li) return;

  const index = li.dataset.index;
  setActiveClass(li);
  setBgColor(data[index - 1].color[0], data[index - 1].color[1]);
  setImage(index);
  setNameText(index);
}

navigation.addEventListener("click", handleClick);
```
- li 안의 요소가 button이므로 기본 동작이 "click"이기 때문에 별도로 preventDefault() 설정 X
- 클릭된 요소가 li 태그인지 확인하고 아니라면 함수를 종료시키기 위해 if (!li) return 설정
- 클릭된 li 태그에 대해 setActiveClass 함수를 호출하여 "is-active" 클래스를 설정
- 클릭된 메뉴 항목에 따라 배경 색상, 이미지, 텍스트를 변경하는 함수 호출