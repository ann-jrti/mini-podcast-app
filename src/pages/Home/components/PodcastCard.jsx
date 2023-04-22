import { useNavigate } from 'react-router-dom';
import './PodcastCard.scss';

export const PodcastCard = ({ podcast }) => {
  const navigate = useNavigate();
  return (
    <article
      className="podcast-card-container"
      onClick={() => navigate(`podcast/${podcast.id.attributes['im:id']}`)}
    >
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
