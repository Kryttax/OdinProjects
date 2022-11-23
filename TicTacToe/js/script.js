const statusModal = document.getElementById("status-container");
const statusTxt = document.getElementById("status-text");

const restartBtn = document.getElementById("restartBtn");
restartBtn.addEventListener("click", () => GameController.restart());

const againBtn = document.getElementById("againBtn");
againBtn.addEventListener("click", () => {
  GameController.restart();
  statusModal.style.display = "none";
});

const Types = { none: "", tic: "X", tac: "O" };

const GameBoard = (() => {
  const boardSize = 9;
  const boardDiv = document.getElementById("board");
  let board = Array(boardSize);

  const reset = () => {
    for (i = 0; i < boardSize; i++) {
      board[i] = Types.none;
    }
    console.log("Board now is: " + board);
  };
  const set = (position, type) => {
    board[position] = type;
    console.log("Board now is: " + board);
  };

  const get = (position) => {
    return board[position];
  };

  const isBoardFull = () => {
    for (i = 0; i < board.length; i++)
      if (board[i] === Types.none) return false;

    return true;
  };

  const render = () => {
    const squares = document.querySelectorAll(".row");
    squares.forEach((item) => boardDiv.removeChild(item));

    for (i = 0; i < 3; i++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      for (j = 0; j < 3; j++) {
        const index = i * 3 + j;
        const itDiv = document.createElement("div");
        itDiv.classList.add("square");
        itDiv.textContent = board[index];
        itDiv.addEventListener("click", () => GameController.playMarker(index));
        rowDiv.appendChild(itDiv);
      }
      boardDiv.appendChild(rowDiv);
    }
  };

  return { reset, set, get, render, isBoardFull };
})();

const Player = (type) => {
  let name = null;
  const typeAssigned = type;
  const getType = () => {
    return typeAssigned;
  };

  const setName = (newName) => {
    name = newName;
  };

  return { getType, setName };
};

const GameController = (() => {
  const Status = { playing: -1, tie: 0, winA: 1, winB: 2 };
  const playerA = Player(Types.tic);
  const playerB = Player(Types.tac);
  let currentPlayer = null;
  let currentStatus = null;

  const createGame = () => {
    currentPlayer = null;
    currentStatus = null;
    //Set up game board
    GameBoard.reset();
    GameBoard.render();
    //Finished
  };
  const initGame = () => {
    currentPlayer = playerA;
    currentStatus = Status.playing;
  };
  const restart = () => {
    createGame();
    initGame();
  };

  const playMarker = (position) => {
    if (currentStatus === Status.playing) {
      if (GameBoard.get(position) === Types.none) {
        GameBoard.set(position, currentPlayer.getType());
        GameBoard.render();

        if (!isGameOver()) changeTurn();
        else statusModal.style.display = "flex";
      }
    }
  };

  const changeTurn = () => {
    currentPlayer = currentPlayer === playerA ? playerB : playerA;
  };

  const isGameOver = () => {
    // LEFT TO RIGHT
    for (j = 0; j < 9; j += 3) {
      const index = j;
      if (
        GameBoard.get(index) !== Types.none &&
        GameBoard.get(index) === GameBoard.get(index + 1) &&
        GameBoard.get(index) === GameBoard.get(index + 2)
      ) {
        console.log("WIN L-R, WINNER: " + currentPlayer.getType());
        statusTxt.textContent = "Winner: " + currentPlayer.getType();
        currentStatus = currentPlayer === playerA ? Status.winA : Status.winB;
        return true;
      }
    }

    // UP TO DOWN
    for (j = 0; j < 3; j++) {
      const index = j;

      if (
        GameBoard.get(index) !== Types.none &&
        GameBoard.get(index) === GameBoard.get(index + 3) &&
        GameBoard.get(index) === GameBoard.get(index + 6)
      ) {
        console.log("WIN U-D, WINNER: " + currentPlayer.getType());
        statusTxt.textContent = "Winner: " + currentPlayer.getType();
        currentStatus = currentPlayer === playerA ? Status.winA : Status.winB;
        return true;
      }
    }

    // DIAGONAL
    for (j = 0; j < 3; j += 2) {
      const index = j;
      if (
        GameBoard.get(index) !== Types.none &&
        GameBoard.get(index) === GameBoard.get(4) &&
        GameBoard.get(index) === GameBoard.get(8 - index)
      ) {
        console.log("WIN DIAGONAL, WINNER: " + currentPlayer.getType());
        statusTxt.textContent = "Winner: " + currentPlayer.getType();
        currentStatus = currentPlayer === playerA ? Status.winA : Status.winB;
        return true;
      }
    }

    if (GameBoard.isBoardFull()) {
      console.log("BOARD FULL. IT'S A TIE!");
      statusTxt.textContent = "It's a Tie!";
      currentStatus = Status.tie;
      return true;
    }

    return false;
  };

  return { createGame, initGame, playMarker, restart };
})();

GameController.createGame();
GameController.initGame();
