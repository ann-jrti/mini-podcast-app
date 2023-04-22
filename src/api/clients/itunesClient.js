import axios from 'axios';
import { RequestUrlList } from '../RequestUrlList';

export const fetchPodcasts = async () => {
  try {
    const res = await axios.get(RequestUrlList.GET_PODCAST_LIST);
    return res.data.feed.entry;
  } catch (error) {
    console.error(error);
  }
};

export const itunesClient = {
  fetchPodcasts,
};
