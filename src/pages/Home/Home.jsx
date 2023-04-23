import { useEffect, useState } from 'react';
import { getPodcasts } from '../../api/services/podcastService';
import { PodcastList } from './components/PodcastList';
import { Spinner } from '../components/Spinner';

export const Home = () => {
  const [podcastsList, setPodcastsList] = useState(null);
  useEffect(() => {
    getPodcasts().then((podcasts) => setPodcastsList(podcasts));
  }, []);

  return (
    <div>
      {podcastsList ? (
        <PodcastList
          onPodcastChange={setPodcastsList}
          podcastList={podcastsList}
        />
      ) : (
        <Spinner loadingText="Loading podcasts.." />
      )}
    </div>
  );
};
