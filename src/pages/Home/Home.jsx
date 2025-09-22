import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';

const Home = ({ sidebar, isDarkMode }) => {
    const [category, setCategory] = useState(0);

    return (
        <div className={`home-page ${isDarkMode ? 'dark' : ''}`}>
            <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} isDarkMode={isDarkMode} />
            <div className={`container ${sidebar ? "" : "large-container"}`}>
                <Feed category={category} isDarkMode={isDarkMode} />
            </div>
        </div>
    );
};

export default Home;
