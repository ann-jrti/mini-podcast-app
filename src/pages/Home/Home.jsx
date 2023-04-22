import { useEffect, useState } from 'react';
import { getPodcasts } from '../../api/services/podcastService';
import { PodcastList } from './components/PodcastList';

export const Home = () => {
  const [podcastsList, setPodcastsList] = useState(null);

  useEffect(() => {
    getPodcasts().then((podcasts) => setPodcastsList(podcasts));
  }, []);

  return (
    <div>
      <h2>Podcaster</h2>

      {podcastsList && <PodcastList podcastList={podcastsList} />}
    </div>
  );
};
