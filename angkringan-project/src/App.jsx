import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [targetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const maxAttempts = 5;

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    setAttempts(attempts + 1);

    if (numGuess === targetNumber) {
      setMessage(`🎉 Congratulations! You guessed it right! The number was ${targetNumber}.`);
    } else if (attempts >= maxAttempts - 1) {
      setMessage(`😢 Game Over! You've used all attempts. The number was ${targetNumber}.`);
    } else if (numGuess < targetNumber) {
      setMessage(`🔼 Too low! Try again.`);
    } else {
      setMessage(`🔽 Too high! Try again.`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 text-center p-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Guess the Number Game</h1>
      <p className="text-lg mb-2">I'm thinking of a number between 1 and 100.</p>
      <p className="text-lg mb-6">You have {maxAttempts} attempts to guess it right!</p>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="border-2 border-blue-300 rounded p-2 mb-4"
        placeholder="Enter your guess"
      />

      <button
        onClick={handleGuess}
        disabled={attempts >= maxAttempts || message.includes("Congratulations")}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Guess
      </button>

      <p className="text-lg font-semibold">{message}</p>
      <p className="text-sm text-gray-600">Attempts used: {attempts}/{maxAttempts}</p>

      {attempts >= maxAttempts || message.includes("Congratulations") ? (
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
        >
          Play Again
        </button>
      ) : null}
    </div>
  );
}

export default App
