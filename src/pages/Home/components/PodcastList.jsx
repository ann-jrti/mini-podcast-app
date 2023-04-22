import { PodcastCard } from './PodcastCard';

export const PodcastList = ({ podcastList }) => {
  return (
    <div>
      {podcastList.map((podcast) => (
        <PodcastCard podcast={podcast} key={podcast.id.label} />
      ))}
    </div>
  );
};
