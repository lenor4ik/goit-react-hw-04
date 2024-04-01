import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import css from "../SearchBar/SearchBar.module.css"


const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') {
      toast.error('Please enter a search term');
    } else {
      onSubmit(searchTerm);
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input className={css.searchInput}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
