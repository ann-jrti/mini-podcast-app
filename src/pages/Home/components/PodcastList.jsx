import { PodcastCard } from './PodcastCard';
import { SearchBar } from './SearchBar';
import './PodcastList.scss';
import { useEffect, useState } from 'react';
import { getPodcasts } from '../../../api/services/podcastService';
import { filterPodcasts } from './helpers/filterPodcasts';

export const PodcastList = () => {
  const [podcastsList, setPodcastsList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getPodcasts().then((podcasts) => setPodcastsList(podcasts));
  }, []);

  const visiblePodcasts =
    searchText !== '' ? filterPodcasts(podcastsList, searchText) : podcastsList;

  return (
    <div>
      <SearchBar
        onTextSearchChange={setSearchText}
        searchResultCount={visiblePodcasts.length}
      />
      <div className="podcast-list-container">
        {visiblePodcasts.map((podcast) => (
          <PodcastCard podcast={podcast} key={podcast.id.attributes['im:id']} />
        ))}
      </div>
    </div>
  );
};
