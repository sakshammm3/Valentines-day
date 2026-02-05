const lines = [
  "Hey love…\nThis isn’t a website.\nIt’s just me… talking to you.",
  "You have this quiet way of making things feel okay.\nEven on days when nothing is.",
  "With you, I don’t have to be strong all the time.\nI can just… be.",
  "Loving you wasn’t an accident.\nIt was a choice I’d make again.",
  "I promise patience.\nI promise honesty.\nI promise choosing you—every single day.",
  "I choose you.\nHappy Valentine’s Day ❤️"
];

let index = 0;
let finalReveal = false;

const text = document.getElementById("text");
const hint = document.getElementById("hint");

function nextLine() {
  text.style.opacity = 0;

  setTimeout(() => {
    if (index < lines.length) {
      text.innerText = lines[index];
      text.style.opacity = 1;
      index++;
    } 
    else if (!finalReveal) {
      text.classList.add("final");
      text.innerText = "I love you.\n(Always.) ❤️";
      text.style.opacity = 1;
      hint.innerText = "";
      finalReveal = true;
    }
  }, 600);
}
