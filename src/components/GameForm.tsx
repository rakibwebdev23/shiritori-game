import type React from "react"
import { Link } from "react-router-dom"

interface GameButtonProps {
  text: string
  onClick: () => void
}

const GameButton: React.FC<GameButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-700 border border-gray-500 text-gray-300 px-4 py-2 rounded hover:bg-gray-600 hover:border-gray-400 hover:text-gray-200 transition-all duration-200 text-base font-normal min-w-[140px] cursor-pointer shadow-2xl"
    >
      {text}
    </button>
  )
}

const GameForm: React.FC = () => {
  const handleButtonClick = (action: string) => {
    console.log(`${action} clicked`)
  }

  return (
    <div className="bg-gray-800 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl w-full">
        {/* Title */}
        <h1 className="text-4xl font-light text-gray-300 mb-8">
          Shiritori - A Game from Japan
        </h1>
        
        {/* Description */}
        <div className="space-y-3 text-gray-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          <p>Think of a word that starts with the last letter of your opponent's word.</p>
          <p>Win by picking longer words and answering as fast as you can!</p>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          <Link to=""><GameButton 
            text="Tutorial" 
            onClick={() => handleButtonClick("Tutorial")} 
          /></Link>
          <GameButton 
            text="Instructions" 
            onClick={() => handleButtonClick("Instructions")} 
          />
                  <Link to="/aimodal">
                      <GameButton 
            text="Single Player" 
            onClick={() => handleButtonClick("Single Player")} 
          />
                  </Link>
          <GameButton 
            text="Multiplayer" 
            onClick={() => handleButtonClick("Multiplayer")} 
          />
        </div>
      </div>
    </div>
  )
}

export default GameForm;