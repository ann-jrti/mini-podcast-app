import { formatTime } from '../../../utils/formatTime';
import './EpisodeRow.scss';

export const EpisodeRow = ({ episode }) => {
  const formattedEpisodeDuration = formatTime.getFormatedDuration(
    episode.trackTimeMillis
  );
  const formattedDate = formatTime.getFormatedDate(episode.releaseDate);

  return (
    <tr key={episode.trackId}>
      <td className="podcast-episode-title">{episode.trackName}</td>
      <td>{formattedDate}</td>
      <td>{formattedEpisodeDuration}</td>
    </tr>
  );
};
