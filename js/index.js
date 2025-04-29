import { generateGame } from './generateGame.js';

const buttonGenerate = document.getElementById('genetare-button');


buttonGenerate.addEventListener('click', () => {

    const inputNumber = document.querySelector('input[type="number"]');
    const numberOfCards = inputNumber.value;

    generateGame(numberOfCards);
    
});