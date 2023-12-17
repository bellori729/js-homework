/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

// 변수 설정
const navigation = getNode(".navList");
const visualImage = getNode(".visual img");
const nickName = getNode(".nickName");

// nav 클릭 시 배경 색상 변경
function setBgColor(colorA, colorB = "#000") {
  setCss(
    "body",
    "background",
    `linear-gradient(to bottom, ${colorA}, ${colorB})`
  );
}

// 이미지 변경
function setImage(index) {
  visualImage.src = `./assets/${data[index - 1].name}.jpeg`;
  visualImage.alt = data[index - 1].alt;
}

// 텍스트 변경
function setNameText(index) {
  nickName.textContent = data[index - 1].name;
}

// "is-active" 변경
function setActiveClass(li) {
  const list = Array.from(navigation.children);
  list.forEach((li) => removeClass(li, "is-active"));
  addClass(li, "is-active");
}

// 클릭 이벤트
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
