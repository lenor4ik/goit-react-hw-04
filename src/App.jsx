import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import axios from "axios";
import ImageGallery from './components/ImageGallery/ImageGallery ';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchImages() {
      try {
        setLoading(true);
        setError(false);
        const data = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: query,
            client_id: '2JObP-I6IdUvzkgIJXnS_NNghdzAe6N_KCMX8A8shCA',
            page
          },
        });
        setImages([...images, ...data.data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      };
    }

    fetchImages();
  }, [query, page]);

  const onSubmit = (searchValue) => {
    if (searchValue !== query ) { 
      setImages([]);
      setQuery('');
      setPage(1);
      setSelectedImage(null);
    }
    setQuery(searchValue);
  };

const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <Toaster />
      {error && <ErrorMessage message="ERROR!!!" />}
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />} 
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={() => { setPage(prev => prev + 1) }} />}
      {images.length > 0 && !!selectedImage && <ImageModal selectedImage={selectedImage} closeModal={closeModal} /> }
    </div>
  );
};

export default App
