import React, { Fragment, useState } from 'react';
const logoURL = process.env.REACT_APP_LOGO;

const SearchBar = ({ handlFormSubmit }) => {
  const [word, setWord] = useState('');

  const handleChange = (event) => {
    setWord(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handlFormSubmit(word);
  };

  return ( 
    <Fragment>
      <h2 style={{textAlign:"center"}}><img style={{width:'200px', height:'100px',justifyContent:'center'}} src={logoURL} alt="youtube logo"></img></h2>
      <div className='search-bar ui segment'>
          <form onSubmit={handleSubmit} className='ui form'>
              <div className='field'>
                  <label htmlFor="video-search">Video Search</label>
                  <input onChange={handleChange} name='video-search' type="text" placeholder="Search..."/>
              </div>
          </form>
      </div>
    </Fragment>
  );
}
 
export default SearchBar;