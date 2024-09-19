import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box
} from '@mui/material';

const BookDetailsDialog = ({ open, onClose, book }) => {
  if (!book) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>
        Book Details
      </DialogTitle>
      <DialogContent>
        <Box sx={{ padding: '16px', backgroundColor: '#fafafa' }}>
          <Typography variant="h6" sx={{ marginBottom: '8px' }}>
            <strong>Title:</strong> {book.title}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '8px' }}>
            <strong>Author:</strong> {book.author}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '8px' }}>
            <strong>Year:</strong> {book.year}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '8px' }}>
            <strong>Genre:</strong> {book.genre}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ padding: '16px' }}>
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          sx={{ textTransform: 'none', borderRadius: '4px' }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookDetailsDialog;
