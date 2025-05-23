import GenerateGame from "./generate-game.js";
const ButtonGenerate = document.getElementById("generate-button");
ButtonGenerate.addEventListener("click", () => {
    const NumberOfCards = document.getElementById("input-number").value;
    const NumbCard = parseInt(NumberOfCards, 10);
    if (NumberOfCards === "") {
        alert("Please enter a number.");
        return;
    }
    if (isNaN(NumbCard)) {
        alert("Please enter a valid number.");
        return;
    }
    if (NumbCard < 4 ) {
        alert("Please enter a larger number")
        return;
    }
    if (NumbCard > 30 ) {
        alert("Please enter lower number")
        return;
    }
    if (!Number.isInteger(Number(NumbCard))) {
        alert("Please enter an integer number.");
        return;
    }
    if (NumbCard <= 0) {
        alert("Please enter a number greater than zero.");
        return;
    }
    if (NumbCard % 2 !== 0) {
        alert("Please enter an even number.");
        return;
    }
    GenerateGame(NumbCard);
})