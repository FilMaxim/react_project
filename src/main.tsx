import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ErrorBoundary } from './components/error-boundary';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Hello world!</div>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
