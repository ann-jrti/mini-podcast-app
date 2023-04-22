import { useEffect, useState } from 'react';
import { getPodcasts } from '../../../api/services/podcastService';

import './SearchBar.scss';

export const SearchBar = ({ podcasts, onPodcastChange }) => {
  const [search, setSearch] = useState('');
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  useEffect(() => {
    if (filteredPodcasts.length > 0) {
      onPodcastChange(filteredPodcasts);
    }
    if (search === '') {
      getPodcasts().then((podcasts) => onPodcastChange(podcasts));
      setFilteredPodcasts([]);
    }
  }, [filteredPodcasts, onPodcastChange, search]);

  const onFilter = (e) => {
    setSearch(e.target.value);
    const newFilter = podcasts.filter(
      (podcast) =>
        podcast['im:name'].label
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        podcast['im:artist'].label
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
    );

    setFilteredPodcasts(newFilter);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar-podcasts-counter-container">
        <p className="searchbar-podcasts-counter">
          {filteredPodcasts.length > 0
            ? filteredPodcasts.length.toString()
            : podcasts.length.toString()}
        </p>
      </div>
      <input
        value={search}
        className="searchbar-input"
        onChange={onFilter}
        type="text"
        placeholder="Search for a podcast name"
      ></input>
    </div>
  );
};
