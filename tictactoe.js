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
    var move = prompt(this.name + ', what is your move? [x,x]');
    return move;
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
      this.turn.getMove();
      }
  }
}

var game =new TicTacToe();
game.play();
