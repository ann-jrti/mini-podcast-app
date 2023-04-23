import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import './PodcastDetailsCard.scss';

export const PodcastDetailsCard = ({ podcast }) => {
  const { podcastId, episodeId } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    episodeId && navigate(`/podcast/${podcastId}`);
  };

  return (
    <article className="details-podcast-card-container">
      <div className="details-podcast-card-img-container">
        <img
          style={episodeId ? { cursor: 'pointer' } : {}}
          src={podcast.podcastInfo.artworkUrl600}
          onClick={handleNavigate}
        />
      </div>

      <div>
        <p className="details-podcsat-card-title">
          {podcast.podcastInfo.collectionName}
        </p>
        <p
          style={episodeId ? { cursor: 'pointer' } : {}}
          className="details-podcsat-card-artist"
          onClick={handleNavigate}
        >
          by {podcast.podcastInfo.artistName}
        </p>
      </div>

      <div className="details-podcast-card-description-container">
        <h4>Description:</h4>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(podcast.podcastDescription),
          }}
          className="details-podcast-card-description"
        ></p>
      </div>
    </article>
  );
};
