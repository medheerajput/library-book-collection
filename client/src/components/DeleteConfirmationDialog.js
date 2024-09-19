import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const DeleteConfirmationDialog = ({ open, onClose, onConfirm, message }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={onClose} 
          sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: '#388e3c' } }} // Green color for Cancel
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: '#d32f2f' } }} // Red color for Delete
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
