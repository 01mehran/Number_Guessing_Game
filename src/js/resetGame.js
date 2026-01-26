// utils;
import { dispalyBg, dispalyMessage } from "./utils.js";

export function resetGame({
  againBtn,
  setSecretNumber,
  checkBtn,
  result,
  input,
  heading,
  setScore,
}) {
  againBtn.addEventListener("click", () => {
    setSecretNumber(Math.trunc(Math.random() * 20) + 1);

    dispalyMessage("🌟 Start guessing");
    dispalyBg("oklch(48.8% 0.243 264.376)");

    checkBtn.classList.remove("disabledBtn");
    result.textContent = "❓";
    input.value = "";
    setScore(20);
    heading.textContent = "Guess Hide number!";
    document.querySelector("#score").innerHTML = 20;
  });
}
