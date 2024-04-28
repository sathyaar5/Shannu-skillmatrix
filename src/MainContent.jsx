import React from 'react';
import { FaTrash, FaSearch, FaEdit } from 'react-icons/fa';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, TextField } from '@mui/material';

const MainContent = ({ drafts, onDeleteDraft }) => {
  const [selectedDraft, setSelectedDraft] = React.useState(null);
  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  const [editedDraft, setEditedDraft] = React.useState(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false);
  const [deleteSuccessOpen, setDeleteSuccessOpen] = React.useState(false);

  const handleDelete = (draft) => {
    setSelectedDraft(draft);
    setConfirmDeleteOpen(true);
  };

  const handleEdit = (draft) => {
    setEditedDraft(draft);
    setEditDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    onDeleteDraft(selectedDraft);
    setConfirmDeleteOpen(false);
    setDeleteSuccessOpen(true);
  };

  const handleCloseDeleteSuccess = () => {
    setDeleteSuccessOpen(false);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
    setEditedDraft(null);
  };

  const handleSaveEdit = () => {
    // Add logic to save the edited draft
    setEditDialogOpen(false);
    setEditedDraft(null);
  };

  return (
    <div className="main-content">
      <div className="search-bar">
        <input className="drafts-child" placeholder="Drafts" type="text" />
        <div className="find-in-design">
          <input className="search" placeholder="Search" type="text" />
          <FaSearch />
        </div>
      </div>
      <div className="content">
        {drafts.map((draft, index) => (
          <div key={index} className="content-item">
            <div className="draft-details">
              <div className="draft-info">
                <div>{draft.topic}</div>
                <div>{draft.domain}</div>
                <div>{draft.subDomain}</div>
              </div>
              <div className="actions">
                <Button onClick={() => handleEdit(draft)} startIcon={<FaEdit />} sx={{ marginRight: '8px' }}>Edit</Button>
                <Button onClick={() => handleDelete(draft)} startIcon={<FaTrash />} sx={{ color: 'red' }}>Delete</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={confirmDeleteOpen} onClose={() => setConfirmDeleteOpen(false)}>
        <DialogTitle>Delete Selected Draft?</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the selected draft?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDeleteOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>Confirm</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={editDialogOpen} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Draft</DialogTitle>
        <DialogContent>
          {/* Display form fields to edit the draft */}
          <TextField
            autoFocus
            margin="dense"
            label="Topic"
            type="text"
            fullWidth
            value={editedDraft ? editedDraft.topic : ''}
            onChange={(e) => setEditedDraft({ ...editedDraft, topic: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Domain"
            type="text"
            fullWidth
            value={editedDraft ? editedDraft.domain : ''}
            onChange={(e) => setEditedDraft({ ...editedDraft, domain: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Sub-Domain"
            type="text"
            fullWidth
            value={editedDraft ? editedDraft.subDomain : ''}
            onChange={(e) => setEditedDraft({ ...editedDraft, subDomain: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} color="primary">Cancel</Button>
          <Button onClick={handleSaveEdit} color="primary">Save</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={deleteSuccessOpen} autoHideDuration={3000} onClose={handleCloseDeleteSuccess} message="Draft Successfully Deleted" />
    </div>
  );
};

export default MainContent;
