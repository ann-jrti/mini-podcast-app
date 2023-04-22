const initStorageClient = () => {
  clearExpiredKeys();
};

const clearExpiredKeys = () => {
  const now = new Date().getTime();

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (JSON.parse(localStorage.getItem(key)).expiry < now) {
      localStorage.removeItem(key);
    }
  }
};

const setStoreData = (localStorageKey, data) => {
  const item = {
    value: data,
    expiry: new Date().getTime() + 24 * 60 * 60 * 1000,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(item));
};

const getStoredData = (localStorageKey) => {
  const storedData = JSON.parse(localStorage.getItem(localStorageKey));
  if (!storedData || storedData.expiry < new Date().getTime()) {
    return null;
  }
  return storedData.value;
};

initStorageClient();

export const localStorageClient = {
  setStoreData,
  getStoredData,
};
