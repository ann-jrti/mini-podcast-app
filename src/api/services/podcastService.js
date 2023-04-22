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
