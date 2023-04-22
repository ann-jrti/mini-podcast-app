import { PodcastCard } from './PodcastCard';
import { SearchBar } from './SearchBar';
import './PodcastList.scss';

export const PodcastList = ({ podcastList, onPodcastChange }) => {
  return (
    <div>
      <SearchBar onPodcastChange={onPodcastChange} podcasts={podcastList} />
      <div className="podcast-list-container">
        {podcastList.map((podcast) => (
          <PodcastCard podcast={podcast} key={podcast.id.attributes['im:id']} />
        ))}
      </div>
    </div>
  );
};
