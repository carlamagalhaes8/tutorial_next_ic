const url = "http://localhost:5000/producao";

const getArtigos = async () => {

  const resposta = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!resposta.ok) {

    throw new Error(
      "Não foi possível buscar as produções"
    );

  }

  return resposta.json();

};

export default getArtigos;