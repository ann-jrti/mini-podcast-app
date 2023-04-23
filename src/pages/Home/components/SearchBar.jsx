import './SearchBar.scss';

export const SearchBar = ({ onTextSearchChange, searchResultCount }) => {
  const onFilter = (e) => {
    onTextSearchChange(e.target.value);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar-podcasts-counter-container">
        <p className="searchbar-podcasts-counter">
          {searchResultCount.toString()}
        </p>
      </div>
      <input
        className="searchbar-input"
        onChange={onFilter}
        type="text"
        placeholder="Filter podcasts"
      ></input>
    </div>
  );
};
