// function main() {
//     createBoard();
//   }
  
// //   function takeIn(board, Gboard) {
// //     const prompt = require('prompt-sync')();
// //     var move = prompt("Enter move (u, d, l, r) or 'q' to quit: ");
// //     move = move.toUpperCase();
// //     switch (move) {
// //       case 'Q':
// //         console.log('The Game is quit. We hope to see you again!');
// //         break;
// //       case 'U':
// //       case 'D':
// //       case 'L':
// //       case 'R':
// //         performMove(board, move);
// //         break;
// //       default:
// //         console.log("Invalid Selection!!!! Select again");
// //         takeIn(board, Gboard);
// //     }
// //   }
  
//   function createBoard() {
//     var size = 3;
//     let board = [];
//     let Gboard = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
//     var index = 0;
//     for (let row = 0; row < size; row++) {
//       board[row] = [];
//       for (let i = 0; i < size; i++) {
//         board[row].push(index++);
//       }
//     }
//     Shuffle(board);
//     printBoard(board, Gboard);
//     console.log(findHeuristic(board, Gboard));
//     aStar(board,Gboard)
//     //takeIn(board, Gboard);
//   }
  
//   function Shuffle(ar) {
//     for (var k = 0; k < ar.length; k++) {
//       var i = ar[k].length;
//       if (i == 0)
//         return false;
//       else {
//         while (--i) {
//           var j = Math.floor(Math.random() * (i + 1));
//           var tempi = ar[k][i];
//           var tempj = ar[k][j];
//           ar[k][i] = tempj;
//           ar[k][j] = tempi;
//         }
//       }
//     }
//     return ar;
//   }
  
//   function isPuzzleSolved(board) {
//     const goalBoard = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
//     for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < goalBoard.length; j++) {
//         if (board[i][j] !== goalBoard[i][j]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
  
//   function position(arr, targetValue) {
//     for (let row = 0; row < 3; row++) {
//       for (let col = 0; col < 3; col++) {
//         if (arr[row][col] === targetValue) {
//           return { row: row, col: col };
//         }
//       }
//     }
//     return null;
//   }
  
//   function Rswap(array, rindex1, rindex2, cindex) {
//     const temp = array[rindex1][cindex];
//     array[rindex1][cindex] = array[rindex2][cindex];
//     array[rindex2][cindex] = temp;
//   }
  
//   function Cswap(array, cindex1, cindex2, rindex) {
//     const temp = array[rindex][cindex1];
//     array[rindex][cindex1] = array[rindex][cindex2];
//     array[rindex][cindex2] = temp;
//   }
  
//   function printBoard(board, Gboard) {
//     console.log("Problem Board: ");
//     for (let row = 0; row < 3; row++) {
//       console.log(board[row].join(" "));
//     }
//     console.log("Goal Board: ");
//     for (let row = 0; row < 3; row++) {
//       console.log(Gboard[row].join(" "));
//     }
//   }
  
//   function performMove(board, move) {
//     var pos = position(board, 0);
//     if (isValid(board, move, pos)) {
//       if (move == 'U') {
//         Rswap(board, pos.row - 1, pos.row, pos.col);
//       } else if (move == 'D') {
//         Rswap(board, pos.row + 1, pos.row, pos.col);
//       } else if (move == 'L') {
//         Cswap(board, pos.col - 1, pos.col, pos.row);
//       } else if (move == 'R') {
//         Cswap(board, pos.col + 1, pos.col, pos.row);
//       }
  
//       printBoard(board);
//     }
//     //   if (isPuzzleSolved(board)) {
//     //     console.log("You win the game");
//     //     return;
//     //   }
  
//     //   //takeIn(board);
     
//     //else {
//     //   console.log("It is not a valid move");
//     //   //takeIn(board);
//     // }
//   }
  
//   function isValid(board, move, pos) {
//     var valid = false;
//     if (move == 'U' && pos.row > 0) {
//       valid = true;
//     } else if (move == 'D' && pos.row < board.length - 1) {
//       valid = true;
//     } else if (move == 'L' && pos.col > 0) {
//       valid = true;
//     } else if (move == 'R' && pos.col < board.length - 1) {
//       valid = true;
//     } else {
//       valid = false;
//     }
//     return valid;
//   }
  
//   function findHeuristic(board, Gboard) {
//     var heuristic = 0;
//     for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < board[i].length; j++) {
//         var posInBoard = position(board, board[i][j]);
//         var posInGoal = position(Gboard, board[i][j]);
//         if (posInBoard != null && posInGoal != null) {
//           heuristic += Math.abs(posInGoal.row - posInBoard.row) + Math.abs(posInGoal.col - posInBoard.col);
//         }
//       }
//     }
//     return heuristic;
  
//   }

//   function generateSuccessors(board) {
//     const successors = [];
//     const pos = position(board, 0);
  
//     const moves = [
//       { move: 'U' },
//       { move: 'D' },
//       { move: 'L' },
//       { move: 'R' },
//     ];
  
//     for (const move of moves) {
//         if (isValid(board, move.move, pos)) {
//             if (move == 'U') {
//                 Rswap(board, pos.row - 1, pos.row, pos.col);
//             } 
//             else if (move == 'D') {
//                 Rswap(board, pos.row + 1, pos.row, pos.col);
//             } 
//             else if (move == 'L') {
//                 Cswap(board, pos.col - 1, pos.col, pos.row);
//             } 
//             else if (move == 'R') {
//                 Cswap(board, pos.col + 1, pos.col, pos.row);
//             }
//        }
//     }
//     return successors;
// }

//     function findLowestFScore(openSet) {
//         let lowestIndex = 0;
//         for (let i = 1; i < openSet.length; i++) {
//             var sum = openSet[i].g + openSet[i].h;
//             var lowest =  openSet[lowestIndex].g + openSet[lowestIndex].h;
//           if (sum < lowest) {
//                 lowestIndex = i;
//           }
//         }
//         return lowestIndex;
      
//     }
  

// //   x
//   main();
function find(puz, x) {
    for (let i = 0; i < puz.length; i++) {
        for (let j = 0; j < puz[0].length; j++) {
            if (puz[i][j] === x) {
                return [i, j];
            }
        }
    }
}

function shuffle(puz, x1, y1, x2, y2) {
    if (x2 >= 0 && x2 < puz.length && y2 >= 0 && y2 < puz[0].length) {
        const tempPuz = copy(puz);
        const temp = tempPuz[x2][y2];
        tempPuz[x2][y2] = tempPuz[x1][y1];
        tempPuz[x1][y1] = temp;
        return tempPuz;
    } else {
        return null;
    }
}

function copy(root) {
    const temp = [];
    for (const i of root) {
        const t = i.slice();
        temp.push(t);
    }
    return temp;
}

function generateChild(data, level) {
    const [x, y] = find(data, '_');
    const valList = [
        [x, y - 1],
        [x, y + 1],
        [x - 1, y],
        [x + 1, y]
    ];
    const children = [];
    for (const [i, j] of valList) {
        const child = shuffle(data, x, y, i, j);
        if (child !== null) {
            const childNode = {
                data: child,
                level: level + 1,
                fval: 0
            };
            children.push(childNode);
        }
    }
    return children;
}
function h(start, goal) {
    let temp = 0;
    for (let i = 0; i < start.length; i++) {
        for (let j = 0; j < start[0].length; j++) {
            if (start[i][j] !== goal[i][j] && start[i][j] !== '_') {
                temp += 1;
            }
        }
    }
    return temp;
}

function f(start, goal, level) {
    return h(start, goal) + level;
}

function accept(size) {
    const prompt = require("prompt-sync")();
    const puz = [];
    for (let i = 0; i < size; i++) {
        const temp = prompt("Enter row " + (i + 1) + " separated by spaces:").split(" ");
        puz.push(temp);
    }
    return puz;
}

function process(size) {
    const open = [];
    const closed = [];

    console.log("Enter the start state matrix: ");
    const start = accept(size);

    console.log("Enter the goal state matrix: ");
    const goal = accept(size);

    const startNode = {
        data: start,
        level: 0,
        fval: 0
    };

    startNode.fval = f(start, goal, 0);
    open.push(startNode);

    while (true) {
        const cur = open[0];
        console.log("  | ");
        console.log("  V ");
        for (const row of cur.data) {
            console.log(row.join(" "));
        }

        if (h(cur.data, goal) === 0) {
            break;
        }

        for (const child of generateChild(cur.data, cur.level)) {
            child.fval = f(child.data, goal, child.level);
            open.push(child);
        }

        closed.push(cur);
        open.splice(0, 1);

        open.sort((a, b) => a.fval - b.fval);
    }
}

const puzzleSize = 3;
process(puzzleSize);
