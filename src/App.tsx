import './App.css'
import { Button } from './components/ui/button'
import { useState } from 'react';

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <Button
      className="w-20 h-20 text-3xl font-bold"
      onClick={onSquareClick}
    >
      {value}
    </Button>
  );
};

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i: number) => {
    if (squares[i]) {
      return;
    }
    const nextSquare = squares.slice();
    if (xIsNext) {
      nextSquare[i] = 'X';
    } else {
      nextSquare[i] = 'O';
    }
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares: (string | null)[]): string | null => {
    const lines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
  }

  const reset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="container">
      <div className="flex justify-center items-center mt-20">
        <div className="flex flex-col">
          <h2 className="text-xl mb-4"><img src={`${import.meta.env.BASE_URL}favicon.png`} alt="logo" className='w-10 h-10 inline-block me-1' />{status}</h2>
          <div className="flex">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="flex">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="flex">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
      </div>
        <div className='flex justify-center mt-5'>
          <Button onClick={reset}>Reset</Button>
        </div>
    </div>
  );
}

export default App;
