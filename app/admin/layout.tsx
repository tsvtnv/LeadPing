// In a Next.js App Router, this would be separate. 
// For this React setup, we are using the main DashboardLayout in App.tsx
// This file is a placeholder for the file requirement.
import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return <Outlet />;
};

export default AdminLayout;