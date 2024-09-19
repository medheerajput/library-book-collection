import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books'; 

export const fetchBook = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const fetchBooks = async (page = 1, limit = 10) => {
  const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
  return response.data;
};

export const addBook = (bookData) => {
  return axios.post(API_URL, bookData);
};

export const updateBook = (id, bookData) => {
  return axios.put(`${API_URL}/${id}`, bookData);
};

export const deleteBook = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
