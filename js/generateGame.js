
export const generateGame = (numberOfCards) => {
   const inputParameters = document.querySelector('.input-parameters');
   const containerMain = document.querySelector('.container-main');

   if (numberOfCards > 0) {
        inputParameters.style.display = 'none';
        for (let i = 0; i < numberOfCards; i++) {
            const card = document.createElement('div');
            card.textContent = `Card ${i + 1}`;
            card.classList.add('card');
            containerMain.appendChild(card);
        }
   }else {
        alert('Please, insert a number greater than 0');
   }
   
};

