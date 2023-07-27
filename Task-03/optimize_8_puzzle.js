function main() {
    const board = createBoard();
    takeIn(board);
  }
  
  function createBoard() {
    const size = 3;
    const board = [];
    let index = 0;
    for (let row = 0; row < size; row++) {
      board[row] = [];
      for (let i = 0; i < size; i++) {
        board[row].push(index++);
      }
    }
    Shuffle(board);
    printBoard(board);
    return board;
  }
  
  function takeIn(board) {
    const prompt = require('prompt-sync')();
    while (true) {
      const move = prompt("Enter move (u, d, l, r) or 'q' to quit:").toUpperCase();
      if (move === 'Q') {
        console.log('The Game is quit. We hope to see you again!');
        break;
      } else if (['U', 'D', 'L', 'R'].includes(move)) {
        performMove(board, move);
        if (isPuzzleSolved(board)) {
          console.log("You win the game!");
          break;
        }
      } else {
        console.log("Invalid Selection!!!! Select again");
      }
    }
  }
  
  function Shuffle(ar) {
    for (var k = 0; k < ar.length; k++) {
      var i = ar[k].length;
      if (i == 0)
        return false;
      else {
        while (--i) {
          var j = Math.floor(Math.random() * (i + 1));
          var tempi = ar[k][i];
          var tempj = ar[k][j];
          ar[k][i] = tempj;
          ar[k][j] = tempi;
        }
      }
    }
    return ar;
  }
  
  function isPuzzleSolved(board) {
    const goalState = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    for (let i = 0; i < board.length; i++) {
      if (board[i].toString() !== goalState[i].toString()) {
        return false;
      }
    }
    return true;
  }
  
  function position(arr, targetValue) {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (arr[row][col] === targetValue) {
          return { row: row, col: col };
        }
      }
    }
    return null;
  }
  
  function Rswap(array, rindex1, rindex2, cindex) {
    [array[rindex1][cindex], array[rindex2][cindex]] = [array[rindex2][cindex], array[rindex1][cindex]];
  }
  
  function Cswap(array, cindex1, cindex2, rindex) {
    [array[rindex][cindex1], array[rindex][cindex2]] = [array[rindex][cindex2], array[rindex][cindex1]];
  }
  
  function printBoard(arr) {
    for (let row = 0; row < 3; row++) {
      console.log(arr[row].join());
    }
  }
  
  main();