const getFormatedDuration = (timestamp) => {
  const dateObj = new Date(timestamp);

  const hours = dateObj.getUTCHours().toString().padStart(2, '0');
  const minutes = dateObj.getUTCMinutes().toString().padStart(2, '0');
  const seconds = dateObj.getUTCSeconds().toString().padStart(2, '0');

  return hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
};

const getFormatedDate = (date) => {
  const formatDate = new Date(date);
  const formattedDate = `${formatDate.getDate().toString().padStart(2, '0')}/${(
    formatDate.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}/${formatDate.getFullYear()}`;

  return formattedDate;
};

export const formatTime = {
  getFormatedDuration,
  getFormatedDate,
};
