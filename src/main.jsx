import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.jsx'
import './index.css'

// Configure React Query with optimal settings
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // Data stays fresh for 5 minutes
            cacheTime: 10 * 60 * 1000, // Cache for 10 minutes
            refetchOnWindowFocus: false, // Don't refetch on window focus
            retry: 3, // Retry failed requests 3 times
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
