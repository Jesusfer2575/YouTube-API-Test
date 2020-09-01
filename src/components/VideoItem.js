import React from 'react';
import he from 'he';
import '../styles/video.css';

const VideoItem = ({video , handleSelectVideo}) => {
  const description = he.decode(video.snippet.description);
  const title = he.decode(video.snippet.title);
  return (
    <div onClick={() => handleSelectVideo(video)} className='video-item item'>
      <img src={video.snippet.thumbnails.medium.url} alt={description}/>
      <div>
        <p>
          {title}
        </p>
      </div>
    </div>
  )
};
export default VideoItem;