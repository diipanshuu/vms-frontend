import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VisitorList from '@/components/visitor/VisitorList';
import { getVisitors, deleteVisitor } from '@/api/visitorApi';

const VisitorTablePage: React.FC = () => {
  const [visitors, setVisitors] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    const data = await getVisitors();
    setVisitors(data);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = (id: string) => {
    navigate(`/edit-visitor/${id}`);
  };

  const handleDelete = async (id: string) => {
    await deleteVisitor(id);
    fetchVisitors();
  };

  const filteredVisitors = visitors.filter((visitor) =>
    visitor.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    visitor.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    visitor.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    visitor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="visitor-table-page">
      <h1>Visitors</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <VisitorList
        visitors={filteredVisitors}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default VisitorTablePage;