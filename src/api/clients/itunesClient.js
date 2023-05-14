import axios from 'axios';
import { ITUNES_URIS } from '../itunesURIS';
import { buildUrlForCORS } from '../utils/urlBuilder';
import RSSParser from 'rss-parser';

const ITUNES_HOST = 'https://itunes.apple.com';

const parser = new RSSParser();

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
    const feed = await parser.parseURL(res.data.results[0].feedUrl);

    return {
      podcastInfo: res.data.results.shift(),
      episodesList: res.data.results,
      podcastDescription: feed.description,
      last50Episodes: feed.items.slice(0, 50),
    };
  } catch (error) {
    console.error(error);
  }
};

export const itunesClient = {
  fetchPodcasts,
  fetchPodcast,
};
