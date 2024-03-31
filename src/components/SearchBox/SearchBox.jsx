import css from "../SearchBox/SearchBox.module.css"

const SearchBox = ({ onSearch, filter }) => {

  return (
    <form >
      <span>Find contacts by name</span>
          <br />
      <input className={css.searchInput} type="text" name="topic"  value={filter} onChange={onSearch}/>
    </form>
  );
};

export default SearchBox
