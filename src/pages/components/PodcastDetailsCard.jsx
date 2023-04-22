import './PodcastDetailsCard.scss';

export const PodcastDetailsCard = ({ podcast }) => {
  return (
    <article className="details-podcast-card-container">
      <div className="details-podcast-card-img-container">
        <img src={podcast.podcastInfo.artworkUrl600} />
      </div>

      <div>
        <p className="details-podcsat-card-title">
          {podcast.podcastInfo.collectionName}
        </p>
        <p className="details-podcsat-card-artist">
          by {podcast.podcastInfo.artistName}
        </p>
      </div>

      <div className="details-podcast-card-description-container">
        <h4>Description:</h4>
        <p className="details-podcast-card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </article>
  );
};
