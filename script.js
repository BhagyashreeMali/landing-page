const text = [
  "Initializing Creative Core...",
  "Loading Anime Aesthetics...",
  "Activating Art & Imagination...",
  "System Ready ✨"
];

let i = 0, j = 0;
const typing = document.getElementById("typing");

function type() {
  if (j < text[i].length) {
    typing.innerHTML += text[i][j];
    j++;
    setTimeout(type, 60);
  } else {
    setTimeout(() => {
      typing.innerHTML = "";
      j = 0;
      i = (i + 1) % text.length;
      type();
    }, 1200);
  }
}

type();