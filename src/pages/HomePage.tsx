// src/pages/HomePage.tsx
import React from 'react';
import VisitorList from '@/components/visitor/VisitorList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Visitors</h1>
      <VisitorList />
    </div>
  );
};

export default HomePage;