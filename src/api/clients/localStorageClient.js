const getExpirationKey = (localStorageKey) =>
  `${localStorageKey}-expiration-date`;

const isDataExpired = (localStorageKey) => {
  const expirationKey = getExpirationKey(localStorageKey);
  const expirationDate = localStorage.getItem(expirationKey);

  if (expirationDate && new Date().getTime() < expirationDate) return false;
  return true;
};

export const setStoreExpiration = (localStorageKey) => {
  const expirationKey = getExpirationKey(localStorageKey);
  localStorage.setItem(
    expirationKey,
    new Date().getTime() + 24 * 60 * 60 * 1000
  );
};

export const setStoreData = (localStorageKey, data) => {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
  setStoreExpiration(localStorageKey);
};

export const getStoredData = (localStorageKey) => {
  if (isDataExpired(localStorageKey)) {
    localStorage.removeItem(localStorageKey);
    return null;
  }
  return JSON.parse(localStorage.getItem(localStorageKey));
};

export const localStorageClient = {
  isDataExpired,
  setStoreData,
  getStoredData,
  setStoreExpiration,
};
