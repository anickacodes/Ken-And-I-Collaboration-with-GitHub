import React from 'react';

function Player({ name, color, hitpoints, turn, onAttack }) {
  return (
    <div className="player">
      <h2 style={{ color: color }}>{name}</h2>
      <p>Hit Points: {hitpoints}</p>
      <p>{turn ? "It's your turn" : "Waiting for turn"}</p>
      {turn && <button onClick={onAttack}>Attack</button>}
    </div>
  );
}

export default Player;
