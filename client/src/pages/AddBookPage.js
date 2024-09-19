import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { addBook } from '../api/booksApi';
import BookForm from '../components/BookForm';
import '../styles/BookForm.css';  

const AddBookPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAddBook = async (bookData) => {
    setLoading(true);
    try {
      await addBook(bookData);
      navigate('/');
    } catch (err) {
      setError('Failed to load app');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Add a New Book</h1>
      {error && <p className="error-message">{error}</p>}
      <BookForm onSubmit={handleAddBook} loading={loading} />
    </div>
  );
};

export default AddBookPage;

