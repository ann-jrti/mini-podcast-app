import axios from 'axios';
import { ITUNES_URIS } from '../itunesURIS';
import { buildUrlForCORS } from '../utils/urlBuilder';

const ITUNES_HOST = 'https://itunes.apple.com';

const fetchPodcasts = async () => {
  try {
    const url = buildUrlForCORS(
      `${ITUNES_HOST}${ITUNES_URIS.GET_PODCAST_LIST}`
    );
    const res = await axios.get(url);

    return res.data.feed.entry;
  } catch (error) {
    console.error(error);
  }
};

const fetchPodcast = async (podcastId) => {
  try {
    const url = buildUrlForCORS(
      `${ITUNES_HOST}${ITUNES_URIS.GET_PODCAST_DETAILS}?id=${podcastId}&entity=podcastEpisode`
    );
    const res = await axios.get(url);

    return {
      podcastInfo: res.data.results.shift(),
      episodesList: res.data.results,
    };
  } catch (error) {
    console.error(error);
  }
};

export const itunesClient = {
  fetchPodcasts,
  fetchPodcast,
};
