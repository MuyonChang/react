import Player from "./components/Player"
import Gameboard from "./components/gameboard"
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  
  function handleSelectSqure(){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O': 'X');
  }

  return (
    <div id = "game-container">
      <ol id = "players" className="highlight-player">
        <Player name = 'Player1' symbol = "X" isActive={activePlayer ==='X'}></Player>
        <Player name = 'Player2' symbol = "O" isActive={activePlayer ==='O'}></Player>
      </ol>
      <Gameboard onSelectSquare={handleSelectSqure} activePlayerSymbol={activePlayer}/>
    </div>
  )
}

export default App
