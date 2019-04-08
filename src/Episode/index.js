import React from "react";

function Episode({ match }) {
  return <div>Episode {match.params.id}</div>;
}

export default Episode;
