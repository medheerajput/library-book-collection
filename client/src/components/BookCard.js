import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const BookCard = ({ book, onDelete }) => {
  return (
    <Card sx={{ maxWidth: 345, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Author: {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Year: {book.year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre: {book.genre}
        </Typography>
        <Button variant="outlined" color="error" sx={{ mt: 2 }} onClick={() => onDelete(book._id)}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
