import React from 'react';
import './Video.css';
import PlayVideo from '../../components/PlayVideo/PlayVideo';
import Recommended from '../../components/Recommended/Recommended';
import { useParams } from 'react-router-dom';

const Video = ({ isDarkMode }) => {
  const { videoId, categoryId } = useParams();

  return (
    <div className={`play-container ${isDarkMode ? 'dark' : ''}`}>
      <PlayVideo videoId={videoId} isDarkMode={isDarkMode} />
      <Recommended categoryId={categoryId} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Video;
