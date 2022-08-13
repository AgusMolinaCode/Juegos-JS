const cardArray = [
    {
        name: "fries",
        img: 'images/fries.png',
    },
    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png',
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png',
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png',
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png',
    },
    {
        name: "pizza",
        img: 'images/pizza.png',
    },
    {
        name: "fries",
        img: 'images/fries.png',
    },
    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png',
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png',
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png',
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png',
    },
    {
        name: "pizza",
        img: 'images/pizza.png',
    },
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChisenIds = [];
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChisenIds[0];
    const optionTwoId = cardsChisenIds[1];

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('apretaste la misma imagen')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('acertado!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('intenta de vuelta ma...')

    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = [];
    cardsChisenIds = [];

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = `Ganasta mami! encontraste a todos!`
    }

}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChisenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(() => {
            checkMatch();
        }, 500);
    }

}