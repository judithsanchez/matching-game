const catData = [];
let newGame;

async function getCatData() {
  const response = await fetch(
    'https://api.thecatapi.com/v1/images/search?limit=10&mime_types=gif'
  );
  const data = await response.json();
  for (let i = 0; i < data.length; i += 1) {
    catData.push(data[i]);
  }
}

let firstCardData;
let firstCardId;
let secondCardData;
let secondCardId;

function startGame() {
  newGame = new MatchingGame(catData);

  const container = document.querySelector('#gameBoard');

  newGame.gameBoard.forEach((card) => {
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'cards');
    cardDiv.setAttribute('id', card.dataindex);
    cardDiv.setAttribute(
      'onclick',
      `handleCardClick("${card.dataindex}", "${card.id}")`
    );
    cardDiv.setAttribute('dataindex', card.id);
    container.appendChild(cardDiv);
  });
}

function handleCardClick(dataindex, id) {
  if (firstCardData === undefined && firstCardId === undefined) {
    firstCardData = dataindex;
    firstCardId = id;
    newGame.getCardId(firstCardId);
    const firstCard = document.getElementById(dataindex);
    firstCard.style.backgroundImage = `url(${
      newGame.gameBoard.find((card) => card.id === firstCardId).url
    })`;
    return;
  }

  secondCardData = dataindex;
  secondCardId = id;
  newGame.getCardId(secondCardId);
  const secondCard = document.getElementById(dataindex);
  secondCard.style.backgroundImage = `url(${
    newGame.gameBoard.find((card) => card.id === secondCardId).url
  })`;

  if (newGame.checkMatch(newGame.firstCard, newGame.secondCard)) {
    const cards = document.querySelectorAll(
      `[dataindex="${newGame.foundElements[newGame.foundElements.length - 1]}"]`
    );

    cards.forEach((card) => {
      card.style.cursor = 'auto';
      card.removeAttribute('onclick');
    });

    firstCardData = undefined;
    firstCardId = undefined;
    secondCardData = undefined;
    secondCardId = undefined;
  } else {
    const gameBoard = document.querySelector('#gameBoard');
    gameBoard.classList.add('no-click');

    setTimeout(() => {
      const firstCard = document.getElementById(firstCardData);
      const secondCard = document.getElementById(secondCardData);

      if (firstCard.style.backgroundImage && secondCard.style.backgroundImage) {
        firstCard.style.backgroundImage = '';
        secondCard.style.backgroundImage = '';
      }

      firstCardData = undefined;
      firstCardId = undefined;
      secondCardData = undefined;
      secondCardId = undefined;

      gameBoard.classList.remove('no-click');
    }, 1500);
  }
}
