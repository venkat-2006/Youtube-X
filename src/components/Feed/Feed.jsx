import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { value_converter, API_KEY } from '../../data';
import moment from 'moment';

const Feed = ({ category, isDarkMode }) => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    const res = await fetch(videoList_url);
    const json = await res.json();
    setData(json.items || []);
  };

  useEffect(() => {
    fetchdata();
  }, [category]);

  return (
    <div className={`feed ${isDarkMode ? 'dark' : ''}`}>
      {data.map((item, index) => (
        <Link
          key={index}
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className="card"
        >
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {value_converter(item.statistics.viewCount)} views &bull;{' '}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
