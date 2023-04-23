import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EpisodeDetails, ErrorPage, Home, PodcastDetails } from './pages';
import { Layout } from './Layout';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/podcast/:podcastId',
        element: <PodcastDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/podcast/:podcastId/episode/:episodeId',
        element: <EpisodeDetails />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
