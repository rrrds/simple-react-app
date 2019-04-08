import React, { useState, useEffect } from "react";
import { fetchEpisode } from "../api";

function Episode({ match }) {
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    fetchEpisode(match.params.id).then(data => setEpisode(data));
  }, []);

  return (
    episode && (
      <div>
        <h2>Episode</h2>
        Name: {episode.name}
        Air Date: {episode.air_date}
      </div>
    )
  );
}

export default Episode;
