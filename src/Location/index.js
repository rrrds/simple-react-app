import React from "react";

function Location({ match }) {
  return <div>Location {match.params.id}</div>;
}

export default Location;
