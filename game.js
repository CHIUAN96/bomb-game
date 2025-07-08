let min = 1;
let max = 100;
let answer = Math.floor(Math.random() * (max - min + 1)) + min;
let history = [];
let guessCount = 0;

function guess() {
    const input = document.getElementById("guessInput");
    const num = parseInt(input.value);
    const result = document.getElementById("result");
    const historyBox = document.getElementById("history");

    if (isNaN(num) || num < min || num > max) {
        result.textContent = `請輸入 ${min} ~ ${max} 的整數！`;
        return;
    }

    guessCount++;
    history.push(num);
    historyBox.textContent = history.join(", ");

    if (num === answer) {
        result.textContent = `💥蹦!!! 你踩到炸彈了！答案是 ${answer}。你死了...（總共猜了 ${guessCount} 次）`;
        input.disabled = true;
        document.getElementById("dieSound").play();
    } else if (num < answer) {
        result.textContent = `炸彈數字 > ${num}`;
        min = num + 1;
        document.getElementById("min").textContent = min;
    } else {
        result.textContent = `炸彈數字 < ${num}`;
        max = num - 1;
        document.getElementById("max").textContent = max;
    }

    input.value = "";
}
