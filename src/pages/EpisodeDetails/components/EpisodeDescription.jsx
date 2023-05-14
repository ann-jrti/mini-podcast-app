import './EpisodeDescription.scss';
import DOMPurify from 'dompurify';

export const EpisodeDescription = ({ episode, description }) => {
  return (
    <div className="episode-description-container">
      <h3>{episode.trackName}</h3>
      {description ? (
        <div
          className="episode-description"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description.content),
          }}
        ></div>
      ) : (
        <p className="episode-description">{episode.description}</p>
      )}
    </div>
  );
};
