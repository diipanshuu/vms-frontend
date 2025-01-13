// filepath: /d:/Cipher/Visitly/vms-front/src/components/visitor/VisitorItem.tsx
// src/components/visitor/VisitorItem.tsx
import React from 'react';

interface VisitorItemProps {
  visitor: {
    id: string;
    name: string;
    email: string;
  };
}

const VisitorItem: React.FC<VisitorItemProps> = ({ visitor }) => {
  return (
    <div>
      <h3>{visitor.name}</h3>
      <p>{visitor.email}</p>
    </div>
  );
};

export default VisitorItem;