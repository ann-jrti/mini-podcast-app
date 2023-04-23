import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { EpisodeDetails, ErrorPage, Home, PodcastDetails } from './pages';
import './index.css';
import { AppTitle } from './pages/components/AppTitle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/podcast/:podcastId',
    element: <PodcastDetails />,
  },
  {
    path: '/podcast/:podcastId/episode/:episodeId',
    element: <EpisodeDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTitle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
