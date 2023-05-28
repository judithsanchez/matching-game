const gameList = [];
let newGame;

async function getMatchingGameData(url) {
  const response = await fetch(url);
  const data = await response.json();
  for (let i = 0; i < data.length; i += 1) {
    gameList.push(data[i]);
  }
}

let firstCard = null;
let secondCard = null;
let firstCardClicked = null;
let secondCardClicked = null;

function startGame() {
  newGame = new MatchingGame(gameList);

  const container = document.querySelector('#gameBoard');

  newGame.board.forEach((card, index) => {
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'cards');
    cardDiv.setAttribute('id', `card${index}`);
    cardDiv.setAttribute('onclick', `handleCardClick(${index})`);
    container.appendChild(cardDiv);
  });
}

function resetCard(card) {
  card.style.backgroundImage = '';
}

function disableCard(card) {
  card.style.cursor = 'auto';
  card.onclick = null;
}

function resetCards() {
  setTimeout(() => {
    firstCard = null;
    secondCard = null;
    firstCardClicked = null;
    secondCardClicked = null;
  }, 1600);
}

function handleCardClick(id) {
  const cardClicked = document.querySelector(`#card${id}`);

  if (firstCard === null && secondCard === null) {
    firstCard = id;
    firstCardClicked = cardClicked;
    firstCardClicked.style.backgroundImage = `url(${newGame.board[firstCard].url})`;
    return;
  }

  if (firstCard !== null && secondCard === null && firstCard !== id) {
    secondCard = id;
    secondCardClicked = cardClicked;
    secondCardClicked.style.backgroundImage = `url(${newGame.board[secondCard].url})`;

    if (
      !newGame.checkMatch(newGame.board[firstCard], newGame.board[secondCard])
    ) {
      setTimeout(() => {
        resetCard(firstCardClicked);
        resetCard(secondCardClicked);
      }, 1500);
    } else {
      disableCard(firstCardClicked);
      disableCard(secondCardClicked);
    }
  }

  resetCards();
}
