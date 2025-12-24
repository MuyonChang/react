import { useState } from "react";

export default function Player({name,symbol,isActive}){
  const [plaayerName, setPlayerName] = useState(name)
  const [isEditing, setIsEditing ] = useState(false); 
  
  function handleEditClick(){
    setIsEditing((isEditing)=>!isEditing);
  }

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  let playerNames = <span className="player-name">{plaayerName}</span>;
  let btnCaption = 'edit' ;
  
  if(isEditing) 
    playerNames = < input type = "text" required value={plaayerName} onChange={handleChange}/>;
  

  return(
        <li className= {isActive ? 'active' : undefined }>
       <span className="player">
          {playerNames}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save':'Edit'}</button>
        </li>
    ); 
}