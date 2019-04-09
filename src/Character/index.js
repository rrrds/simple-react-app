import React, { useState, useEffect } from "react";
import "./character.css";
import { fetchCharacter } from "../api";

export function Character({ match }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacter(match.params.id).then(data => setCharacter(data));
  }, []);

  return (
    character && (
      <div>
        <h2>Character</h2>
        Name: {character.name}
        Status: {character.status}
        Species: {character.species}
        Gender: {character.gender}
      </div>
    )
  );
}

export function CharacterShort({ charData }) {
  return (
    <div className="char-info char-info--short">
      <img
        src={charData.image}
        alt={charData.name}
        className="char-info__avatar"
      />
      <span>{charData.name}</span>
    </div>
  );
}
