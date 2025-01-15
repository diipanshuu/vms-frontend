// filepath: /d:/Cipher/Visitly/vms-front/src/components/visitor/VisitorItem.tsx
// src/components/visitor/VisitorItem.tsx
import React from 'react';

interface VisitorItemProps {
  visitor: any;
  onEdit: () => void;
  onDelete: () => void;
}

const VisitorItem: React.FC<VisitorItemProps> = ({ visitor, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{visitor.firstName} {visitor.lastName}</td>
      <td>{visitor.companyName}</td>
      <td>{visitor.purposeOfVisit}</td>
      <td>{visitor.contactNumber}</td>
      <td>{visitor.email}</td>
      <td>{visitor.inTime}</td>
      <td>{visitor.outTime}</td>
      <td>{visitor.hostEmployeeId}</td>
      <td>{visitor.idType}</td>
      <td>{visitor.idNumber}</td>
      <td>{visitor.address}</td>
      <td>{visitor.visitorType?.typeName}</td>
      <td>{visitor.company?.contactNumber}</td>
      <td>{visitor.company?.email}</td>
      <td>{visitor.company?.address}</td>
      <td>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default VisitorItem;