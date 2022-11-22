const Types = { none: -1, tic: 0, tac: 1 };

const GameBoard = (() => {
  const boardSize = 9;
  const boardDiv = document.getElementById("board");
  let board = Array(boardSize);

  const reset = () => {
    for (i = 0; i < boardSize; i++) {
      board[i] = "";
    }
    console.log("Board now is: " + board);
  };
  const set = (position, type) => {
    board[position] = type;
    console.log("Board now is: " + board);
  };

  const render = () => {
    board.forEach((it) => {
      const itDiv = document.createElement("div");
      itDiv.classList.add("square");
      itDiv.textContent = it;
      boardDiv.appendChild(itDiv);
    });
  };

  return { reset, set, render };
})();

const Player = (type) => {
  const typeAssigned = type;
  const getType = () => {
    return typeAssigned;
  };

  return { getType };
};

const GameController = (() => {
  const playerA = Player(Types.tic);
  const playerB = Player(Types.tac);

  const initGame = () => {
    //Set up game board
    GameBoard.reset();
    GameBoard.render();
    //Set up players

    //Finished
    console.log("Game ready to play!");
  };
  const gameLoop = () => {};
  const restart = () => {
    initGame();
  };
  const changeTurn = () => {};
  const checkWinner = () => {};

  return { initGame, gameLoop, restart };
})();

GameController.initGame();
GameController.gameLoop();
