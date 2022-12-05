const TypingAnimation = (catTerminalTime = 3000, contentTime = 6000) => {
  const catTerminal = document.getElementById("cat-terminal");
  const catText = document.getElementById("cat-text");
  const content = document.getElementById("content");
  setTimeout(() => {
    catTerminal.classList.add("show");
    catText.classList.add("typing");
  }, catTerminalTime);
  setTimeout(() => {
    content.classList.add("show");
  }, contentTime);
};

export default TypingAnimation;
