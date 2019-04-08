import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchLocationAll } from "../api";

function LocationList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocationAll().then(data => setLocations(data));
  }, []);

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
    </>
  );
}

export default LocationList;
