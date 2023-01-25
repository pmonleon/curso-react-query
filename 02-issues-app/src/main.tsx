import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

//! Remover enable css source maps
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Provide the client to your App */}
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <RouterProvider router={ router } />
    </QueryClientProvider>
  </React.StrictMode>
)
