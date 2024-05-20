import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const DraftItem = ({ draft, onEdit, onDelete }) => {
  return (
    <div className="content-item">
      <div className="draft-details">
        <div className="draft-info">
          <div>{draft.topic}</div>
          <div>{draft.domain}</div>
          <div>{draft.subDomain}</div>
        </div>
        <div className="actions">
          {/* Using IconButton with EditIcon and DeleteIcon */}
          <IconButton onClick={onEdit} aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton onClick={onDelete} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default DraftItem;
