import axios from 'axios';
import { RequestUrlList } from '../RequestUrlList';

const fetchPodcasts = async () => {
  try {
    const res = await axios.get(RequestUrlList.GET_PODCAST_LIST);
    return res.data.feed.entry;
  } catch (error) {
    console.error(error);
  }
};

const fetchPodcast = async (podcastId) => {
  try {
    const res = await axios.get(
      `${RequestUrlList.GET_PODCAST_DETAILS}${podcastId}&entity=podcastEpisode`
    );

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
