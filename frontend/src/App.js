import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UrlShortener from '../src/UrlShortener.';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#eee', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>
          Home
        </Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UrlShortener />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
