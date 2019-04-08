import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchEpisodeAll } from "../api";
import Paginator from "../Paginator";

function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(1);

  useEffect(() => {
    fetchEpisodeAll(page).then(data => {
      setEpisodes(data.results);
      setPageTotal(data.info.pages);
    });
  }, [page]);

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
      <Paginator
        current={page}
        pages={pageTotal}
        onPageChange={page => setPage(page)}
      />
    </>
  );
}

export default EpisodeList;
