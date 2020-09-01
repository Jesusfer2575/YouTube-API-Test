import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return ( 
      <div>
        <h1>Enter search keyword to load...</h1>
        <br></br>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  return (
    <div>
      <div>
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;