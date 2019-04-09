const API = "https://rickandmortyapi.com/api";

export async function fetchCharacter(id) {
  const res = await fetch(`${API}/character/${id}`)
    .then(body => body.json())
    .then(data => {
      data.episode = data.episode.map(ep => {
        return {
          url: ep,
          id: ep.match(/\/(\d+)$/)[1]
        };
      });
      data.location.id = data.location.url.match(/\/(\d+)$/)[1];
      data.origin.id = data.origin.url.match(/\/(\d+)$/)[1];

      return data;
    });

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
  if (Array.isArray(id)) {
    id = id.join(",");
  }

  const res = await fetch(`${API}/episode/${id}`).then(body => body.json());

  return res;
}

export async function fetchLocationAll(page = 1) {
  const res = await fetch(`${API}/location?page=${page}`).then(body =>
    body.json()
  );

  return res;
}

export async function fetchLocation(id) {
  const res = await fetch(`${API}/location/${id}`).then(body => body.json());

  return res;
}
