import { makeStore, wrapper } from '@/lib/store';
import type { AppProps } from 'next/app'
import "../styles/globals.css";
import { Provider } from 'react-redux';
import { useState } from 'react';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      })
  )
  return (
    <Component {...pageProps} />
  )
}

