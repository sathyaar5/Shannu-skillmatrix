import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteConfirmationDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <DeleteIcon style={{ color: 'red', fontSize: 48 }} />
        <Typography>Delete Selected Draft?</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">This action cannot be reversed.</Typography>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center' }}>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={onConfirm} color="error" autoFocus>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
