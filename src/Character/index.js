import React, { useState, useEffect } from "react";
import { fetchCharacter } from "../api";

function Character({ match }) {
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

export default Character;
