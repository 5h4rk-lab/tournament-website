import React from 'react';
import './Winners.css'; 
function Winners() {
  const winners = [
    { name: 'Winner 1', score: 100 },
    { name: 'Winner 2', score: 95 },
    { name: 'Winner 3', score: 90 },
  ];

  return (
    <div className="container winners-container">
      <h1 className="winners-title">Event Winners</h1>
      <div className="winners-subtitle">Congratulations to the winners!</div>
      <ul className="winners-list">
        {winners.map((winner, index) => (
          <li key={index} className="winners-item">
            <span className="winner-name">{winner.name}</span>
            <span className="winner-score">Score: {winner.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Winners;
