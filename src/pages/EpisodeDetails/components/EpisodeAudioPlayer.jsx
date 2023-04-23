import './EpisodeAudioPlayer.scss';

export const EpisodeAudioPlayer = ({ episode }) => {
  return (
    <audio
      className="episode-audio-player"
      src={episode.episodeUrl}
      controls="controls"
      preload="none"
    ></audio>
  );
};
