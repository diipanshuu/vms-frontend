// src/components/VisitorDetails.tsx
import React, { useEffect, useState } from 'react';
import { getVisitorById } from '@/api/visitorApi';

interface VisitorDetailsProps {
  visitorId: string;
}

const VisitorDetails: React.FC<VisitorDetailsProps> = ({ visitorId }) => {
  const [visitor, setVisitor] = useState<any>(null);

  useEffect(() => {
    getVisitorById(visitorId).then(setVisitor);
  }, [visitorId]);

  if (!visitor) return <div>Loading...</div>;

  return (
    <div>
      <h2>{visitor.name}</h2>
      <p>{visitor.email}</p>
    </div>
  );
};

export default VisitorDetails;