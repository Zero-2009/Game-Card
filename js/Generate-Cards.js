function GenerateCards(count) {
    const cards = [];
    for (let i = 1; i <= count / 2; i++) {
        cards.push(i, i);
    }
    cards.sort(() => Math.random() - 0.5);
    return cards;
}
export default GenerateCards;