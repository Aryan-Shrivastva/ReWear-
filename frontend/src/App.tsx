import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Landing from './components/pages/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/pages/Dashboard';
import ItemDetail from './components/items/ItemDetail';
import AddItem from './components/items/AddItem';
import AdminPanel from './components/admin/AdminPanel';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32', // Green for sustainability theme
    },
    secondary: {
      main: '#1565C0', // Blue for trust
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/items/add" element={<AddItem />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
