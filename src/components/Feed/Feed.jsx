import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'

const Feed = ({category}) => {
    const [data,setData]=useState([]);

    const fetchdata=async()=>{
        const videoList_url=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${import.meta.env.VITE_API_KEY}`;
        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
    }
    useEffect(()=>{
        fetchdata();

    },[category])
    return (
        <div className="feed">
            {data.map((item,index)=>{
                return(
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>Best channel for tips and tricks every web developer should know.</h2>
                <h3>Stack-X</h3>
                <p>1M views &bull; 2 days ago</p>
            </Link>

                )

            })}
            
           


        </div>

    )
}

export default Feed
