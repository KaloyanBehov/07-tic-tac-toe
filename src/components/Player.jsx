import { useState } from "react";

export default function Player({ initalName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, SetplayerName] = useState(initalName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };
  const handleChange = (event) => {
    SetplayerName(event.target.value);
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
