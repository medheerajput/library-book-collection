import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AddBookPage from '../pages/AddBookPage';
import EditBookPage from '../pages/EditBookPage';
import BookDetails from '../pages/BookDetails';

const Map = () => {
  return (
    <Routes>
      <Route exact path="/" element={HomePage} />
      <Route path="/add" element={AddBookPage} />
      <Route path="/edit/:id" element={EditBookPage} />
      <Route path="/book/:id" element={BookDetails} />
    </Routes>
  );
};

export default Map;
