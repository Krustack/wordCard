import { useState } from 'react';
export default function Card({cardData, toggleHint, showHint}) {

  return (
    <div className="card">
      <h2>{cardData.word}</h2>
      {!showHint && (
        <button className="hint" onClick={toggleHint}>hint</button>
      )}
      {showHint && (
        <>
          <h3>{cardData.pinIn}</h3>
          <h3>{cardData.thaiRead}</h3>
        </>
      )}
    </div>
  );
}