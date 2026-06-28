const url = "http://localhost:5000/pesquisador";

const getPesquisadores = async () => {

  const resposta = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!resposta.ok) {
    throw new Error(
      "Não foi possível buscar os pesquisadores"
    );
  }

  return resposta.json();

};

export default getPesquisadores;