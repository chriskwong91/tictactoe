'use strict'
// This is a Tic Tac Toe game that runs in the command line
const readline = require('readline');
var prompt = require('prompt-sync')();

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log('Thank you for your valuable feedback:', answer);

//   rl.close();
// });


class Player {
  constructor(name) {
    this.name = name;
  }

  getMove() {
    // rl.resume(this.name +', what is your move? [x,x]', (answer) => {
    //   rl.pause();
    //   return answer;
    // });
    var move = prompt(this.name + ', what is your move? x,x').split(',');

    return [parseInt(move[0]), parseInt(move[1])];
  }
}

class Board {
  constructor() {
    this.grid = [[null, null, null], [null, null, null], [null, null, null]];
  }

  findWinner() {

  }

  gameOver() {
    return false;
  }

  checkRows(piece) {

  }

  checkColumns(piece) {

  }

  checkDiagonals(piece){

  }

  placePiece(piece, pos) {
    this.grid[pos[0]][pos[1]] = piece;
    this.displayBoard();
  }

  displayBoard() {
    console.log(` ${this.grid[0][0]}  |  ${this.grid[0][1]}  |  ${this.grid[0][2]} \n ____|____|____\n ${this.grid[1][0]}  |  ${this.grid[1][1]}  |  ${this.grid[1][2]} \n ____|____|____\n ${this.grid[2][0]}  |  ${this.grid[2][1]}  |  ${this.grid[2][2]}
    `)
  }
}

class TicTacToe {
  constructor() {
    this.board = new Board();
    this.turn = null;
  }

  getPlayers(callback) {

    // rl.question('Player 1, what is your name?', (name1) => {
    //   console.log(name1, ', you will be Xs for the game. Good Luck!');
    //   this.playerX = new Player(name1);

    //   rl.question('Player 2, what is your name?', (name2) => {
    //     console.log(name2, ', you will be Os for the game. Good Luck!');
    //     this.playerO = new Player(name2);
    //     rl.pause();
    //     callback();
    //   });
    // });

    var name1 = prompt('Player 1, what is your name?')
    console.log(name1, ', you will be Xs for the game. Good Luck!');
    this.playerX = new Player(name1);

    var name2 = prompt('Player 2, what is your name?')
    console.log(name2, ', you will be Os for the game. Good Luck!');
    this.playerO = new Player(name2);
  }

  play() {
    this.getPlayers();
    console.log(this.playerX, this.playerO);
    this.turn = this.playerX;

    while(!this.board.gameOver()) {
      this.turn = this.turn === this.playerX ? this.playerO : this.playerX;
      var move = this.turn.getMove();
      var piece = this.turn === this.playerX ? 'X' : 'O';
      this.board.placePiece(piece, move);

      }
  }
}

var game =new TicTacToe();
game.play();
