import React, { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import History from './components/History';
import Footer from './components/Footer'; // Fixing extra slash

const BackendURL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen"> {/* Added background for aesthetics */}
      <HomePage />
      <History />
      <Footer /> 
    </div>
  );
};

export default App;
