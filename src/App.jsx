import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Impressum from './pages/Impressum';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './index.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      // Small timeout allows smooth scroll logic for ID anchors on the home page if it stays on home
      setTimeout(() => setCurrentPath(window.location.hash), 50);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    if (currentPath === '#shop') {
      return (
        <>
          <Header />
          <Shop />
          <Footer />
        </>
      );
    }
    if (currentPath === '#impressum') {
      return <Impressum />;
    }
    
    // For local anchors, keep the Home page visible
    // They are handled by native smooth scrolling
    return <Home />;
  };

  return (
    <div className="app-container">
      {renderPage()}
    </div>
  );
}

export default App;
