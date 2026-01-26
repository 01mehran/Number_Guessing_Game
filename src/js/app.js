"use strict";

// utils;
import { dispalyMessage } from "./utils.js";
import { dispalyBg } from "./utils.js";

import { resetGame } from "./resetGame.js";

document.addEventListener("DOMContentLoaded", () => {
  // Select Elements;
  const result = document.querySelector("#result");
  const againBtn = document.querySelector("#againBtn");
  const input = document.querySelector("#input");
  const checkBtn = document.querySelector("#checkBtn");
  const highSocer = document.querySelector("#highSocer");
  const heading = document.querySelector("#heading");

  // SecretNumber;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;

  let score = 20;
  let highMark = 0;

  checkBtn.addEventListener("click", () => {
    const inputValue = Number(input.value);

    // Conditions;
    if (!inputValue) {
      dispalyMessage("⛔ No Number");
    } else if (inputValue === secretNumber) {
      dispalyBg("#60b347");
      result.textContent = secretNumber;
      dispalyMessage("🎉👏  Correct Number!");
      checkBtn.classList.add("disabledBtn");
      heading.textContent = "You got it 👍";

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
        heading.textContent = "Oops 😦, Try Again";
      }
    }

    input.value = "";
  });

  resetGame({
    againBtn,
    checkBtn,
    result,
    input,
    score,
    heading,
    setScore: (val) => (score = val),
    setSecretNumber: (val) => (secretNumber = val),
  });
});
