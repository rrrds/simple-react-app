import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCharacterAll } from "../api";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacterAll().then(data => setCharacters(data));
  }, []);

  return (
    <>
      <h2>CharacterList</h2>
      <ul>
        {characters.map(char => {
          return (
            <li key={char.id}>
              <Link to={`/character/${char.id}`}>{char.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CharacterList;
