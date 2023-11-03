export const getNameOfUrl = async (arr: string[], key: string): Promise<string[]> => {
  const arrFilms: string[] = [];
  for (const url of arr) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      arrFilms.push(data[key]);
    } catch (error) {
      console.error('Ошибка при загрузке фильмов:', error);
    }
  }
  return arrFilms;
};
