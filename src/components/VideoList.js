  
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleSelectVideo}) => {

  return (
    videos.map((video) => {
      return <VideoItem key={video.id.videoId} video={video} handleSelectVideo={handleSelectVideo} />
    })
  );
};
export default VideoList;