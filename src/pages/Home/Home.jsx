import { useEffect, useState } from 'react';
import { getPodcasts } from '../../api/services/podcastService';
import { PodcastList } from './components/PodcastList';
import './Home.scss';

export const Home = () => {
  const [podcastsList, setPodcastsList] = useState(null);
  useEffect(() => {
    getPodcasts().then((podcasts) => setPodcastsList(podcasts));
  }, []);

  return (
    <div>
      <h2 className="home-title">Podcaster</h2>

      {podcastsList && (
        <PodcastList
          onPodcastChange={setPodcastsList}
          podcastList={podcastsList}
        />
      )}
    </div>
  );
};
