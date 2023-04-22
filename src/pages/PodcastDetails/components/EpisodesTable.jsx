import { EpisodeRow } from './EpisodeRow';
import './EpisodesTable.scss';

export const EpisodesTable = ({ episodesList }) => {
  return (
    <table className="episodes-table">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
        {episodesList.map((episode) => (
          <EpisodeRow key={episode.trackId} episode={episode} />
        ))}
      </tbody>
    </table>
  );
};
