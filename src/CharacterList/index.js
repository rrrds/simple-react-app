import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./characterList.css";
import { fetchCharacterAll } from "../api";
import { CharacterShort } from "../Character";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacterAll().then(data => setCharacters(data));
  }, []);

  return (
    <>
      <h2>CharacterList</h2>
      <ul className="character-list">
        {characters.map(char => {
          return (
            <li key={char.id} className="character-item">
              <Link to={`/character/${char.id}`}>
                <CharacterShort charData={char} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CharacterList;
