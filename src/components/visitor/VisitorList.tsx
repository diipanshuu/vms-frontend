// src/components/VisitorList.tsx
import React, { useEffect, useState } from 'react';
import { getVisitors } from '@/api/visitorApi';
import VisitorItem from './VisitorItem';

const VisitorList: React.FC = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    getVisitors().then(setVisitors);
  }, []);

  return (
    <div>
      {visitors.map((visitor: any) => (
        <VisitorItem key={visitor.id} visitor={visitor} />
      ))}
    </div>
  );
};

export default VisitorList;