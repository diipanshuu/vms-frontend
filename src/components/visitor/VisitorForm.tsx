// src/components/VisitorForm.tsx
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createVisitor, updateVisitor, getVisitorById } from '@/api/visitorApi';

interface VisitorFormProps {
  visitorId?: string;
  onSuccess: () => void;
}

const VisitorForm: React.FC<VisitorFormProps> = ({ visitorId, onSuccess }) => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (visitorId) {
      getVisitorById(visitorId).then((data) => reset(data));
    }
  }, [visitorId, reset]);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      if (visitorId) {
        await updateVisitor(visitorId, data);
      } else {
        await createVisitor(data);
      }
      onSuccess();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" required />
      <input {...register('email')} placeholder="Email" required />
      <button type="submit" disabled={loading}>
        {visitorId ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default VisitorForm;