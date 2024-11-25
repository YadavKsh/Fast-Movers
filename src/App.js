import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './components/Homepage';
import InvoiceForm from './components/InvoiceForm';

const App = () => {
  return (
    <Router>
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/invoice-form" element={<InvoiceForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
