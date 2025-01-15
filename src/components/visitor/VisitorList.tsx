// src/components/visitor/VisitorList.tsx
import React from 'react';
import VisitorItem from './VisitorItem';

interface VisitorListProps {
  visitors: any[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const VisitorList: React.FC<VisitorListProps> = ({ visitors, onEdit, onDelete }) => {
  return (
    <div className="visitor-table-container">
      <table className="vibrant-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Purpose of Visit</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>In Time</th>
            <th>Out Time</th>
            <th>Host Employee ID</th>
            <th>ID Type</th>
            <th>ID Number</th>
            <th>Address</th>
            <th>Visitor Type</th>
            <th>Company Contact</th>
            <th>Company Email</th>
            <th>Company Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor: any) => (
            <VisitorItem
              key={visitor.id}
              visitor={visitor}
              onEdit={() => onEdit(visitor.id)}
              onDelete={() => onDelete(visitor.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitorList;