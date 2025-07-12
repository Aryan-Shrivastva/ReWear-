import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/pages/Dashboard';
import ItemDetail from './components/items/ItemDetail';
import AddItem from './components/items/AddItem';
import AdminPanel from './components/admin/AdminPanel';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/items/:id" element={<ItemDetail />} />
      <Route path="/items/add" element={<AddItem />} />
      <Route path="/admin" element={<AdminPanel />} />
    </RouterRoutes>
  );
};

export default Routes; 