import GenerateCards from "./Generate-Cards.js";

function GenerateGame(a) {
    document.getElementById("Screen-Lobby").style.display = "none";
    document.getElementById("Screen-Game").style.display  = "flex";
    document.getElementById("win-message").style.display = "none";

    const container = document.getElementById("container-game-cards");
    container.innerHTML = "";
    const cards = GenerateCards(a);
    const openCards = [];

    cards.forEach(function(value) {
        const btn = document.createElement("button");
        btn.className = "carta";
        btn.innerHTML = `<span class="card-value">${value}</span>`;
        btn.value = value;
        btn.onclick = function() {
            if (openCards.length === 2 || btn.classList.contains("revelada")) {
              return;
            }
            btn.classList.add("revelada");
            btn.textContent = value;
            openCards.push(btn);
            if (openCards.length === 2) {
                setTimeout(function() {
                    const [c1, c2] = openCards;
                    if (c1.value === c2.value) {
                        c1.classList.add("correcta");
                        c2.classList.add("correcta");
                        checkWin()
                    } else {
                        openCards.forEach(function(x) {
                            x.classList.remove("revelada");
                            x.textContent = "";
                        });
                    }
                    openCards.length = 0;
                }, 800);
            }
        };
        container.appendChild(btn);
    });
}
function checkWin() {
  const totalCards = document.querySelectorAll(".carta");
  const matchedCards = document.querySelectorAll(".carta.correcta");
  if (matchedCards.length === totalCards.length) {
    const winMessage = document.getElementById("win-message");
    const playAgainBtn = document.getElementById("play-again-button");
    setTimeout(() => {
      winMessage.style.display = "block";
      playAgainBtn.onclick = function () {
        document.getElementById("Screen-Game").style.display = "none";
        document.getElementById("Screen-Lobby").style.display = "flex";
        winMessage.style.display = "none";
      };
    }, 300);
  }
}


export default GenerateGame;