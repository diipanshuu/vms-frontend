import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getVisitorById, updateVisitor } from '@/api/visitorApi';
import './EditVisitorPage.css'; // Import the CSS file for styling

const EditVisitorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [visitor, setVisitor] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchVisitor = async () => {
        const data = await getVisitorById(id);
        setVisitor(data);
      };
      fetchVisitor();
    }
  }, [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setVisitor({ ...visitor, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id) {
      setLoading(true);
      await updateVisitor(id, visitor);
      setLoading(false);
      navigate('/visitor-table');
    }
  };

  if (!visitor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Visitor</h1>
      <form onSubmit={handleSubmit} className="visitor-form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={visitor.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={visitor.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={visitor.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="purposeOfVisit"
            placeholder="Purpose of Visit"
            value={visitor.purposeOfVisit}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={visitor.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={visitor.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="datetime-local"
            name="inTime"
            placeholder="In Time"
            value={visitor.inTime}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="datetime-local"
            name="outTime"
            placeholder="Out Time"
            value={visitor.outTime}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="hostEmployeeId"
            placeholder="Host Employee ID"
            value={visitor.hostEmployeeId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="photoId"
            placeholder="Photo ID"
            value={visitor.photoId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="idType"
            placeholder="ID Type"
            value={visitor.idType}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="idNumber"
            placeholder="ID Number"
            value={visitor.idNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={visitor.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={visitor.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={visitor.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={visitor.country}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="companyAddress"
            placeholder="Company Address"
            value={visitor.company?.address || ''}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading} className="submit-button">
          {loading ? 'Updating...' : 'Update Visitor'}
        </button>
      </form>
    </div>
  );
};

export default EditVisitorPage;