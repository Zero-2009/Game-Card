function GenerateGame(a) {
  if (a % 2) { alert("Debe ser par"); return; }

  // mostrar/ocultar pantallas
  document.getElementById("Screen-Lobby").style.display = "none";
  document.getElementById("Screen-Game").style.display  = "block";

  const container = document.getElementById("container-game-cards");
  container.innerHTML = "";

  // crear y mezclar pares [1,1,2,2,…]
  const cards = [];
  for (let i = 1; i <= a/2; i++) cards.push(i, i);
  cards.sort(() => Math.random() - 0.5);

  const openCards = [];

  // generar botones
  cards.forEach(function(value) {
    const btn = document.createElement("button");
    btn.className   = "carta";
    btn.textContent = "";
    btn.value       = value;

    btn.onclick = function() {
      if (openCards.length === 2 || btn.classList.contains("revelada")) return;

      btn.classList.add("revelada");
      btn.textContent = value;
      openCards.push(btn);

      if (openCards.length === 2) {
        setTimeout(function() {
          const [c1, c2] = openCards;
          if (c1.value === c2.value) {
            c1.classList.add("correcta");
            c2.classList.add("correcta");
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

export default GenerateGame;
