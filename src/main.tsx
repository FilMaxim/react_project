import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ErrorBoundary } from './components/error-boundary';
import { App } from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
