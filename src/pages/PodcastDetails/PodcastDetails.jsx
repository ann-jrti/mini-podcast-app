import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcast } from '../../api/services/podcastService';

export const PodcastDetails = () => {
  const { podcastId } = useParams();
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    getPodcast(podcastId).then((podcast) => setPodcast(podcast));
  }, [podcastId]);

  return <div>{podcast && JSON.stringify(podcast)}</div>;
};
