import React, { useState } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handlFormSubmit = async (wordToSearch) => {
    const response = await youtube.get('/search', {
      params: {
          q: wordToSearch
      }
    });
    setVideos(response.data.items);
  };

  const handleSelectVideo = (video) => setSelectedVideo(video);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <SearchBar handlFormSubmit={handlFormSubmit}/>
            </Col>
          </Row>
          <Row>
            <Col xl="7">
              <div>
                <VideoDetail video={selectedVideo} />
              </div>
            </Col>
            <Col xl="5">
              <div className="five wide column">
                <VideoList videos={videos} handleSelectVideo={handleSelectVideo}/>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
