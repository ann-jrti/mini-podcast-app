import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcast } from '../../api/services/podcastService';
import { PodcastDetailsCard } from '../components/PodcastDetailsCard';
import { EpisodesTable } from './components';

import './PodcastDetails.scss';
import { Spinner } from '../components/Spinner';

export const PodcastDetails = () => {
  const { podcastId } = useParams();
  const [podcastInfo, setPodcastInfo] = useState(null);

  useEffect(() => {
    getPodcast(podcastId).then((podcast) => setPodcastInfo(podcast));
  }, [podcastId]);

  return (
    <div className="podcast-details-container">
      {podcastInfo ? (
        <>
          <div>
            <PodcastDetailsCard podcast={podcastInfo} />
          </div>
          <div className="podcast-details-episodes-container">
            <div>
              <p>Episodes: {podcastInfo.episodesList.length}</p>
            </div>
            <div>
              <EpisodesTable episodesList={podcastInfo.episodesList} />
            </div>
          </div>
        </>
      ) : (
        <Spinner loadingText="Loading podcast..." />
      )}
    </div>
  );
};
