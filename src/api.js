const API = "https://rickandmortyapi.com/api";

export async function fetchCharacter(id) {
  const res = await fetch(`${API}/character/${id}`).then(body => body.json());

  return res;
}

export async function fetchCharacterAll(page = 1) {
  const res = await fetch(`${API}/character?page=${page}`).then(body =>
    body.json()
  );

  return res;
}

export async function fetchEpisodeAll(page = 1) {
  const res = await fetch(`${API}/episode?page=${page}`).then(body =>
    body.json()
  );

  return res;
}

export async function fetchEpisode(id) {
  const res = await fetch(`${API}/episode/${id}`).then(body => body.json());

  return res;
}

export async function fetchLocationAll() {
  const res = await fetch(`${API}/location`)
    .then(body => body.json())
    .then(json => json.results);

  return res;
}

export async function fetchLocation(id) {
  const res = await fetch(`${API}/location/${id}`).then(body => body.json());

  return res;
}
