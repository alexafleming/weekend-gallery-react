import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from './GalleryList/GalleryList';


function App() {

  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    fetchGallery()
  }, [])

  //getting request from server to get Gallery Items
  const fetchGallery = () => {
    axios.get('/gallery')
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My Feed</h1>
      </header>
      <GalleryList list={galleryList} fetchGallery={fetchGallery} />

    </div>
  );
}

export default App;
