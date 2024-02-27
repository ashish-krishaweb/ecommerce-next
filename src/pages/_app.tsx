import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import '@/styles/globals.css'
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
   const [queryClient] = useState(
      () =>
         new QueryClient({
            defaultOptions: {
               queries: {
                  staleTime: 60 * 1000,
               },
            },
         })
   )

   return (
      <QueryClientProvider client={queryClient}>
         <HydrationBoundary state={pageProps.dehydratedState}>
         <Header />
         <Component {...pageProps} />
         <Footer />
         </HydrationBoundary>
      </QueryClientProvider>
   )
}
