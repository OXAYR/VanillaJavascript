
function main(){
    createBoard();
    
}

function takeIn(board){
    const prompt = require('prompt-sync')();
    var move = prompt("Enter move (u, d, l, r) or 'q' to quit:");
    move = move.toUpperCase();
    switch(move){
        case 'Q':
            console.log('The Game is quit We hope to see U again');
            break;
        case  'U':
            performMove(board, move);
            break;
        
        case  'D':
            performMove(board, move);
            break;
            
        case  'L':
            performMove(board, move);
            break;
            
        case  'R':
            performMove(board, move);
            break
        default:
            console.log("Invalid Selection!!!! Select again");
            takeIn(board);

    }
}
function createBoard(){
    var size = 3;
    let board = [];
    var index = 0;
    for(let row=0 ; row < size ; row++){
        board[row] = [];
        for(let i=0 ; i<size; i++){
            board[row].push(index++);
        }
    }
    Shuffle(board);
    printBoard(board);
    takeIn(board);
    
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
    return ar
}
function isPuzzleSolved(board) {
    const goalState = [[1, 2, 3],[ 4, 5, 6],[ 7, 8, 0]];
      for (let i = 0; i < board.length; i++) {
        for(let j = 0 ; j<goalState.length; j++){
            if (board[i][j] != goalState[i][j]) {
                return false;   
            }
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

  function Rswap(array, rindex1, rindex2, cindex ) {
    const temp = array[rindex1][cindex];
    array[rindex1][cindex] = array[rindex2][cindex];
    array[rindex2][cindex]= temp;
  }

  function Cswap(array, cindex1, cindex2, rindex ) {
    const temp = array[rindex][cindex1];
    array[rindex][cindex1] = array[rindex][cindex2];
    array[rindex][cindex2]= temp;
  }

function printBoard(arr){
    for(let row=0 ; row< 3 ; row++){
        console.log(arr[row].join())
    }
}

// function storePreviousLocation(currentPos) {
//     return { row: currentPos.row, col: currentPos.col };
//   }
  
function performMove(board, move){
    var pos = position(board,0);
    // var prevPos = {row: -1,col:-1}
    // var currentPos = pos;
    if(isValid(board, move , pos)){

        if(move == 'U'){
            printBoard(board);
            Rswap(board,pos.row-1,pos.row,pos.col);
            
            // currentPos = position(board,0);
            // prevPos = storePreviousLocation(pos)

            // if (prevPos.row === currentPos.row && prevPos.col === currentPos.col) {
            //     console.log("!!! Warning! You are moving back to the previous position");
            //   }
            if(isPuzzleSolved(board)){
                console.log("You win the game")
                exit(0);
            }
            printBoard(board);
            takeIn(board);
        }
        else if(move == 'D'){
            Rswap(board,pos.row+1,pos.row,pos.col);
            
            // currentPos = position(board,0);
            // prevPos = storePreviousLocation(pos);
            
            // if (prevPos.row === currentPos.row && prevPos.col === currentPos.col) {
            //     console.log("!!! Warning! You are moving back to the previous position");
            //   }
            
            if(isPuzzleSolved(board)){
                console.log("You win the game")
                exit(0);
            }
            
            printBoard(board);
            takeIn(board);
        }
        else if(move == 'L'){
            Cswap(board,pos.col-1,pos.col,pos.row);
            // currentPos = position(board,0);
            // prevPos = storePreviousLocation(pos);
            
            // if (prevPos.row === currentPos.row && prevPos.col === currentPos.col) {
            //     console.log("!!! Warning! You are moving back to the previous position");
            //   }
            
            if(isPuzzleSolved(board)){
                console.log("You win the game")
                exit(0);
            }
            
            printBoard(board);
            takeIn(board);
        }
        else if(move == 'R'){
            Cswap(board,pos.col+1,pos.col,pos.row);
            // currentPos = position(board,0);
            // prevPos = storePreviousLocation(pos);
            
            // if (prevPos.row === currentPos.row && prevPos.col === currentPos.col) {
            //     console.log("!!! Warning! You are moving back to the previous position");
            //   }
            
            if(isPuzzleSolved(board)){
                console.log("You win the game")
                exit(0);
            }
            
            printBoard(board);
            takeIn(board);
        }
    }
    else{
        console.log("It is not a valid move")
        takeIn(board);
    }

}

function isValid(board, move , pos){
    var valid = false;
        if(move == 'U' && pos.row > 0){
            valid = true;
        }
        else if(move == 'D' && pos.row < board.length -1){
            valid = true;
        }
        else if(move == 'L' && pos.col > 0){
            valid = true;
        }
        else if(move == 'R' && pos.col < board.length-1){
            valid = true;
        }
        else{
            valid = false;
        }
    return valid;
    }
main();