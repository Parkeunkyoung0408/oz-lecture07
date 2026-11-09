// ============================================================
//  calculator.js — 계산기 핵심 로직
//  📝 과제: 💡 표시된 빈칸을 채워 기능을 완성하세요.
// ============================================================

const mainDisplay = document.getElementById("mainDisplay");
const subDisplay  = document.getElementById("subDisplay");

let expression     = "";    // 현재 입력 중인 수식 문자열
let justCalculated = false; // 방금 = 을 눌렀는지 여부

// 디스플레이 갱신 — main.js에서도 호출합니다 (수정 금지)
export const updateDisplay = () => {
    mainDisplay.textContent = expression || "0";
    mainDisplay.style.fontSize = expression.length > 10 ? "1.8rem" : "2.6rem";
};

// ── 과제 1: 숫자 / 소수점 입력 ──────────────────────────────
/**
 * 버튼에서 눌린 숫자(또는 '.')를 expression에 추가합니다.
 *
 * 구현해야 할 규칙:
 *  1. justCalculated가 true이면 expression을 ""로 초기화 후 입력 (새 계산 시작)
 *  2. expression이 "0"일 때 숫자를 누르면 "0"을 대체 (앞자리 0 방지)
 *  3. 소수점(.)은 현재 숫자 구간에 이미 있으면 추가하지 않음
 *
 * @param {string} num - 입력된 숫자 문자 ("0"~"9", ".")
 */
export const appendNumber = (num) => {
    // 💡 [과제 1] 아래 규칙에 따라 코드를 작성하세요.
    // 규칙 1. 계산 직후라면 수식을 비우고 새로운 입력 시작
    if (justCalculated) {
        expression = "";
    }
    justCalculated = false;
    //
    // 규칙 2. "0" 상태에서 숫자를 누르면 "0"을 대체
    // 소수점은 제외하여 "0."으로 입력되도록 함
    if (expression === "0" && num !== ".") {
        expression = num;
        updateDisplay();
        return;
    }
    // 규칙 3. 현재 숫자 구간에 소수점이 있으면 추가하지 않음
    if (num === ".") {
        const numbers = expression.split(/[+\-*\/]/);
        const currentNumber = numbers[numbers.length - 1];

        if (currentNumber.includes(".")) {
            return;
        }
    // 빈 숫자 구간에서 "."을 누르면 "0."으로 시작
        if (currentNumber === "") {
            expression += "0";
        }
    }

    expression += num;
    justCalculated = false;
    updateDisplay();
};

// ── 과제 2: 연산자 입력 ─────────────────────────────────────
/**
 * 연산자(+, -, *, /)를 expression 끝에 추가합니다.
 *
 * 구현해야 할 규칙:
 *  1. expression이 비어 있으면 무시 (연산자로 시작 불가)
 *  2. 마지막 문자가 이미 연산자이면 새 연산자로 교체
 *  3. justCalculated가 true이면 이전 결과에 이어서 연산 가능 (expression 유지)
 *
 * @param {string} op - 연산자 문자 ("+", "-", "*", "/")
 */
export const appendOperator = (op) => {
    // 규칙 1. 수식이 비어 있으면 무시
    if (expression === "") {
        return;
    }

    const last = expression[expression.length - 1];

    // 규칙 2. 마지막 문자가 연산자이면 새 연산자로 교체
    if (["+", "-", "*", "/"].includes(last)) {
        expression = expression.slice(0, -1) + op;
    } else {
        // 규칙 3. 이전 수식이나 계산 결과에 연산자 추가
        expression += op;
    }

    justCalculated = false;
    updateDisplay();
};

// ── 과제 3: 계산 실행 ───────────────────────────────────────
/**
 * expression을 계산하여 결과를 화면에 출력합니다.
 *
 * 구현해야 할 규칙:
 *  1. expression이 비어 있거나 연산자로 끝나면 null 반환 (계산 안 함)
 *  2. 0으로 나누기 감지 → subDisplay에 에러 메시지 표시 후 null 반환
 *  3. 성공 시:
 *     - mainDisplay → 결과값
 *     - subDisplay  → "입력한 수식 ="
 *     - justCalculated = true
 *  4. 반환값: { expression, result } 객체 (기록 저장에 사용)
 *
 * 힌트 — 수식 문자열을 안전하게 계산하는 방법:
 *   Function('"use strict"; return (' + expression + ')')()
 *   eval() 과 같은 역할이지만 전역 스코프에 접근하지 않아 조금 더 안전합니다.
 *
 * 힌트 — 부동소수점 오류 처리:
 *   parseFloat(result.toFixed(10)).toString()
 *
 * @returns {{ expression: string, result: string } | null}
 */
export const calculate = () => {
    // 규칙 1. 빈 수식이거나 연산자로 끝나면 계산하지 않음
    if (expression === "") {
        return null;
    }

    const last = expression[expression.length - 1];

    if (["+", "-", "*", "/"].includes(last)) {
        return null;
    }

     // 규칙 2. 0으로 나누기 확인 (0.5 같은 숫자는 제외)
    if (/\/0+(?:\.0*)?(?![\d.])/.test(expression)) {
        subDisplay.textContent = "0으로 나눌 수 없습니다";
        return null;
    }

    try {
        const raw = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(raw)) {
            subDisplay.textContent = "계산할 수 없는 결과입니다";
            return null;
        }

    const result = parseFloat(raw.toFixed(10)).toString();
    const originalExpression = expression;

   // 규칙 3. 결과 표시 및 계산 상태 갱신
        mainDisplay.textContent = result;
        mainDisplay.style.fontSize =
            result.length > 10 ? "1.8rem" : "2.6rem";
        subDisplay.textContent = originalExpression + " =";
        justCalculated = true;
        expression = result;

   // 규칙 4. 원래 수식과 결과를 기록 저장용으로 반환
        return {
            expression: originalExpression,
            result: result
        };
    } catch (error) {
        subDisplay.textContent = "올바른 수식이 아닙니다";
        return null;
    }
};

// ── 과제 4: 마지막 문자 삭제 ────────────────────────────────
/**
 * expression의 마지막 글자 하나를 제거합니다.
 * justCalculated 상태(계산 직후)라면 전체를 초기화합니다.
 */
export const deleteLast = () => {
    // 규칙 1. 계산 직후라면 전체 초기화
    if (justCalculated) {
        clearAll();
        return;
    }
    // 규칙 2. 마지막 글자 하나만 제거
    expression = expression.slice(0, -1);

    updateDisplay();
};

// ── 도전 1: % 연산 (선택 과제) ──────────────────────────────
/**
 * 현재 입력된 마지막 숫자를 100으로 나눕니다.
 * 연산자로 끝나거나 expression이 비어 있으면 무시합니다.
 *
 * 예) "50"    → % 클릭 → "0.5"
 *     "100+50" → % 클릭 → "100+0.5"
 *     연산자 뒤에는 동작하지 않습니다.
 *
 * 힌트: expression.lastIndexOf("+") 등으로 마지막 연산자 위치를 찾고
 *       그 뒤의 숫자 부분만 parseFloat(numStr) / 100 으로 교체합니다.
 */
export const appendPercent = () => {
    // 💡 [도전 1] 여기에 코드를 작성하세요.

// ── 도전 3: 기록 클릭 시 결과 불러오기 (선택 과제) ──────────
 // 수식이 비어 있으면 무시
    if (expression === "") {
        return;
    }
    // 마지막 문자가 연산자이면 무시
    const last = expression[expression.length - 1];

    if (["+", "-", "*", "/"].includes(last)) {
        return;
    }
    // 마지막 연산자 위치 찾기
    const operatorIndex = Math.max(
        expression.lastIndexOf("+"),
        expression.lastIndexOf("-"),
        expression.lastIndexOf("*"),
        expression.lastIndexOf("/")
    );
    // 앞부분과 마지막 숫자 분리
    const prefix = expression.slice(0, operatorIndex + 1);
    const numStr = expression.slice(operatorIndex + 1);

    // 마지막 숫자를 100으로 나누어 수식에 반영
    expression = prefix + (parseFloat(numStr) / 100).toString();

    justCalculated = false;
    updateDisplay();
    }; // appendPercent 함수를 여기서 닫기

export const setExpression = (value) => {
    // ── 도전 3: 기록 클릭 시 결과 불러오기 (선택 과제) ──────────
};

// ── 전체 초기화 (완성 코드 — 수정 금지) ─────────────────────
export const clearAll = () => {
    expression     = "";
    justCalculated = false;
    mainDisplay.textContent    = "0";
    mainDisplay.style.fontSize = "2.6rem";
    subDisplay.textContent     = "";
    document.querySelectorAll(".btn-op").forEach(b => b.classList.remove("active"));
};
