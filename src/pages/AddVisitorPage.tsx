import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createVisitor } from '@/api/visitorApi';
import './AddVisitorPage.css'; // Import the CSS file for styling

const AddVisitorPage: React.FC = () => {
  const [newVisitor, setNewVisitor] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    purposeOfVisit: '',
    contactNumber: '',
    email: '',
    inTime: '',
    outTime: '',
    hostEmployeeId: '',
    photoId: '',
    idType: '',
    idNumber: '',
    address: '',
    city: '',
    state: '',
    country: '',
    visitorTypeId: '',
    companyId: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewVisitor({ ...newVisitor, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      await createVisitor({
        firstName: newVisitor.firstName,
        lastName: newVisitor.lastName,
        companyName: newVisitor.companyName,
        purposeOfVisit: newVisitor.purposeOfVisit,
        contactNumber: newVisitor.contactNumber,
        email: newVisitor.email,
        inTime: newVisitor.inTime,
        outTime: newVisitor.outTime,
        hostEmployeeId: newVisitor.hostEmployeeId,
        photoId: newVisitor.photoId,
        idType: newVisitor.idType,
        idNumber: newVisitor.idNumber,
        address: newVisitor.address,
        city: newVisitor.city,
        state: newVisitor.state,
        country: newVisitor.country,
        visitorType: { id: newVisitor.visitorTypeId },
        company: { id: newVisitor.companyId },
      });
      navigate('/visitor-table');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Add New Visitor</h1>
      <form onSubmit={handleSubmit} className="visitor-form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newVisitor.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newVisitor.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="hostEmployeeId"
            placeholder="Host Employee ID"
            value={newVisitor.hostEmployeeId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="visitorTypeId"
            placeholder="Visitor Type ID"
            value={newVisitor.visitorTypeId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={newVisitor.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="purposeOfVisit"
            placeholder="Purpose of Visit"
            value={newVisitor.purposeOfVisit}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={newVisitor.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newVisitor.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="datetime-local"
            name="inTime"
            placeholder="In Time"
            value={newVisitor.inTime}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="datetime-local"
            name="outTime"
            placeholder="Out Time"
            value={newVisitor.outTime}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="photoId"
            placeholder="Photo ID"
            value={newVisitor.photoId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="idType"
            placeholder="ID Type"
            value={newVisitor.idType}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="idNumber"
            placeholder="ID Number"
            value={newVisitor.idNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={newVisitor.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={newVisitor.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={newVisitor.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={newVisitor.country}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="companyId"
            placeholder="Company ID"
            value={newVisitor.companyId}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading} className="submit-button">
          {loading ? 'Creating...' : 'Create Visitor'}
        </button>
      </form>
    </div>
  );
};

export default AddVisitorPage;