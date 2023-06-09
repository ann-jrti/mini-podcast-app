import { itunesClient, localStorageClient } from '../clients';

const refreshCache = async (apiCall, localStorageKey) => {
  const apiResponse = await apiCall();
  localStorageClient.setStoreData(localStorageKey, apiResponse);
  return apiResponse;
};

export const getPodcasts = async () => {
  const cachedPodcast = localStorageClient.getStoredData('podcasts-data');

  if (cachedPodcast !== null) {
    return cachedPodcast;
  }
  return await refreshCache(itunesClient.fetchPodcasts, 'podcasts-data');
};

export const getPodcast = async (podcastId) => {
  const localStoragePodcastKey = `podcast-${podcastId}-data`;
  const cachedPodcast = localStorageClient.getStoredData(
    localStoragePodcastKey
  );

  if (cachedPodcast !== null) {
    return cachedPodcast;
  }
  return await refreshCache(
    () => itunesClient.fetchPodcast(podcastId),
    localStoragePodcastKey
  );
};
