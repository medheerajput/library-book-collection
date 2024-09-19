import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import bookValidationSchema from '../validation/bookValidation.js'; // Import validation schema
import '../styles/BookForm.css'; 

const BookForm = ({ onSubmit, initialData = {}, loading }) => {
  // Initial values for Formik
  const initialValues = {
    title: initialData.title || '',
    author: initialData.author || '',
    year: initialData.year || '',
    genre: initialData.genre || ''
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookValidationSchema} 
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="book-form">
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <Field type="text" id="author" name="author" />
            <ErrorMessage name="author" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="year">Year:</label>
            <Field type="number" id="year" name="year" />
            <ErrorMessage name="year" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="genre">Genre:</label>
            <Field type="text" id="genre" name="genre" />
            <ErrorMessage name="genre" component="div" className="error-message" />
          </div>

          <button type="submit" disabled={loading || isSubmitting}>
            {loading || isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
