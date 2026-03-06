const boardElements = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const currentPlayerDisplay = document.getElementById('current-player');
const restartBtn = document.getElementById('reset-btn');
const modal = document.getElementById('result-modal');
const resultMessage = document.getElementById('result-message');
const playAgainBtn = document.getElementById('play-again-btn');

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    boardElements.forEach(cell => cell.addEventListener('click', cellClicked));
    restartBtn.addEventListener('click', restartGame);
    playAgainBtn.addEventListener('click', restartGame);
    updateStatusDisplay();
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute('data-index');

    if (options[cellIndex] !== "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());
}

function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    updateStatusDisplay();
}

function updateStatusDisplay() {
    currentPlayerDisplay.textContent = currentPlayer;
    currentPlayerDisplay.className = currentPlayer === "X" ? "player-x" : "player-o";
}

function checkWinner() {
    let roundWon = false;
    let winningCells = [];

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }

        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            winningCells = condition;
            break;
        }
    }

    if (roundWon) {
        statusText.innerHTML = `Player <span class="player-${currentPlayer.toLowerCase()}">${currentPlayer}</span> Wins!`;
        highlightWinningCells(winningCells);
        showModal(`Player <span class="player-${currentPlayer.toLowerCase()}">${currentPlayer}</span> Wins!`);
        running = false;
    } else if (!options.includes("")) {
        statusText.textContent = `Draw!`;
        showModal(`It's a Draw!`);
        running = false;
    } else {
        changePlayer();
    }
}

function highlightWinningCells(cells) {
    cells.forEach(index => {
        boardElements[index].classList.add('win-cell');
    });
}

function showModal(message) {
    setTimeout(() => {
        resultMessage.innerHTML = message;
        modal.classList.add('active');
    }, 500);
}

function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];

    // Instead of replacing innerHTML, just update text and classes of the existing elements
    statusText.innerHTML = `Player <span id="current-player" class="player-x">X</span>'s turn`;

    // Re-select the player display span after recreating it
    const newPlayerDisplay = document.getElementById('current-player');

    boardElements.forEach(cell => {
        cell.textContent = "";
        cell.className = "cell";
    });

    modal.classList.remove('active');
    running = true;
}

// Update the updateStatusDisplay function to correctly locate current-player
function updateStatusDisplay() {
    const currentDisplay = document.getElementById('current-player');
    if (currentDisplay) {
        currentDisplay.textContent = currentPlayer;
        currentDisplay.className = currentPlayer === "X" ? "player-x" : "player-o";
    }
}
