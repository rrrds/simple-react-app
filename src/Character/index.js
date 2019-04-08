import React from "react";

function Character({ match }) {
  return <div>Character {match.params.id}</div>;
}

export default Character;
