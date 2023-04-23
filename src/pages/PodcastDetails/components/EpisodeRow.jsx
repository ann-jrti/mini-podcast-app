import { formatTime } from '../../../utils/formatTime';
import { useNavigate, useLocation } from 'react-router-dom';
import './EpisodeRow.scss';

export const EpisodeRow = ({ episode }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const formattedEpisodeDuration = formatTime.getFormatedDuration(
    episode.trackTimeMillis
  );
  const formattedDate = formatTime.getFormatedDate(episode.releaseDate);

  return (
    <tr key={episode.trackId}>
      <td
        onClick={() =>
          navigate(`${location}/episode/${episode.trackId}`, {
            episode: episode,
          })
        }
        className="podcast-episode-title"
      >
        {episode.trackName}
      </td>
      <td>{formattedDate}</td>
      <td>{formattedEpisodeDuration}</td>
    </tr>
  );
};
