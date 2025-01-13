// src/api/visitorApi.ts
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/visitors';

if (!API_BASE_URL) {
  throw new Error('REACT_APP_API_BASE_URL is not defined');
}

export const getVisitors = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const getVisitorById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const createVisitor = async (visitor: any) => {
  const response = await axios.post(API_BASE_URL, visitor);
  return response.data;
};

export const updateVisitor = async (id: string, visitor: any) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, visitor);
  return response.data;
};

export const deleteVisitor = async (id: string) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};