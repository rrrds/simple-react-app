import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchEpisodeAll } from "../api";

function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchEpisodeAll().then(data => setEpisodes(data));
  }, []);

  return (
    <>
      <h2>EpisodeList</h2>
      <ul>
        {episodes.map(ep => {
          return (
            <li key={ep.id}>
              <Link to={`/episode/${ep.id}`}>{ep.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default EpisodeList;
