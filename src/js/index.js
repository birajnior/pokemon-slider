const btnNext = document.getElementById('btn-next');
const btnComeBack = document.getElementById('btn-come-back');
const cards = document.querySelectorAll('.card');
let cardCurrent = 0;

function hideCardSelected() {
    const cardSelected = document.querySelector('.selected');
    cardSelected.classList.remove('selected');
}

function showCard(indexCard) {
    cards[indexCard].classList.add('selected');
}

btnNext.addEventListener('click', function (){

    if (cardCurrent === cards.length -1) {
        return;
    }
 
    cardCurrent++;
    showCard(cardCurrent);

    hideCardSelected();
  
});

btnComeBack.addEventListener('click', function (){
    if (cardCurrent === 0) {
        return;
    }

    hideCardSelected();
        
    cardCurrent--;
    showCard(cardCurrent);
           
});