import React from 'react';
import App from './components/App';
import BoardDetails from './components/BoardDetails';
import ErrorPage from './components/ErrorPage';

export default [
  { path: '/', action: () => <App /> },
  { path: '/boards/:id', action: ({ params }) => <BoardDetails id={params.id} /> },
  { path: '/error', action: () => <ErrorPage />}
];