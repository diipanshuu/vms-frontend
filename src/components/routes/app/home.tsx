import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import './HomePage.css'; // Import the CSS file for styling

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="vibrant-bg full-width">
      <Card>
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
        </CardHeader>
        <div className="card-content">
          <button onClick={() => navigate('/visitor-table')} className="dashboard-button">
            Go to Dashboard
          </button>
        </div>
      </Card>
    </div>
  );
}
