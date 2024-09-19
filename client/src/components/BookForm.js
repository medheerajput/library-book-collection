// src/components/BookForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import '../styles/BookForm.css'; 
import bookValidationSchema from '../validation/bookValidation';

const BookForm = ({ onSubmit, initialData = {}, loading }) => {
  // Initial values for Formik
  const initialValues = {
    title: initialData.title || '',
    author: initialData.author || '',
    year: initialData.year || '',
    genre: initialData.genre || '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <Field
              as={TextField}
              name="title"
              label="Title"
              fullWidth
              variant="outlined"
              margin="normal"
              helperText={<ErrorMessage name="title" />}
            />
          </div>

          <div className="form-group">
            <Field
              as={TextField}
              name="author"
              label="Author"
              fullWidth
              variant="outlined"
              margin="normal"
              helperText={<ErrorMessage name="author" />}
            />
          </div>

          <div className="form-group">
            <Field
              as={TextField}
              name="year"
              label="Year"
              type="number"
              fullWidth
              variant="outlined"
              margin="normal"
              helperText={<ErrorMessage name="year" />}
            />
          </div>

          <div className="form-group">
            <Field
              as={TextField}
              name="genre"
              label="Genre"
              fullWidth
              variant="outlined"
              margin="normal"
              helperText={<ErrorMessage name="genre" />}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading || isSubmitting}
          >
            {loading || isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
