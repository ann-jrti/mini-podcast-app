import './Episodedescription.scss';

export const EpisodeDescription = ({ episode }) => {
  return (
    <div className="episode-description-container">
      <h3>{episode.trackName}</h3>
      <p className="episode-description">{episode.description}</p>
    </div>
  );
};
