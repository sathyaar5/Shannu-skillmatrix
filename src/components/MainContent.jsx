import React, { useState } from 'react';
import SearchBar from './SearchBar';
import DraftItem from './DraftItem';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import EditDraftDialog from './EditDraftDialog';
import SuccessDialog from './SuccessDialog';

const MainContent = ({ drafts, onDeleteDraft, setDrafts }) => {
  const [selectedDraft, setSelectedDraft] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedDraft, setEditedDraft] = useState(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [deleteSuccessOpen, setDeleteSuccessOpen] = useState(false);

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
    setSelectedDraft(null);

    setTimeout(() => {
        setDeleteSuccessOpen(false);
    }, 2000); // Close the success dialog after 3 seconds
};


  const handleCloseDeleteSuccess = () => {
    setDeleteSuccessOpen(false);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
    setEditedDraft(null);
  };

  const handleSaveEdit = () => {
    const updatedDrafts = drafts.map((draft) => {
      if (draft === editedDraft) {
        return editedDraft;
      }
      return draft;
    });
    setDrafts(updatedDrafts);
    setEditDialogOpen(false);
    setEditedDraft(null);
  };

  return (
    <div className="main-content">
      <SearchBar />
      <div className="content">
        {drafts.map((draft, index) => (
          <DraftItem
            key={index}
            draft={draft}
            onEdit={() => handleEdit(draft)}
            onDelete={() => handleDelete(draft)}
          />
        ))}
      </div>

      <DeleteConfirmationDialog
        open={confirmDeleteOpen}
        onClose={() => setConfirmDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Selected Draft?"
        content="Are you sure you want to delete the selected draft?"
        confirmText="Confirm"
        cancelText="Cancel"
      />

      <EditDraftDialog
        open={editDialogOpen}
        onClose={handleCloseEditDialog}
        onSave={handleSaveEdit}
        draft={editedDraft}
        onDraftChange={setEditedDraft}
      />

      <SuccessDialog
        open={deleteSuccessOpen}
        onClose={handleCloseDeleteSuccess}
        content="Draft successfully deleted."
      />
    </div>
  );
};

export default MainContent;
