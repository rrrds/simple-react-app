import React, { useState, useEffect } from "react";
import { fetchLocation } from "../api";

export function Location({ match }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetchLocation(match.params.id).then(data => setLocation(data));
  }, []);

  return (
    location && (
      <div>
        <h2>Location</h2>
        Name: {location.name}
      </div>
    )
  );
}

export function LocationShort({ locData }) {
  return locData.name;
}
