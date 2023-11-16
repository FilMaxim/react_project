import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/error-boundary';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HashRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </HashRouter>
  </Provider>
);
