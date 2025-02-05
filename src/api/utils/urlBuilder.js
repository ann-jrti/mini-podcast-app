export const buildUrlForCORS = (url) => {
  return `https://corsproxy.io/?url=${window.encodeURIComponent(url)}`;
};
