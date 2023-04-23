import { useEffect, useState } from 'react';
import { PodcastDetailsCard } from '../components/PodcastDetailsCard';
import { useParams } from 'react-router-dom';
import { getPodcast } from '../../api/services/podcastService.js';
import { EpisodeAudioPlayer } from './components/EpisodeAudioPlayer';
import './EpisodeDetails.scss';
import { EpisodeDescription } from './components/EpisodeDescription';

export const EpisodeDetails = () => {
  const [podcastInfo, setPodcastInfo] = useState(null);
  const [episodeInfo, setEpisodeInfo] = useState(null);

  const { podcastId, episodeId } = useParams();

  useEffect(() => {
    console.info(episodeId);
    getPodcast(podcastId).then((podcast) => {
      setPodcastInfo(podcast);
      console.info(podcast);
      setEpisodeInfo(
        podcast.episodesList.find(
          (episode) => episode.trackId === parseInt(episodeId)
        )
      );
    });
  }, [episodeId, podcastId]);

  return (
    <div className="episode-details-container">
      {podcastInfo && (
        <div>
          <PodcastDetailsCard podcast={podcastInfo} />{' '}
        </div>
      )}

      {episodeInfo && (
        <div className="episode-details-description-audio">
          <EpisodeDescription episode={episodeInfo} />
          <EpisodeAudioPlayer episode={episodeInfo} />
        </div>
      )}
    </div>
  );
};
