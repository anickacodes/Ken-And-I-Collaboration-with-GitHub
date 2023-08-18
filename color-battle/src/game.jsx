import React, { useState } from 'react';
import Player from './player';
import Dice from './dice';

function Game() {
  const initialHitpoints = 100;

  const [players, setPlayers] = useState([
    {
      name: "Me",
      color: "orchid",
      hitpoints: initialHitpoints,
      turn: true,
    },
    {
      name: "You",
      color: "cornflowerblue",
      hitpoints: initialHitpoints,
      turn: false,
    },
  ]);

  const [diceValue, setDiceValue] = useState(0);

  const handleRollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
  };

  const handleAttack = (attackerIndex, defenderIndex) => {
    if (players[attackerIndex].turn) {
      const attackPoints = Math.floor(Math.random() * 10) + 1; // Random attack points
      const updatedPlayers = [...players];
      updatedPlayers[defenderIndex].hitpoints -= attackPoints;
      if (updatedPlayers[defenderIndex].hitpoints <= 0) {
        // Handle the game-over scenario
        // For now, let's just log the winner
        console.log(`${players[attackerIndex].name} wins!`);
      } else {
        updatedPlayers[attackerIndex].turn = false;
        updatedPlayers[defenderIndex].turn = true;
      }
      setPlayers(updatedPlayers);
    }
  };

  return (
    <div className="game">
      {players.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          color={player.color}
          hitpoints={player.hitpoints}
          turn={player.turn}
          onAttack={() => handleAttack(index, (index + 1) % players.length)}
        />
      ))}
      <Dice value={diceValue} />
      <button onClick={handleRollDice}>Roll Dice</button>
    </div>
  );
}

export default Game;
