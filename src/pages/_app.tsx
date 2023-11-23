import { makeStore, wrapper } from '@/lib/store';
import type { AppProps } from 'next/app'
import "../styles/globals.scss";
import { Provider } from 'react-redux';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={makeStore()}>
      <Component {...pageProps} />
    </Provider>
  )
}

