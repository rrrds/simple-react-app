import React, { useState, useEffect } from "react";
import { fetchEpisode } from "../api";

export function Episode({ match }) {
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

export function EpisodeShort({ epData }) {
  return `${epData.episode} - ${epData.name}`;
}
