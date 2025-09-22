import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Video from './pages/Video/Video';
import Home from './pages/Home/Home';

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navbar setSidebar={setSidebar} setDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} isDarkMode={isDarkMode} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video isDarkMode={isDarkMode} />} />
      </Routes>
    </div>
  );
};

export default App;
