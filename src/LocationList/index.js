import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchLocationAll } from "../api";
import Paginator from "../Paginator";

function LocationList() {
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(1);

  useEffect(() => {
    fetchLocationAll(page).then(data => {
      setLocations(data.results);
      setPageTotal(data.info.pages);
    });
  }, [page]);

  return (
    <>
      <h2>LocationList</h2>
      <ul>
        {locations.map(loc => {
          return (
            <li key={loc.id}>
              <Link to={`/location/${loc.id}`}>{loc.name}</Link>
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

export default LocationList;
