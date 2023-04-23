export const filterPodcasts = (podcastsList, searchText) => {
  return podcastsList.filter(
    (podcast) =>
      podcast['im:name'].label
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      podcast['im:artist'].label
        .toLowerCase()
        .includes(searchText.toLowerCase())
  );
};
