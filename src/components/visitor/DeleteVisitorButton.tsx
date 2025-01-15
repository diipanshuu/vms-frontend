// src/components/DeleteVisitorButton.tsx
import React from 'react';
import { deleteVisitor } from '@/api/visitorApi';

interface DeleteVisitorButtonProps {
  visitorId: string;
  onSuccess: () => void;
}

const DeleteVisitorButton: React.FC<DeleteVisitorButtonProps> = ({ visitorId, onSuccess }) => {
  const handleDelete = async () => {
    try {
      await deleteVisitor(visitorId);
      onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleDelete}>Delete Visitor</button>;
};

export default DeleteVisitorButton;