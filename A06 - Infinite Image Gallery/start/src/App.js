import React, { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';


const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY

export default function App() {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const getPhotos = useCallback(() => {
    const photoURL = query ? 'search/photos' : 'photos/'
    const url = `https://api.unsplash.com/${photoURL}?client_id=${accessKey}&page=${page}&query=${query}`
    console.log(url)
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const results = data.results ?? data
        if (page === 1) setImages(results)
        setImages((images) => [...images, ...results])
      })
  }, [page, query])

  useEffect(() => {
    getPhotos()
  }, [page, getPhotos])

  if (!accessKey) {
    return <a href="https://unsplash.com/documentation" className="error"> Required: Get your access Key first</a>
  }

  function searchPhotos(event) {
    event.preventDefault()
    setPage(1);
    getPhotos()
  }

  return (
    <div className="app">
      <h1>Unsplash Image Gallery!</h1>

      <form onSubmit={searchPhotos}>
        <input onChange={e => setQuery(e.target.value)} type="text" placeholder="Search Unsplash..." />
        <button>Search</button>
      </form>
      <InfiniteScroll
        dataLength={images.length} //This is important field to render the next data
        next={() => setPage((page => page + 1))}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="image-grid">
          {images.map((image, index) => (
            <a href={image.links.html} target="_blank" rel="noopener noreferrer" className="image" key={index}>
              <img src={image.urls.regular} alt={image.alt_description} />
            </a>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
