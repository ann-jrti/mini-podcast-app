import { useNavigate } from 'react-router-dom';
import './AppTitle.scss';

export const AppTitle = () => {
  const navigate = useNavigate();
  return (
    <h2 onClick={() => navigate('/')} className="app-title">
      Podcaster
    </h2>
  );
};
