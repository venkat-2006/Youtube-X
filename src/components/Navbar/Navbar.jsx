import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logox from '../../assets/logox.png';
import logoy from '../../assets/logoy.png'; // dark mode logo
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';
import togglex from '../../assets/togglex.png';
import { Link } from 'react-router-dom';

const Navbar = ({ setSidebar, setDarkMode, isDarkMode }) => {
    const handleToggleColor = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <nav className={`flex-div navbar ${isDarkMode ? 'dark' : ''}`}>
            <div className="nav-left flex-div">
                <img
                    className='menu-icon'
                    onClick={() => setSidebar(prev => !prev)}
                    src={menu_icon}
                    alt="menu"
                />
                <Link to='/'>
                    <img
                        className='logo'
                        src={isDarkMode ? logoy : logox} // toggle logo
                        alt="logo"
                    />
                </Link>
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input
                        type="text"
                        placeholder='Search'
                        className={isDarkMode ? 'dark-input' : ''}
                    />
                    <img src={search_icon} alt="search" />
                </div>
            </div>

            <div className="nav-right flex-div">
                <img
                    src={togglex}
                    alt="toggle dark mode"
                    className='toggle'
                    onClick={handleToggleColor}
                />
                <img src={upload_icon} alt="upload" />
                <img src={more_icon} alt="more" />
                <img src={notification_icon} alt="notification" />
                <img src={profile_icon} className='user-icon' alt="profile" />
            </div>
        </nav>
    );
};

export default Navbar;
