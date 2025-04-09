"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // SElecting Elements;
  const result = document.querySelector("#result");
  const againBtn = document.querySelector("#againBtn");
  const input = document.querySelector("#input");
  const checkBtn = document.querySelector("#checkBtn");
  const highSocer = document.querySelector("#highSocer");

  // SecretNumber;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;

  // create two extra variables;
  let score = 20;
  let highMark = 0;

  //displayGuiedText
  const dispalyMessage = function (msg) {
    document.querySelector("#guidText").textContent = msg;
  };
  // display BackgroundColor;
  const dispalyBg = function (bg) {
    document.body.style.backgroundColor = bg;
  };

  // Add EventListener;
  checkBtn.addEventListener("click", () => {
    const inputValue = Number(input.value);

    //Conditions;
    if (!inputValue) {
      dispalyMessage("⛔ No Number");
    } else if (inputValue === secretNumber) {
      dispalyBg("#60b347");
      result.textContent = secretNumber;
      dispalyMessage("🎉👏  Correct Number!");
      checkBtn.classList.add("disabledBtn");

      if (score > highMark) {
        highMark = score;
        highSocer.innerHTML = highMark;
      }
    }

    if (inputValue !== secretNumber && inputValue) {
      dispalyMessage(
        inputValue > secretNumber ? "📈 Too High!" : "📉 Too Low!"
      );

      if (score > 1) {
        score--;
        document.querySelector("#score").innerHTML = score;
      } else {
        dispalyBg("rgb(239, 68, 68)");
        result.textContent = secretNumber;
        checkBtn.classList.add("disabledBtn");
        dispalyMessage("💥You lost the game!");
      }
    }
  });

  //  AganinBtn;
  againBtn.addEventListener("click", () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    dispalyMessage("🌟 Start guessing");
    dispalyBg("oklch(48.8% 0.243 264.376)");
    checkBtn.classList.remove("disabledBtn");
    result.textContent = "?";
    input.value = "";
    score = 20;
    document.querySelector("#score").innerHTML = score;
  });
});
