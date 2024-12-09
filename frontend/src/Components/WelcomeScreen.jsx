import React, { useEffect, useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../assets/css/WelcomeScreen.css'

function WelcomeScreen() {
  const [showMain, setShowMain] = useState(true);

  useEffect(() => {
    // Automatically fade out the main div after 4 seconds
    const timeout = setTimeout(() => {
      setShowMain(false);
    }, 4000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showMain && (
        <div className="main">
          <div className="teamlogo"></div>
          <h1 className="title">EasyTap</h1>
          <h2 className="subtitle">By @Masbroo</h2>
        </div>
      )}
    </>
  );
}

export default WelcomeScreen;
