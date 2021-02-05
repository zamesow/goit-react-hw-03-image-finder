function fetchPixabay(newTag, page) {
  const apiKey = '18749198-d021e8b49b5886c25ed273569';

  return fetch(
    `https://pixabay.com/api/?q=${newTag}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`По запросу ${newTag} фото отсутствуют`));
  });
}

const pixabayAPI = { fetchPixabay };

export default pixabayAPI;
