import React, { useState } from 'react';

const categories = ['Food', 'Jobs', 'Animals', 'Famous Celebrities', 'Household Objects'];
const secretWords = {
  Food: ["Pizza", "Burger", "Sushi", "Pasta", "Apple", "Banana", "Carrot", "Ice Cream", "Taco", "Steak", "Salad", "Sandwich", "Cheese", "Bread", "Fries", "Hotdog", "Noodles", "Chicken", "Beef", "Fish", "Doughnut", "Cookie", "Cereal", "Yogurt", "Soup", "Rice", "Pie", "Chocolate", "Popcorn", "Egg"],
  Jobs: ["Doctor", "Teacher", "Firefighter", "Police Officer", "Engineer", "Artist", "Chef", "Nurse", "Pilot", "Farmer", "Mechanic", "Scientist", "Lawyer", "Musician", "Actor", "Writer", "Plumber", "Electrician", "Cashier", "Dentist", "Architect", "Designer", "Veterinarian", "Photographer", "Barista", "Construction Worker", "Receptionist", "Therapist", "Librarian", "Software Developer"],
  Animals: ["Cat", "Dog", "Lion", "Tiger", "Elephant", "Zebra", "Giraffe", "Monkey", "Bear", "Kangaroo", "Fox", "Wolf", "Snake", "Frog", "Rabbit", "Horse", "Cow", "Pig", "Goat", "Sheep", "Chicken", "Duck", "Eagle", "Owl", "Whale", "Dolphin", "Shark", "Penguin", "Octopus", "Lizard"],
  'Famous Celebrities': ["Taylor Swift", "Beyonce", "Leonardo DiCaprio", "Tom Cruise", "Oprah Winfrey", "Elon Musk", "Kim Kardashian", "Ariana Grande", "Dwayne Johnson", "Will Smith", "Angelina Jolie", "Rihanna", "Billie Eilish", "Brad Pitt", "Johnny Depp", "Lady Gaga", "Jennifer Aniston", "Drake", "Justin Bieber", "Zendaya", "Emma Watson", "Chris Evans", "Kylie Jenner", "Cardi B", "Post Malone", "Ed Sheeran", "Nicki Minaj", "Selena Gomez", "Miley Cyrus", "Harry Styles"],
  'Household Objects': ["Chair", "Table", "Lamp", "Spoon", "Fork", "Knife", "Plate", "Cup", "Mug", "Pillow", "Blanket", "Mirror", "Clock", "Television", "Remote", "Sofa", "Cushion", "Toaster", "Microwave", "Fridge", "Oven", "Blender", "Fan", "Heater", "Curtains", "Carpet", "Broom", "Vacuum", "Laptop", "Phone"]
};
const questions = {
  Food: [
    "Does this feel like a weekend food to you?",
    "Would you serve this at a party?",
    "Does this make you feel nostalgic?",
    "Would you eat this in front of a date?",
    "Do you think most people like this?",
    "Is this something you would eat when you're stressed?",
    "Would you eat this alone or share it?",
    "Does this remind you of a specific place?",
    "Would you be proud to bring this to a potluck?",
    "Is this a food you could eat while watching a movie?",
    "Does this count as a comfort food to you?",
    "Would you consider this a fancy food?",
    "Is this something you grew up eating?",
    "Do you think this food is better homemade?",
    "Would you eat this for breakfast, even if it’s unusual?",
    "Is this a food you’d recommend to a tourist?",
    "Would this food be better hot or cold?",
    "Does this food feel seasonal to you?",
    "Could you eat this every day without getting tired of it?",
    "Would your grandparents enjoy this?",
    "Would this make a good midnight snack?",
    "Would you order this from your favorite restaurant?",
    "Does this go well with a drink you like?",
    "Would you bring this on a road trip?",
    "Does this feel like a guilty pleasure?",
    "Do you think this is underrated?",
    "Would you eat this in a hurry?",
    "Would you enjoy making this yourself?",
    "Is this food more fun to eat with your hands?",
    "Would you want to post a picture of this on social media?"
  ],
  Jobs: [
    "Would this job suit your personality?",
    "Is this a job you admire from afar?",
    "Would you do this job for a year, just for the experience?",
    "Do you think this job has cool perks?",
    "Is this the kind of job that appears in movies?",
    "Would this job impress your relatives?",
    "Does this feel like a dream job or just a job?",
    "Would this job stress you out in a good way?",
    "Could this job give you a unique lifestyle?",
    "Would you feel proud telling someone you do this?",
    "Is this job more about passion or paycheck?",
    "Would this job be more fun with a team?",
    "Is this job more creative or technical?",
    "Would this be a lonely job?",
    "Would people think you're cool for having this job?",
    "Would this job make for interesting dinner conversations?",
    "Does this job require being very patient?",
    "Would this job drain your energy or fuel it?",
    "Would this job require a strict routine?",
    "Would you want to do this job just once for fun?",
    "Is this job more mental or physical?",
    "Would this job exist in 100 years?",
    "Would this job suit someone spontaneous?",
    "Is this a job where you'd wear interesting clothes?",
    "Could you see yourself accidentally getting into this job?",
    "Would people stereotype someone with this job?",
    "Could this be a side hustle?",
    "Would you feel safe doing this job?",
    "Is this job satisfying in the long term?",
    "Would this job make you feel important?"
  ],
  Animals: [
    "Would you be excited to see this animal in real life?",
    "Does this animal seem misunderstood?",
    "Is this the kind of animal you’d name after a friend?",
    "Would you trust this animal to guard something valuable?",
    "Does this animal feel like a main character or a sidekick?",
    "Would this animal do well in cartoons?",
    "Could this animal be part of a joke?",
    "Would this animal fit in your daily routine somehow?",
    "Does this animal seem sneaky or straightforward?",
    "Would a movie villain have this animal as a pet?",
    "Is this animal cooler in theory than in reality?",
    "Could this animal win a talent show?",
    "Would you take a selfie with this animal?",
    "Would you be okay seeing this animal on your bed?",
    "Does this animal seem social or introverted?",
    "Would this animal enjoy a road trip?",
    "Would you include this animal in a fairy tale?",
    "Would this animal be loud in a quiet room?",
    "Does this animal seem like a good listener?",
    "Could this animal be famous online?",
    "Would you be surprised if this animal liked jazz music?",
    "Is this animal more outdoorsy or indoorsy?",
    "Would you call this animal elegant?",
    "Would this animal like snacks you enjoy?",
    "Is this animal more likely to cause chaos or calm things down?",
    "Could this animal win a staring contest?",
    "Would this animal enjoy snow?",
    "Would this animal do well on TikTok?",
    "Is this animal someone’s favorite?",
    "Would this animal show up uninvited to a picnic?"
  ],
  'Famous Celebrities': [
    "Would this person be fun at a small party?",
    "Is this someone you’d accidentally call by their full name?",
    "Would you trust this person with a secret?",
    "Could you imagine bumping into them at the grocery store?",
    "Does this person feel down-to-earth or out of reach?",
    "Would your grandma recognize them?",
    "Would you want to hear their opinion on pizza?",
    "Is this someone you'd want on your trivia team?",
    "Does this person seem more funny or serious?",
    "Would you recognize them without makeup?",
    "Could they host a late-night show?",
    "Would you invite this person to a game night?",
    "Would they write a dramatic autobiography?",
    "Would this celebrity make a good meme?",
    "Would they be great in a group chat?",
    "Could they win a bake-off?",
    "Would you follow them just for their pet photos?",
    "Is this person more of a trendsetter or a classic?",
    "Would this person wear something weird on purpose?",
    "Would your parents approve of this person?",
    "Would this celebrity enjoy karaoke?",
    "Could they win a reality show?",
    "Is this someone you’d feel weird meeting in real life?",
    "Do they seem like they'd enjoy quiet mornings?",
    "Would they post too much online?",
    "Is this person both admired and criticized?",
    "Would you watch a documentary about them?",
    "Do they seem very private or very open?",
    "Would this person survive in a zombie movie?",
    "Would they be good at giving advice?"
  ],
  'Household Objects': [
    "Would you miss this object if it disappeared?",
    "Does this object make life more comfortable?",
    "Would a guest notice this item?",
    "Is this object something you'd personalize?",
    "Would this be in a dream home?",
    "Is this object more form or function?",
    "Would this object have a personality if it came to life?",
    "Is this object quiet or noisy?",
    "Would this be hard to explain to a child?",
    "Is this a luxury or a necessity?",
    "Would this be good for a prank?",
    "Would this make you feel cozy?",
    "Is this more useful or decorative?",
    "Would this be something you clean often?",
    "Is this object better in sets?",
    "Would you bring this to college?",
    "Could you DIY a version of this?",
    "Would this object be missed in a hotel room?",
    "Would this show up in a commercial?",
    "Is this something you'd argue about replacing?",
    "Could this object break friendships if borrowed?",
    "Would this be good for an emergency?",
    "Does this object age well?",
    "Would you give this as a gag gift?",
    "Would a child turn this into a toy?",
    "Is this object usually seen in the background?",
    "Does this have sentimental value?",
    "Would this object feel cold or warm to the touch?",
    "Would you include this in a minimalist lifestyle?",
    "Would this item be found in your dream apartment?"
  ]
};

function OutOfTheGroupGame() {
  const [players, setPlayers] = useState([]);
  const [playerInput, setPlayerInput] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [category, setCategory] = useState('');
  const [imposterIndex, setImposterIndex] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [votes, setVotes] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentRevealIndex, setCurrentRevealIndex] = useState(0);
  const [wordAssignments, setWordAssignments] = useState([]);
  const [finishReveal, setFinishReveal] = useState(false);
  const [currentResponder, setCurrentResponder] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [playerAnswers, setPlayerAnswers] = useState([]);

  const handleAddPlayer = () => {
    if (playerInput.trim()) {
      setPlayers([...players, playerInput.trim()]);
      setPlayerInput('');
    }
  };

  const confirmIdentity = () => {
      setRevealed(true);
  };

  const nextPlayer = () => {
      setRevealed(false);
      if (currentRevealIndex < players.length - 1) {
          setCurrentRevealIndex(currentRevealIndex + 1);
      } else {
          setFinishReveal(true);
          // Start the questions phase
          setCurrentResponder(0);
          setCurrentQuestion(questions[category][0]);
      }
  };

  const handleAnswerSubmit = (answer) => {
      const newAnswers = [...playerAnswers, { player: players[currentResponder], answer }];
      setPlayerAnswers(newAnswers);
      
      if (currentResponder < players.length - 1) {
          setCurrentResponder(currentResponder + 1);
          setCurrentQuestion(questions[category][currentResponder + 1]);
      } else {
          setShowResults(true);
      }
  };

  const startGame = () => {
    if (players.length >= 3 && category) {
      const words = [...secretWords[category]];
      const imposter = Math.floor(Math.random() * players.length);
      const word = words[Math.floor(Math.random() * words.length)];
      const assignments = players.map((_, i) => (i === imposter ? 'You are out of the group!' : word));
      setImposterIndex(imposter);
      setCurrentRevealIndex(0);
      setWordAssignments(assignments);
      setGameStarted(true);
      setRevealed(false);
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
    setWordAssignments([]);
    setImposterIndex(null);
    setRevealed(false);
    setAnswers([]);
    setQuestionIndex(0);
    setVotes({});
    setShowResults(false);
    setCurrentRevealIndex(0);
    setFinishReveal(false);
    setCurrentResponder(0);
    setCurrentQuestion('');
    setPlayerAnswers([]);
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
      ) : !finishReveal ? (
          <div>
            <h2 className="text-xl font-semibold mb-2">{players[currentRevealIndex]}, confirm your identity:</h2>
            {!revealed ? (
              <button
                className="bg-blue-600 text-white px-4 py-2"
                onClick={confirmIdentity}
              >
                I'm {players[currentRevealIndex]}
              </button>
            ) : (
              <div className="mt-4">
                <p className="text-lg">Your word: <span className="font-bold">{wordAssignments[currentRevealIndex]}</span></p>
                <button
                  className="bg-gray-700 text-white px-4 py-2 mt-4"
                  onClick={nextPlayer}
                >
                  Next Player
                </button>
              </div>
            )}
          </div>
     ) : !showResults ? (
          <div className="mt-6">
            <h2 className="text-xl font-bold">Answer Phase</h2>
            <p className="mt-2"><strong>{players[currentResponder]}</strong>, answer this question:</p>
            <p className="italic mt-2">"{currentQuestion}"</p>
            <input
              type="text"
              placeholder="Type your answer"
              onKeyDown={(e) => e.key === 'Enter' && handleAnswerSubmit(e.target.value)}
              className="mt-2 p-2 border w-full"
            />
            <button
              className="mt-2 px-4 py-2 bg-blue-600 text-white"
              onClick={() => handleAnswerSubmit(document.querySelector('input').value)}
            >
              Submit Answer
            </button>
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
