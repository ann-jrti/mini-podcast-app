import './PodcastCard.scss';

export const PodcastCard = ({ podcast }) => {
  return (
    <article className="podcast-card-container">
      <div className="podcast-card-image-container">
        <img
          className="podcast-card-image"
          src={podcast['im:image'][2].label}
        />
      </div>
      <div className="podcast-card-description">
        <h4>{podcast['im:name'].label}</h4>
        <p className="podcast-card-author">
          Author: {podcast['im:artist'].label}
        </p>
      </div>
    </article>
  );
};
