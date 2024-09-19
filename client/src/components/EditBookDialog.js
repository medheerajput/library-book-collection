import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { fetchBook, updateBook } from '../api/booksApi';
import Toast from './Toast';
import bookValidationSchema from '../validation/bookValidation';

const EditBookDialog = ({ open, onClose, bookId, onSave }) => {
  const [initialValues, setInitialValues] = useState({
    title: '',
    author: '',
    year: '',
    genre: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetchBook(bookId);
        setInitialValues(response.data);
      } catch (err) {
        Toast.error('Failed to load book details');
      }
    };

    if (bookId && open) { // Fetch book data only if dialog is open
      fetchBookData();
    }
  }, [bookId, open]);

  const handleSave = async (values) => {
    setLoading(true);
    try {
      await updateBook(bookId, values);
      Toast.success('Book updated successfully');
      onSave(values);
      onClose();
    } catch (err) {
      Toast.error('Failed to update the book');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Edit Book</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={initialValues}
          validationSchema={bookValidationSchema}
          onSubmit={handleSave}
          enableReinitialize // enable reinitialization
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name="title"
                as={TextField}
                label="Title"
                variant="outlined"
                margin="dense"
                fullWidth
                helperText={<ErrorMessage name="title" />}
                error={Boolean(<ErrorMessage name="title" />)}
              />
              <Field
                name="author"
                as={TextField}
                label="Author"
                variant="outlined"
                margin="dense"
                fullWidth
                helperText={<ErrorMessage name="author" />}
                error={Boolean(<ErrorMessage name="author" />)}
              />
              <Field
                name="year"
                as={TextField}
                label="Year"
                type="number"
                variant="outlined"
                margin="dense"
                fullWidth
                helperText={<ErrorMessage name="year" />}
                error={Boolean(<ErrorMessage name="year" />)}
              />
              <Field
                name="genre"
                as={TextField}
                label="Genre"
                variant="outlined"
                margin="dense"
                fullWidth
                helperText={<ErrorMessage name="genre" />}
                error={Boolean(<ErrorMessage name="genre" />)}
              />
              <DialogActions>
                <Button
                  sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: '#388e3c' } }}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: '#d32f2f' } }}
                  color="primary"
                  disabled={isSubmitting || loading}
                >
                  {loading || isSubmitting ? 'Saving...' : 'Save'}
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default EditBookDialog;
