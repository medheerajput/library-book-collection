// src/components/AddBookDialog.js
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import BookForm from '../components/BookForm'; 

const AddBookDialog = ({ open, onClose, onAdd }) => {
  const handleAdd = (bookData) => {
    onAdd(bookData);
    onClose(); 
  };

  return (
    <Dialog
    fullWidth
    PaperProps={{ style: { width: '600px' } }} 
     open={open} onClose={onClose}>
      <DialogTitle>Add New Book</DialogTitle>
      <DialogContent>
        <BookForm onSubmit={handleAdd} /> 
        <Button onClick={onClose} sx={{bgcolor:"red",color:"white",marginTop:"5px"}} >Cancel</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddBookDialog;
