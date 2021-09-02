export function calculateWinner(squares) {
  const lines = [
    //these are all the winning combinations
    [0, 1, 2], //first row
    [3, 4, 5], //second row
    [6, 7, 8], //third row
    [0, 3, 6], //first column
    [1, 4, 7], //second column
    [2, 5, 8], //third column
    [0, 4, 8], //diagonal
    [2, 4, 6], //diagonal
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; //destructuring the values in lines
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const squares = [null, null, null, "X", "X", "O", null, null, null];

console.log(calculateWinner(squares));
