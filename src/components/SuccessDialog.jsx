import React from 'react';
import { Dialog, DialogContent, DialogActions,  Typography } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';

const SuccessDialog = ({ open, onClose, content }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <FaCheckCircle style={{ marginBottom: '20px', color: 'green', fontSize: '30px' }} />
        <Typography>{content}</Typography>
      </DialogContent>
      <DialogActions>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessDialog;
