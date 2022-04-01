export const fetchImageCards = async (searchValue, page = 1) => {
  const response = await fetch(
    `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=24642073-b12941d2e5507c49f57c90e2e&image_type=photo&orientation=horizontal&per_page=12`
  );
  const data = await response.json();

  return data.hits;
};
