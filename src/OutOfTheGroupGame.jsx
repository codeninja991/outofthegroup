import React, { useState } from 'react';

const categories = ['Food', 'Jobs', 'Animals', 'Famous Celebrities', 'Household Objects'];
const secretWords = {
  Food: ["Pizza", "Burger", "Sushi", "Pasta", "Apple", "Banana", "Carrot", "Ice Cream", "Taco", "Steak", "Salad", "Sandwich", "Cheese", "Bread", "Fries", "Hotdog", "Noodles", "Chicken", "Beef", "Fish", "Doughnut", "Cookie", "Cereal", "Yogurt", "Soup", "Rice", "Pie", "Chocolate", "Popcorn", "Egg"],
  Jobs: ["Doctor", "Teacher", "Firefighter", "Police Officer", "Engineer", "Artist", "Chef", "Nurse", "Pilot", "Farmer", "Mechanic", "Scientist", "Lawyer", "Musician", "Actor", "Writer", "Plumber", "Electrician", "Cashier", "Dentist", "Architect", "Designer", "Veterinarian", "Photographer", "Barista", "Construction Worker", "Receptionist", "Therapist", "Librarian", "Software Developer"],
  Animals: ["Cat", "Dog", "Lion", "Tiger", "Elephant", "Zebra", "Giraffe", "Monkey", "Bear", "Kangaroo", "Fox", "Wolf", "Snake", "Frog", "Rabbit", "Horse", "Cow", "Pig", "Goat", "Sheep", "Chicken", "Duck", "Eagle", "Owl", "Whale", "Dolphin", "Shark", "Penguin", "Octopus", "Lizard"],
  'Famous Celebrities': ["Taylor Swift", "Beyonce", "Leonardo DiCaprio", "Tom Cruise", "Oprah Winfrey", "Elon Musk", "Kim Kardashian", "Ariana Grande", "Dwayne Johnson", "Will Smith", "Angelina Jolie", "Rihanna", "Billie Eilish", "Brad Pitt", "Johnny Depp", "Lady Gaga", "Jennifer Aniston", "Drake", "Justin Bieber", "Zendaya", "Emma Watson", "Chris Evans", "Kylie Jenner", "Cardi B", "Post Malone", "Ed Sheeran", "Nicki Minaj", "Selena Gomez", "Miley Cyrus", "Harry Styles"],
  'Household Objects': ["Chair", "Table", "Lamp", "Spoon", "Fork", "Knife", "Plate", "Cup", "Mug", "Pillow", "Blanket", "Mirror", "Clock", "Television", "Remote", "Sofa", "Cushion", "Toaster", "Microwave", "Fridge", "Oven", "Blender", "Fan", "Heater", "Curtains", "Carpet", "Broom", "Vacuum", "Laptop", "Phone"]
};

function OutOfTheGroupGame() {
  const [players, setPlayers] = useState([]);
  const [playerInput, setPlayerInput] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [category, setCategory] = useState('');
  const [chosenWords, setChosenWords] = useState([]);
  const [imposterIndex, setImposterIndex] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [votes, setVotes] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAddPlayer = () => {
    if (playerInput.trim()) {
      setPlayers([...players, playerInput.trim()]);
      setPlayerInput('');
    }
  };

  const startGame = () => {
    if (players.length >= 3 && category) {
      const words = [...secretWords[category]];
      const imposter = Math.floor(Math.random() * players.length);
      const word = words[Math.floor(Math.random() * words.length)];
      const assignedWords = players.map((_, i) => (i === imposter ? '???' : word));
      setImposterIndex(imposter);
      setChosenWords(assignedWords);
      setGameStarted(true);
    }
  };

  const submitAnswer = (answer) => {
    const updated = [...answers, answer];
    setAnswers(updated);
    if (updated.length === players.length) {
      setQuestionIndex(questionIndex + 1);
      setAnswers([]);
    }
  };

  const castVote = (name) => {
    setVotes(prev => ({ ...prev, [name]: (prev[name] || 0) + 1 }));
    if (Object.values(votes).length + 1 === players.length) {
      setShowResults(true);
    }
  };

  const resetGame = () => {
    setPlayers([]);
    setPlayerInput('');
    setGameStarted(false);
    setCategory('');
    setChosenWords([]);
    setImposterIndex(null);
    setRevealed(false);
    setAnswers([]);
    setQuestionIndex(0);
    setVotes({});
    setShowResults(false);
  };

  return (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">Out of the Group</h1>

      {!gameStarted ? (
        <>
          <label className="block mb-2">Select Category:</label>
          <select
            className="mb-4 p-2 border rounded w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Choose a category --</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <input
              className="border p-3 sm:p-2 flex-1 text-base"
              placeholder="Enter player name"
              value={playerInput}
              onChange={(e) => setPlayerInput(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-6 py-3 sm:px-4 sm:py-2 text-base rounded" onClick={handleAddPlayer}>Add</button>
          </div>

          <ul className="mb-4">
            {players.map((p, idx) => (
              <li key={idx} className="border-b py-1">{p}</li>
            ))}
          </ul>

          <button
            className="bg-green-500 text-white px-6 py-3 sm:px-4 sm:py-2 rounded disabled:opacity-50 text-base w-full sm:w-auto"
            onClick={startGame}
            disabled={players.length < 3 || !category}
          >
            Start Game
          </button>
        </>
      ) : !revealed ? (
        <div>
          <h2 className="text-xl font-bold mb-2">Word Reveal Phase</h2>
          {players.map((player, index) => (
            <div key={index} className="mb-2">
              <strong>{player}:</strong> {chosenWords[index]}
            </div>
          ))}
          <button className="mt-4 bg-purple-500 text-white px-6 py-3 sm:px-4 sm:py-2 text-base w-full sm:w-auto rounded" onClick={() => setRevealed(true)}>
            Continue to Questions
          </button>
        </div>
      ) : !showResults ? (
        <div>
          <h2 className="text-xl font-bold mb-2">Answer the Question</h2>
          <p className="mb-2 italic">Q: Describe the word without giving it away</p>
          {players.map((player, index) => (
            <div key={index} className="mb-3">
              <strong className="block mb-1">{player}:</strong> 
              <input 
                type="text" 
                className="border p-3 w-full text-base rounded" 
                placeholder="Answer..." 
                onBlur={(e) => submitAnswer(e.target.value)} 
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-2">Voting Phase</h2>
          {players.map((player, index) => (
            <button key={index} className="block w-full mb-3 bg-red-500 text-white p-3 text-base rounded" onClick={() => castVote(player)}>
              Vote {player}
            </button>
          ))}
          <button className="mt-4 bg-gray-700 text-white px-6 py-3 sm:px-4 sm:py-2 text-base w-full sm:w-auto rounded" onClick={resetGame}>Play Again</button>
          <div className="mt-4">
            <h3 className="font-bold">Imposter was: {players[imposterIndex]}</h3>
            <h4 className="mt-2">Votes:</h4>
            {Object.entries(votes).map(([name, count]) => (
              <div key={name}>{name}: {count} votes</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default OutOfTheGroupGame;
