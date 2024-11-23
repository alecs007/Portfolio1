const paragraph = document.getElementById("animatedText");
let isAnimating = false; // Flag to track animation state

// Split the text into characters and wrap each in a span, preserving spaces
paragraph.innerHTML = paragraph.textContent
  .split("")
  .map((letter) => {
    if (letter === " ") {
      return `<span class="space">&nbsp;</span>`; // Use a non-breaking space for spaces
    }
    return `<span class="letter">${letter}</span>`;
  })
  .join("");

const letters = document.querySelectorAll(".letter");

paragraph.addEventListener("mouseover", () => {
  if (isAnimating) return; // Exit if animation is already running

  isAnimating = true; // Set the flag to true when the animation starts

  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.classList.add("jumping");
      setTimeout(() => {
        letter.classList.remove("jumping");
        if (index === letters.length - 1) {
          isAnimating = false; // Reset the flag when the last letter finishes
        }
      }, 300); // Duration of the jump
    }, index * 100); // Delay between each letter's jump
  });
});
