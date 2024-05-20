  import React from 'react';
  import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

  const EditDraftDialog = ({ open, onClose, onSave, draft, onDraftChange }) => {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Draft</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Topic"
            type="text"
            fullWidth
            value={draft ? draft.topic : ''}
            onChange={(e) => onDraftChange({ ...draft, topic: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Domain"
            type="text"
            fullWidth
            value={draft ? draft.domain : ''}
            onChange={(e) => onDraftChange({ ...draft, domain: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Sub-Domain"
            type="text"
            fullWidth
            value={draft ? draft.subDomain : ''}
            onChange={(e) => onDraftChange({ ...draft, subDomain: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">Cancel</Button>
          <Button onClick={onSave} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    );
  };

  export default EditDraftDialog;
