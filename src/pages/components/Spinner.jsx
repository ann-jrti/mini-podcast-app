import './Spinner.scss';

export const Spinner = ({ loadingText }) => {
  return (
    <div className="loader-container">
      <p>{loadingText}</p>
      <div className="loader"></div>
    </div>
  );
};
