import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Map from './routes/Map';
import './App.css';  // Global styles
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import BookDetails from './pages/BookDetailsDialog';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/add" element={<AddBookPage />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
