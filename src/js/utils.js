//displayGuiedText
export const dispalyMessage = function (msg) {
  document.querySelector("#guidText").textContent = msg;
};

// Set body Background Color;
export const dispalyBg = function (bg) {
  document.body.style.backgroundColor = bg;
};
