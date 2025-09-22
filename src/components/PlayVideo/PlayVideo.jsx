import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const PlayVideo = ({ isDarkMode }) => {   // <-- add isDarkMode here
  const { videoId } = useParams()

  const [apiData, setApiData] = useState(null)
  const [channelData, setChanneldata] = useState(null)
  const [commentData, setCommentData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchVideoData = async () => {
    try {
      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      const res = await fetch(videoDetails_url)
      const data = await res.json()
      setApiData(data.items[0])
    } catch (error) {
      console.error('Error fetching video data:', error)
    }
  }

  const fetchOtherData = async () => {
    if (!apiData) return
    try {
      const channeldata_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
      const resChannel = await fetch(channeldata_url)
      const channelJson = await resChannel.json()
      setChanneldata(channelJson.items[0])

      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
      const resComments = await fetch(comment_url)
      const commentsJson = await resComments.json()
      setCommentData(commentsJson.items || [])
    } catch (error) {
      console.error('Error fetching channel/comments:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchVideoData()
  }, [videoId])

  useEffect(() => {
    if (apiData) fetchOtherData()
  }, [apiData])

  if (loading) return <div className={`play-video ${isDarkMode ? 'dark' : ''}`}>Loading video...</div>

  return (
    <div className={`play-video ${isDarkMode ? 'dark' : ''}`}> {/* <-- add dark class here */}
      <iframe
        width="914"
        height="514"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={apiData ? apiData.snippet.title : 'YouTube Video'}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h3>{apiData ? apiData.snippet.title : 'Title Here'}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : '10k'} Views &bull;{' '}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ''}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {apiData ? value_converter(apiData.statistics.likeCount) : 111}
          </span>
          <span>
            <img src={dislike} alt="" />
            1251
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />

      <div className="publisher">
        {channelData && (
          <img
            src={channelData.snippet.thumbnails.default.url}
            alt={apiData ? apiData.snippet.channelTitle : 'Channel'}
          />
        )}
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ''}</p>
          <span>
            {channelData ? value_converter(channelData.statistics.subscriberCount) : '1M'} subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description.slice(0, 250) : 'Description Here'}</p>
        <hr />
        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 111} Comments</h4>

        {commentData.map((item, index) => (
          <div key={index} className="comment">
            <img
              src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt={item.snippet.topLevelComment.snippet.authorDisplayName}
            />
            <div>
              <h3>
                {item.snippet.topLevelComment.snippet.authorDisplayName}
                <span> • {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
              </h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlayVideo
