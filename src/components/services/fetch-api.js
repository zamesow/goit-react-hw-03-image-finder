const fetchPhotos = (tagToSearch, page) => {
  const apiKey = '18749198-d021e8b49b5886c25ed273569';

  return fetch(
    `https://pixabay.com/api/?q=${tagToSearch}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(
        new Error(`По запросу ${tagToSearch} фото отсутствуют`),
      );
    })
    .then(res => res.hits);
};

const api = { fetchPhotos };

export default api;
