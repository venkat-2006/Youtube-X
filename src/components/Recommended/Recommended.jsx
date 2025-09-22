import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY, value_converter } from '../../data';
import { Link, useParams } from 'react-router-dom';

const Recommended = ({ categoryId, isDarkMode }) => {
  const [apiData, setApiData] = useState([]);
  const { videoId } = useParams();

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=44&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    try {
      const res = await fetch(relatedVideo_url);
      const data = await res.json();
      setApiData(data.items || []);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [categoryId, videoId]);

  return (
    <div className={`recommended ${isDarkMode ? 'dark' : ''}`}>
      {apiData.map((item, index) => (
        <Link
          to={`/video/${item.snippet?.categoryId}/${item.id?.videoId || item.id}`}
          key={item.id?.videoId || item.id || index}
          className="side-video-list"
        >
          <img src={item.snippet?.thumbnails?.medium?.url} alt={item.snippet?.title} />
          <div className="vid-info">
            <h4>{item.snippet?.title}</h4>
            <p>{item.snippet?.channelTitle}</p>
            <p>{value_converter(item.statistics?.viewCount)} Views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
