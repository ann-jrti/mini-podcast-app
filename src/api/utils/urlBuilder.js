export const buildUrlForCORS = (url) => {
  return `https://corsproxy.io/?${window.encodeURIComponent(url)}`;
};
