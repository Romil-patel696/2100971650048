import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test';

export const getProducts = async (company, category, top, minPrice, maxPrice) => {
  const response = await axios.get(
    `${API_BASE_URL}/companies/${company}/categories/${category}/products`,
    {
      params: { top, minPrice, maxPrice },
      headers: {
        Authorization: `Bearer your_access_token`,
      },
    }
  );
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`, {
    headers: {
      Authorization: `Bearer your_access_token`,
    },
  });
  return response.data;
};
