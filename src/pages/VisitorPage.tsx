// src/pages/VisitorPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VisitorDetails from '@/components/visitor/VisitorDetails';
import VisitorForm from '@/components/visitor/VisitorForm';
import DeleteVisitorButton from '@/components/visitor/DeleteVisitorButton';

const VisitorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/');
  };

  return (
    <div>
      <VisitorDetails visitorId={id!} />
      <VisitorForm visitorId={id} onSuccess={handleSuccess} />
      <DeleteVisitorButton visitorId={id!} onSuccess={handleSuccess} />
    </div>
  );
};

export default VisitorPage;