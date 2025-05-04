const ButtonGenerate = document.getElementById("generate-button");
const ScreenMain = document.getElementById("Screen");

ButtonGenerate.addEventListener("click", () => {
    const NumberOfCards = document.getElementById("input-number").value;
    const numberOfCardsConverted = parseInt(NumberOfCards, 10);
    if (!isNaN(numberOfCardsConverted)) {
        if (numberOfCardsConverted % 2 === 0) {
            alert("Generating cards...");
        } else {
            alert("Please enter an even number.");
            return;
        }
    } else {
        alert("Please enter a valid number.");
        return
    }
})