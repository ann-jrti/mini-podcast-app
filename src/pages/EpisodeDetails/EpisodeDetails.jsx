import { useEffect, useState } from 'react';
import { PodcastDetailsCard } from '../components/PodcastDetailsCard';
import { useParams } from 'react-router-dom';
import { getPodcast } from '../../api/services/podcastService.js';
import { EpisodeAudioPlayer } from './components/EpisodeAudioPlayer';
import { EpisodeDescription } from './components/EpisodeDescription';
import { Spinner } from '../components/Spinner';

import './EpisodeDetails.scss';

export const EpisodeDetails = () => {
  const [podcastInfo, setPodcastInfo] = useState(null);
  const [episodeInfo, setEpisodeInfo] = useState(null);

  const { podcastId, episodeId } = useParams();

  useEffect(() => {
    getPodcast(podcastId).then((podcast) => {
      setPodcastInfo(podcast);
      setEpisodeInfo(
        podcast.episodesList.find(
          (episode) => episode.trackId === parseInt(episodeId)
        )
      );
    });
  }, [episodeId, podcastId]);

  return (
    <div className="episode-details-container">
      {episodeInfo ? (
        <>
          <div>
            <PodcastDetailsCard podcast={podcastInfo} />{' '}
          </div>
          <div className="episode-details-description-audio">
            <EpisodeDescription episode={episodeInfo} />
            <EpisodeAudioPlayer episode={episodeInfo} />
          </div>
        </>
      ) : (
        <Spinner loadingText="Loading episode..." />
      )}
    </div>
  );
};
