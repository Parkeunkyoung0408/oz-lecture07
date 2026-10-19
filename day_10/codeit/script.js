// 바뀌는 게임 상태
let money = 10000;
let snackCount = 0;
let hasGift = false;
let errandCount = 0;

// 게임 상태를 화면에 표시
function updateScreen(message) {
  document.getElementById("money").textContent = money;
  document.getElementById("snacks").textContent = snackCount;
  document.getElementById("gift").textContent =
    hasGift ? "있음" : "없음";
  document.getElementById("errands").textContent = errandCount;

  if (snackCount >= 3 && hasGift && money >= 0) {
    message = "🎉 성공! 간식과 선물을 모두 준비했어요!";
  }

  document.getElementById("message").textContent = message;
}

// 간식 사기
function buySnack() {
  if (money < 2000) {
    updateScreen("간식을 사기에는 용돈이 부족해요.");
    return;
  }

  money -= 2000;
  snackCount += 1;

  updateScreen("🍪 간식 하나를 샀어요!");
}

// 심부름하기
function doErrand() {
  if (errandCount >= 2) {
    updateScreen("심부름은 최대 2번까지 할 수 있어요.");
    return;
  }

  money += 3000;
  errandCount += 1;

  updateScreen("🧹 심부름을 마치고 용돈을 받았어요!");
}

// 선물 사기
function buyGift() {
  if (hasGift) {
    updateScreen("선물은 이미 샀어요.");
    return;
  }

  if (money < 5000) {
    updateScreen("선물을 사기에는 용돈이 부족해요.");
    return;
  }

  money -= 5000;
  hasGift = true;

  updateScreen("🎁 선물을 샀어요!");
}

// 다시 시작
function resetGame() {
  money = 10000;
  snackCount = 0;
  hasGift = false;
  errandCount = 0;

  updateScreen("새 게임을 시작했어요!");
}