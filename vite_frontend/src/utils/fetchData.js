export const fetchData = async (length = 0, limit = 50) => {
  try {
    const apiUrl = "http://localhost:3000/api/v1/ranking";
    const response = await fetch(`${apiUrl}?length=${length}&limit=${limit}`);
    const { data } = await response.json();

    return {
      id: data.id,
      title: data.title,
      ranking: data.ranking.map(({ position, word, occurrences }) => {
        return { position, word, occurrences };
      }),
    };
  } catch (error) {
    console.error("Error en el fetch a la API");
    return;
  }
};
