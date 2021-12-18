import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import ServiceList from './components/ServiceList';
import ServiceDetails from "./components/ServiceDetails";

function App() {
  return (
    <Router>
      <div>
        <div className="page">
          <Routes>
            <Route path="/" element={<ServiceList />} />
            <Route path="/:id/details" element={<ServiceDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
